import math
import subprocess

audio = "white-noise.mp3"
output = "white_noise_1_hour.mp4"

# Get duration with ffprobe
duration = float(subprocess.check_output([
    "ffprobe",
    "-v", "error",
    "-show_entries", "format=duration",
    "-of", "default=noprint_wrappers=1:nokey=1",
    audio
]).decode())

loops = math.ceil(3600 / duration)

subprocess.run([
    "ffmpeg",
    "-stream_loop", str(loops - 1),
    "-i", audio,
    "-f", "lavfi",
    "-i", "color=c=black:s=1920x1080:r=30",
    "-t", "3600",
    "-c:v", "libx264",
    "-preset", "slow",
    "-crf", "30",
    "-pix_fmt", "yuv420p",
    "-c:a", "aac",
    "-b:a", "320k",
    "-movflags", "+faststart",
    output
])