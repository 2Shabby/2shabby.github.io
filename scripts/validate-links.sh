#!/bin/bash

# validate-links.sh
# A simple script to check for broken internal links in the site.
# Usage: ./scripts/validate-links.sh

set -e

echo "🔍 Validating internal links..."
echo ""

# Find all HTML files
HTML_FILES=$(find . -name "*.html" -not -path "./.git/*" -not -path "./node_modules/*")

ERRORS=0

for file in $HTML_FILES; do
    echo "Checking: $file"
    
    # Extract href values from the file
    HREFS=$(grep -oP 'href="\K[^"]+' "$file" 2>/dev/null || true)
    
    for href in $HREFS; do
        # Skip external links, anchors, mailto, tel, protocol-relative URLs, and template placeholders
        if [[ "$href" == http* ]] || \
           [[ "$href" == "//"* ]] || \
           [[ "$href" == "#"* ]] || \
           [[ "$href" == "mailto:"* ]] || \
           [[ "$href" == "tel:"* ]] || \
           [[ "$href" == *"{{"* ]]; then
            continue
        fi
        
        # Resolve the path relative to the file's directory
        FILE_DIR=$(dirname "$file")
        
        # Handle root-relative paths
        if [[ "$href" == /* ]]; then
            TARGET_PATH=".$href"
        else
            TARGET_PATH="$FILE_DIR/$href"
        fi
        
        # Remove query strings and anchors
        TARGET_PATH=$(echo "$TARGET_PATH" | sed 's/[?#].*//')
        
        # Check if target exists
        if [[ ! -e "$TARGET_PATH" ]]; then
            echo "  ❌ Broken link: $href"
            ERRORS=$((ERRORS + 1))
        fi
    done
done

echo ""

if [[ $ERRORS -gt 0 ]]; then
    echo "❌ Found $ERRORS broken link(s)"
    exit 1
else
    echo "✅ All internal links are valid!"
    exit 0
fi
