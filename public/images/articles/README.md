# Article Thumbnails

Place article thumbnail images in this folder.

## How to add thumbnails:

1. **Option 1: Local images (Recommended)**
   - Upload your image to this folder
   - In your Obsidian article, set thumbnail to just the filename:
     ```yaml
     thumbnail: "article-name.jpg"
     ```
   - Or use a relative path:
     ```yaml
     thumbnail: "/images/articles/article-name.jpg"
     ```

2. **Option 2: Direct Imgur URLs**
   - Get the direct image URL (must be `https://i.imgur.com/ID.jpg` format)
   - In your Obsidian article:
     ```yaml
     thumbnail: "https://i.imgur.com/ID.jpg"
     ```

3. **Option 3: GitHub Raw Content**
   - Host images in a GitHub repo
   - Use raw.githubusercontent.com URL:
     ```yaml
     thumbnail: "https://raw.githubusercontent.com/user/repo/main/path/to/image.jpg"
     ```

## Image Requirements:
- Recommended size: 1200x630px (for social sharing)
- Format: JPG or PNG
- Max file size: 500KB (for fast loading)

