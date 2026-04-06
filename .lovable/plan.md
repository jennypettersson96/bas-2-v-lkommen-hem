

## Uppdatera Öppettider-sektionens design

### Ändringar i `src/components/OpeningHoursSection.tsx`

1. **Layout som matchar övriga sektioner** — Byt från `max-w-2xl` + centrerad text till `container` med vänsterjusterad rubrik (samma mönster som AboutSection)

2. **"Vecka" som rubrik** — Separera "Vecka"-raden från övriga dagar. Visa den som en underrubrik (t.ex. `text-lg font-semibold` med veckonumret) ovanför dagslistan, inte som en tabellrad.

3. **Ta bort tabellutseendet** — Ersätt `<table>` med en enkel lista (`div`-baserad) utan ramar/border. Varje dag visas som en rad med label till vänster och tid till höger, med subtil separator (bara en tunn linje eller spacing). Ta bort `rounded-lg border bg-card`.

4. **Kommentar vänsterjusterad** — Flytta kommentaren till vänsterjusterad istället för centrerad.

### Resultat
- Rubrik "Öppettider" vänsterjusterad, `text-3xl font-bold`
- Under den: "Vecka 15" som en underrubrik
- Dagarna listade utan tabellramar, med dag till vänster och tid till höger
- Kommentar i kursiv under listan
- Samma container-bredd och padding som "Om oss"

