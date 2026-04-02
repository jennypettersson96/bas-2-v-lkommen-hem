

## Redigera logotypen: fixa all text

Den uppladdade logotypen har textfel som ska korrigeras:
1. **"BLÄBÄR"** → **"BLÅBÄR"** (ä → å)
2. **"SWEISH BLUEBERRIES"** → **"AMERIKANSKA BLÅBÄR"**

### Steg

1. Kopiera den uppladdade bilden (`user-uploads://image-4.png`) till `/tmp/logo-input.png`
2. Använd `--edit-image` med AI-gateway-scriptet för att redigera texten: ändra "BLÄBÄR" till "BLÅBÄR" och ersätt "SWEISH BLUEBERRIES" (eller liknande engelsk text) med "AMERIKANSKA BLÅBÄR" — behåll allt annat exakt som det är
3. Ersätt `public/images/logo.png` med resultatet
4. Kopiera till `/mnt/documents/logo.png` för nedladdning

### Tekniska detaljer
- Modell: `google/gemini-2.5-flash-image` via `--edit-image`
- Om resultatet inte blir bra, prova med `google/gemini-3-pro-image-preview` eller `google/gemini-3.1-flash-image-preview`

