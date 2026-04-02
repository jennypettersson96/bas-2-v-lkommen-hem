

## Visa mannens hela huvud i about-3.jpg

### Problem
`object-bottom` fokuserar på nedre delen av bilden, vilket klipper mannens huvud i den tredje bilden (familjen med hund).

### Ändring i `src/components/AboutSection.tsx`

Ge den tredje bilden (`about-3.jpg`) en egen `object-center` istället för `object-bottom` — detta centrerar beskärningen och visar mannens hela huvud medan hunden och bebisen fortfarande syns. De andra två bilderna behåller `object-bottom`.

