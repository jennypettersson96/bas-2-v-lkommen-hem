
## Fixa vertikal alignment mellan sektionerna

Problemet: "Om oss" och "Kontakt" har `container max-w-4xl` vilket gör dem smalare än "Tjänster" som bara har `container`. Rubrikerna startar på olika x-positioner.

### Lösning: Ge alla sektioner samma container-bredd

Ändra "Om oss" och "Kontakt" från `container max-w-4xl` till `container`, så att alla tre sektioner delar samma vänsterkant.

### Ändringar

**`src/components/AboutSection.tsx`** (rad 3)
- Ändra `className="container max-w-4xl"` till `className="container"`

**`src/components/ContactSection.tsx`** (rad 5)
- Ändra `className="container max-w-4xl"` till `className="container"`

Innehållet i "Om oss" och "Kontakt" får fortfarande sin naturliga bredd via texten och grid-layouten, men rubrikerna alignas med "Tjänster".
