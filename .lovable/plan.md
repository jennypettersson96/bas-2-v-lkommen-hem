

## Fixa stavningen i den ursprungliga logotypen

Använd bild-redigerings-API:t för att redigera den **tidigare** logotypen (den som användaren tyckte var finare) och ändra texten från "bläbär" till "blåbär" — utan att ändra stilen.

### Steg

1. **Redigera logotypen** med `--edit-image` på den nuvarande `public/images/logo.png` (eller generera en ny med samma stil som den ursprungliga) — instruktion: "Change the text from 'bläbär' to 'blåbär' (replace ä with å). Keep everything else exactly the same."

2. **Ersätt** `public/images/logo.png` med resultatet.

3. **Kopiera** till `/mnt/documents/logo.png` för nedladdning.

### Tekniska detaljer
- Använd `edit-image` via ai-gateway-scriptet med modellen `google/gemini-2.5-flash-image`
- Om edit-image inte ger bra resultat, generera en ny med en prompt som matchar den ursprungliga stilen (händer med blåbär, blå linje-illustration, symmetrisk, med texten "Klypans blåbär")

