---
title: "Sample Article: How to Write Posts"
date: 2026-01-14
tags:
  - writing
  - guide
description: "A template demonstrating the article structure for this blog."
---

This is the opening paragraph of your article. It should hook the reader and set up what the post will cover. When displayed on the writing page, these first paragraphs will be visible as a preview.

The excerpt continues here with more context. You can include multiple paragraphs before the excerpt separator. This gives readers enough content to decide if they want to read the full article.

<!--more-->

## The Full Article Begins Here

Everything after the `<!--more-->` separator will only be visible when the reader clicks through to the full article view. This maintains a single source of truth: you write once, and Jekyll automatically handles both the preview and full content.

### Why This Pattern Works

1. **Single Source of Truth**: The article content lives in one file
2. **Automatic Excerpts**: Jekyll extracts everything before `<!--more-->`
3. **Clean URLs**: Articles get pretty permalinks like `/writing/sample-article/`
4. **Consistent Styling**: The same CSS handles both preview and full view

### Writing Tips

When writing your articles:

- Put your best content in the first few paragraphs
- Use the `<!--more-->` separator after 2-3 paragraphs
- Add meaningful tags for categorization
- Include a description for SEO and social sharing

```python
# You can include code blocks
def hello_world():
    print("Code highlighting works too!")
```

## Conclusion

This template shows how the blog infrastructure works. Delete this sample and start writing your own posts!
