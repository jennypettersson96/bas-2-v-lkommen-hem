

## Förbättra Om oss-layouten

### Problem
- `items-center` gör att texten centreras vertikalt mot den höga bildkolumnen, vilket skapar mycket tom yta ovanför texten
- Bildkolumnen tar för mycket vertikal plats jämfört med textmängden
- Dålig visuell balans mellan kolumnerna

### Lösning

Ändra `src/components/AboutSection.tsx`:

1. Byt `items-center` till `items-start` så text och bilder börjar på samma nivå
2. Ändra den stora bilden från `aspect-[4/3]` till `aspect-[3/2]` för att minska höjden
3. Ändra de två små bilderna från `aspect-square` till `aspect-[4/3]` för bättre proportion
4. Lägg till `text-lg` på paragraferna för att ge texten mer visuell tyngd och fylla kolumnen bättre

Detta ger en mer balanserad sektion där text och bilder startar i linje och bilderna inte dominerar.

