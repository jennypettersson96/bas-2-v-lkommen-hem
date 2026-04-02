

## Flytta bilderna under texten i Om oss

Ändra `src/components/AboutSection.tsx` från tvåkolumns-layout till en enkolumns-layout där bilderna placeras under texten.

### Ändringar

1. Ta bort `grid grid-cols-1 md:grid-cols-2 gap-10 items-start` – använd en enkel vertikal layout istället
2. Texten och sociala medier-ikonerna ligger kvar som de är
3. Bildgalleriet placeras under texten i ett `grid grid-cols-1 md:grid-cols-3 gap-4` rutnät – alla tre bilder i rad på desktop, staplat på mobil
4. Alla bilder får `aspect-[3/2]`, `rounded-xl`, `shadow-lg`, `object-cover` för enhetligt utseende

