#!/bin/bash

# serve-local.sh
# Start a local development server to preview the site.
# Usage: ./scripts/serve-local.sh [port]

PORT=${1:-8000}

echo "🚀 Starting local server..."
echo "📍 Site will be available at: http://localhost:$PORT"
echo ""
echo "Press Ctrl+C to stop the server."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server "$PORT"
# Fall back to Python 2
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer "$PORT"
else
    echo "❌ Python is not installed. Please install Python to run the local server."
    echo ""
    echo "Alternatives:"
    echo "  - npx serve"
    echo "  - npx http-server"
    echo "  - php -S localhost:$PORT"
    exit 1
fi
