#!/bin/bash
#
# Render a blog cover from the shared template.
#
#   ./scripts/cover/generate.sh "Post title" [eyebrow] [read time] [accent]
#
# Writes a 1200x675 PNG next to this script. Uses headless Chrome rather than
# pulling in puppeteer — this runs a handful of times a month, so a build
# dependency for it would not earn its keep.
#
# A template rather than a per-post illustration: eight prompts give eight
# styles, and the blog stops looking designed. Only the words and accent move.

set -o pipefail

TITLE="${1:?Usage: generate.sh \"Post title\" [eyebrow] [read] [accent]}"
EYEBROW="${2:-Guides}"
READ="${3:-7 min read}"
ACCENT="${4:-#667eea}"

DIR="$(cd "$(dirname "$0")" && pwd)"
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g' | cut -c1-60)
OUT="$DIR/$SLUG.png"

urlenc() { python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$1"; }
URL="file://$DIR/template.html?title=$(urlenc "$TITLE")&eyebrow=$(urlenc "$EYEBROW")&read=$(urlenc "$READ")&accent=$(urlenc "$ACCENT")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || CHROME="$(command -v chromium || command -v google-chrome || true)"
[ -x "$CHROME" ] || { echo "❌ No Chrome/Chromium found."; exit 1; }

# --virtual-time-budget waits for the webfonts; without it the type renders in
# a fallback and every cover comes out looking like a different site.
# stderr is discarded, not stdout+stderr together: headless Chrome on macOS
# emits CVDisplayLink warnings that are noise, but swallowing the exit path
# entirely hid whether the file was written.
"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --window-size=1200,675 --screenshot="$OUT" \
  --virtual-time-budget=3000 \
  "$URL" 2>/dev/null

if [ ! -s "$OUT" ]; then
  echo "❌ Render failed — run Chrome manually to see why:"
  echo "   \"$CHROME\" --headless --screenshot=/tmp/c.png \"$URL\""
  exit 1
fi
echo "✅ $OUT"
