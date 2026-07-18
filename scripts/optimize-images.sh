#!/usr/bin/env bash
#
# optimize-images.sh — compress the landing-page screenshots.
#
# The screenshots in public/features are 2400–3000px wide but never render
# wider than ~700px (≈1400px on retina). This downscales them to a sane max
# width and re-encodes as WebP, which shrinks the folder from ~28MB to ~1-2MB.
#
# Usage:
#   scripts/optimize-images.sh              # convert -> .webp alongside the .png (non-destructive)
#   scripts/optimize-images.sh --replace    # ...and delete each source .png after a successful convert
#
# Env overrides:  SRC_DIR (default public/features)  MAX_WIDTH (1600)  QUALITY (82)
#
set -euo pipefail

SRC_DIR="${SRC_DIR:-public/features}"
MAX_WIDTH="${MAX_WIDTH:-1600}"
QUALITY="${QUALITY:-82}"
REPLACE=0
[ "${1:-}" = "--replace" ] && REPLACE=1

command -v cwebp >/dev/null 2>&1 || { echo "error: cwebp not found (brew install webp)"; exit 1; }
[ -d "$SRC_DIR" ] || { echo "error: $SRC_DIR not found (run from repo root)"; exit 1; }

before_total=0
after_total=0
count=0

# NUL-delimited so filenames with spaces are safe.
while IFS= read -r -d '' png; do
  webp="${png%.png}.webp"
  before_kb=$(du -k "$png" | cut -f1)

  # Only downscale when the source is wider than MAX_WIDTH; never upscale.
  width=$(sips -g pixelWidth "$png" 2>/dev/null | awk '/pixelWidth/{print $2}')
  if [ -n "$width" ] && [ "$width" -gt "$MAX_WIDTH" ]; then
    cwebp -quiet -q "$QUALITY" -resize "$MAX_WIDTH" 0 "$png" -o "$webp"
  else
    cwebp -quiet -q "$QUALITY" "$png" -o "$webp"
  fi

  after_kb=$(du -k "$webp" | cut -f1)
  before_total=$((before_total + before_kb))
  after_total=$((after_total + after_kb))
  count=$((count + 1))
  printf '  %-45s %5sKB -> %5sKB\n' "$(basename "$png")" "$before_kb" "$after_kb"

  [ "$REPLACE" -eq 1 ] && rm -f "$png"
done < <(find "$SRC_DIR" -type f -iname '*.png' -print0)

echo "----------------------------------------------------------------"
printf '  %d images   %sKB -> %sKB   (saved %sKB)\n' \
  "$count" "$before_total" "$after_total" "$((before_total - after_total))"
[ "$REPLACE" -eq 1 ] && echo "  source .png files removed (--replace)" || echo "  .webp written alongside .png (re-run with --replace to remove originals)"
