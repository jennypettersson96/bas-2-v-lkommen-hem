

## Generate a logo for Klypans blåbär

Create a clean, classic logo inspired by the uploaded image of hands cupping blueberries, fitting the blue-and-white country-style branding.

### Steps

1. **Generate logo** using the Nano banana image generation API (`google/gemini-2.5-flash-image`) with a prompt for a clean, minimal logo featuring cupped hands holding blueberries — simple enough to work as a favicon and navbar logo, with a transparent/white background and the blue color palette.

2. **Copy generated logo** to `public/images/logo.png`

3. **Update Navbar** to display the logo image next to the "Klypans blåbär" text

4. **Update favicon** (`public/favicon.svg`) to a simplified blueberry icon version

### Technical details
- Use `LOVABLE_API_KEY` with the image generation endpoint
- Logo style: clean line art or simple illustration, country-classic feel, works at small sizes
- Save to `public/images/` for use in navbar and favicon

