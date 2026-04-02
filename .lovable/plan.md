

## Om oss med bilder – enklare och snyggare layout

### Reviderad design

Istället för masonry-rutnät, en renare tvåkolumns-layout med en **staplad bildkolumn** där bilderna har olika storlekar för visuellt intresse:

```text
Desktop (md+):
┌──────────────────────┬──────────────────────┐
│  Om oss              │                      │
│                      │  ┌──────────────────┐ │
│  Text stycke 1       │  │                  │ │
│  Text stycke 2       │  │    Stor bild     │ │
│  Text stycke 3       │  │                  │ │
│  [FB] [IG]           │  └──────────────────┘ │
│                      │  ┌────────┐┌────────┐ │
│                      │  │ Bild 2 ││ Bild 3 │ │
│                      │  └────────┘└────────┘ │
└──────────────────────┴──────────────────────┘

Mobil: Text → bilder under, alla i en kolumn
```

### Ändringar

1. **Kopiera bilderna** till `public/` som `about-1.jpg`, `about-2.jpg`, `about-3.jpg`
2. **Uppdatera `src/components/AboutSection.tsx`**:
   - Layout: `grid grid-cols-1 md:grid-cols-2 gap-10 items-center`
   - Ta bort `max-w-3xl` på textdelen
   - Höger kolumn: en stor bild (aspect-[4/3]) ovanpå, två mindre (aspect-square) sida vid sida under med `grid-cols-2 gap-4`
   - Alla bilder: `rounded-xl`, `object-cover`, `shadow-lg`
   - Rubrik "Om oss" placeras ovanför hela gridet

