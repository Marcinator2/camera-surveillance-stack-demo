#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8080}"

# Always serve from the script's directory.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Starting local server in $SCRIPT_DIR"
echo "Open: http://localhost:$PORT/"

echo "Press Ctrl+C to stop."

if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT"
elif command -v python >/dev/null 2>&1; then
  exec python -m http.server "$PORT"
else
  echo "Error: Python is not installed (python3/python not found)." >&2
  exit 1
fi
