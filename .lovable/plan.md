

## Öppettider-sektion med data från Google Sheets

### Vad jag hittade
Kalkylbladet är publicerat och jag kan läsa kolumn A (etiketterna):
- **Vecka** (veckonummer)
- **Måndag–Söndag** (öppettider per dag)
- **Kommentar** (extra info)

Kolumn B (själva datan/tiderna) verkar vara tom just nu. Planen fungerar oavsett — sektionen hämtar live-data från bladet.

### Plan

1. **Skapa `src/components/OpeningHoursSection.tsx`**
   - Vid sidladdning: hämta CSV från `https://docs.google.com/spreadsheets/d/1Z-PUPu7kdBqM8Gk1yV_AMucKfmn2TXl2R5CjgBIwJ5U/pub?output=csv`
   - Parsa rad-för-rad: kolumn A = etikett, kolumn B = värde
   - Visa i en snygg tabell/lista med veckodagar och tider
   - Visa "Kommentar" separat under tabellen
   - Visa laddningsindikator medan data hämtas, och fallback-meddelande vid fel

2. **Uppdatera `src/pages/Index.tsx`**
   - Importera och lägg in `OpeningHoursSection` direkt efter `AboutSection`

3. **Uppdatera navigeringen i `Navbar.tsx`**
   - Lägg till en länk "Öppettider" som scrollar till `#oppettider`

### Tekniska detaljer
- Ingen backend behövs — Google Sheets "Publicera på webben" ger en publik CSV-URL
- Data hämtas med `fetch` + `useEffect` vid varje sidladdning, så ändringar i kalkylbladet syns direkt
- Enkel CSV-parsning (split på komma/newline) utan externa bibliotek
- Sektionen placeras mellan "Om oss" och "Vårt erbjudande"

### Viktigt
Fyll i kolumn B i kalkylbladet med öppettiderna (t.ex. "10:00–16:00") så visas de automatiskt på sajten.

