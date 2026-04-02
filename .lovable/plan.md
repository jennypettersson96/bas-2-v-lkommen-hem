
## Fixa bildsökvägar för GitHub Pages

### Problem
Bilderna i Om oss-sektionen använder absoluta sökvägar (`/about-1.jpg`) som inte inkluderar GitHub Pages base URL (`/repo-name/`). HeroSection löser detta korrekt med `import.meta.env.BASE_URL`.

### Ändring i `src/components/AboutSection.tsx`

1. Lägg till `const baseUrl = import.meta.env.BASE_URL;` i komponenten
2. Ändra bildsökvägarna från `/about-1.jpg` till `` `${baseUrl}about-1.jpg` `` (samma mönster för alla tre bilder)

Detta är samma mönster som redan används i `HeroSection.tsx`.
