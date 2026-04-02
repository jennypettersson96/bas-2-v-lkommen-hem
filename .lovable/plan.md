

## Fixa bildbeskärningen i Om oss

### Problem
`object-cover` med `aspect-[3/2]` beskär bilderna från mitten som standard, vilket kan klippa bort personer. Bilderna behöver `object-position` för att centrera på personerna.

### Ändringar i `src/components/AboutSection.tsx`

1. Lägg till `object-top` eller `object-center` på bilderna beroende på innehåll – för porträttbilder med personer fungerar `object-top` bättre eftersom ansikten oftast är i övre delen
2. Ändra aspect ratio till `aspect-[4/3]` för att ge mer vertikalt utrymme och visa mer av personerna
3. Alla tre bilder: `className="w-full aspect-[4/3] object-cover object-top"`

Detta ger mer utrymme vertikalt och fokuserar beskärningen uppåt där personerna typiskt befinner sig.

