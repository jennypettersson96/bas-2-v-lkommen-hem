

## Ta bort bakgrunden från logotypen

Använd bild-redigerings-API:t för att ta bort den vita bakgrunden från den nuvarande logotypen och spara resultatet med transparent bakgrund.

### Steg

1. Kopiera AI-gateway-scriptet till `/tmp/lovable_ai.py`
2. Använd `--edit-image` på `public/images/logo.png` med instruktionen "Remove the white background, make it fully transparent. Keep the illustration and text exactly as they are."
3. Spara resultatet till `/mnt/documents/logo_transparent.png` för nedladdning
4. Ersätt även `public/images/logo.png` med den transparenta versionen

### Tekniska detaljer
- Modell: `google/gemini-2.5-flash-image` via `--edit-image`
- Om resultatet inte blir bra, prova `google/gemini-3-pro-image-preview`

