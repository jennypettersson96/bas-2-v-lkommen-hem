

## Bakgrundsbild på "Vårt erbjudande"-sektionen

### Ändringar i projektet

1. **Kopiera bilden** till `public/images/` (samma mönster som hero-bilden)
2. **Uppdatera `ServicesSection.tsx`**:
   - Lägg till bakgrundsbild med `background-image`, `background-size: cover`, `background-position: center`
   - Lägg till en mörk overlay (`bg-black/50`) för läsbarhet, likt HeroSection
   - Ändra texten till vit (`text-white`) och ge korten semi-transparenta bakgrunder
   - Använd `import.meta.env.BASE_URL` för korrekt sökväg på GitHub Pages
   - Ge sektionen mer padding vertikalt (`py-28` eller liknande) för att "space up"

### Resultat
Sektionen får samma visuella kraft som hero-sektionen, med blåbärsbilden synlig bakom korten och en snygg overlay för kontrast.

