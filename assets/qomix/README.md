# Qomix Images

This folder contains images for the Qomix page book collection.

## Usage

1. **Add book cover images**: Place your book cover images in this folder
2. **Naming convention**: Use descriptive names like `gatsby-cover.jpg`, `metamorphosis-cover.png`, etc.
3. **Recommended image specs**:
   - Format: JPG or PNG
   - Aspect ratio: 3:4 (portrait, typical book cover ratio)
   - Resolution: At least 600x800px for good quality
   - File size: Keep under 500KB for optimal loading

## Integration

To use local images instead of external URLs:

1. Place your image files in this folder
2. Update the `QOMIX_CLASSICS` array in `constants.ts`
3. Change `imageUrl` from external URLs to local paths like:
   ```typescript
   imageUrl: '/assets/qomix/your-image-name.jpg'
   ```

## Example Structure
```
assets/qomix/
├── gatsby-cover.jpg
├── chekhov-stories-cover.jpg
├── metamorphosis-cover.png
├── christmas-carol-cover.jpg
└── ...
```

## Vite Static Assets

Since this project uses Vite, images in the `assets` folder will be served as static assets. You can reference them directly in your code using paths starting with `/assets/`.