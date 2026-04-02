

## Customize site for Klypans blåbär

Transform the template into a branded site for **Klypans blåbär**, a blueberry farm at Klypen 100, Brålanda, Sweden. Blue and white color scheme with classic, clean country style.

### 1. Update color theme (`src/index.css`)
- Change `--primary` to a blueberry blue (e.g. `220 70% 45%`)
- Adjust `--primary-foreground` to white
- Keep background white, use soft blue tints for muted/secondary/accent
- Subtle warm touches for the "country" feel

### 2. Update Navbar (`src/components/Navbar.tsx`)
- Logo text: "Klypans blåbär"
- Nav links: "Välkommen", "Om oss", "Hitta hit"
- Link IDs: `valkommen`, `om-oss`, `hitta-hit`

### 3. Update Hero (`src/components/HeroSection.tsx`)
- Add `id="valkommen"` for scroll targeting
- Heading: "Välkommen till Klypans blåbär"
- Subtext: placeholder about the blueberry farm in Dalsland, self-pick, nature experience
- CTA button: "Hitta hit" linking to `#hitta-hit`
- Country-style background tint

### 4. Update About (`src/components/AboutSection.tsx`)
- Heading: "Om oss"
- Placeholder text about the farm's history, location in Brålanda, passion for blueberries

### 5. Update Services section → Offerings (`src/components/ServicesSection.tsx`)
- Heading: "Vårt erbjudande" (or similar)
- Cards: Självplock (self-pick blueberries), Färska blåbär (fresh blueberries for sale), Naturupplevelse (nature experience/guided visits)
- Relevant descriptions for each

### 6. Update Contact → Hitta hit (`src/components/ContactSection.tsx`)
- Section id: `hitta-hit`, heading: "Hitta hit"
- Placeholder contact info (email, phone, address at Klypen 100, 464 63 Brålanda)
- Add embedded Bing Maps iframe showing the location

### 7. Update Footer (`src/components/Footer.tsx`)
- Company name: "Klypans blåbär"

### 8. Update page title (`index.html`)
- Title: "Klypans blåbär"

### Technical details
- All changes are to existing files, no new files needed
- Color variables updated in CSS custom properties (HSL format)
- Map embed uses an iframe with Bing Maps pointing to Klypen 100, Brålanda
- Placeholder text in Swedish, ready for the user to refine later

