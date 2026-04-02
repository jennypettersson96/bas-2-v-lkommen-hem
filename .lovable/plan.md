

## Add hero background image

Copy the uploaded photo to the project and use it as a full-cover background image in the HeroSection, with a dark overlay to keep text readable.

### Steps

1. **Copy image**: `user-uploads://klypansblabar.jpg` → `public/images/klypansblabar.jpg` (public folder since it's a CSS background)

2. **Update HeroSection.tsx**: Add inline `backgroundImage` style with the photo as a full-cover background, plus a semi-transparent dark/blue overlay div so the white text remains legible. Adjust text colors to white.

### Technical details
- Use `public/images/` so the image is referenced via URL (`/images/klypansblabar.jpg`), accounting for `BASE_URL`
- Background: `background-size: cover; background-position: center;`
- Overlay: absolute-positioned div with `bg-black/50` or `bg-primary/60`
- Text: switch to `text-white` for heading and paragraph

