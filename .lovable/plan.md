

## Fixa bildbeskärningen i Om oss

### Problem
`object-top` visar toppen av bilderna (himmel/trädtoppar) istället för det intressanta innehållet. Bilderna behöver mer vertikalt utrymme och bättre positionering.

### Ändringar i `src/components/AboutSection.tsx`

1. Ändra `object-top` till `object-bottom` på alla tre bilder – det intressanta innehållet (blåbär, mark, personer) finns i nedre delen av bilderna
2. Ändra aspect ratio från `aspect-[4/3]` till `aspect-[3/4]` för att ge mycket mer vertikalt utrymme och visa hela bilderna bättre
3. Alternativt om `aspect-[3/4]` blir för högt: använd `aspect-square` som mellanväg

