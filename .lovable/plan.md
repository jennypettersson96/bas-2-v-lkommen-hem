

## Förbättra layouten i kontaktsektionen

Kontaktinfo-blocken har för stora gap och tar upp onödigt mycket vertikalt utrymme. Problemet syns tydligt i screenshotet — de tre kontaktraderna (Adress, Telefon, E-post) har stora mellanrum och kartan har mycket luft runtomkring.

### Ändringar i `src/components/ContactSection.tsx`

1. **Minska section-padding**: `py-20` → `py-12`
2. **Minska gap mellan rubrik och innehåll**: `mt-10` → `mt-6`
3. **Minska gap mellan grid-kolumnerna**: `gap-10` → `gap-6`
4. **Minska gap mellan kontaktraderna**: `gap-8` → `gap-4`, `lg:gap-6` → `lg:gap-4`
5. **Ta bort sm:grid-cols-3** på kontakt-listan (ser konstigt ut på mellanstor skärm) — använd enkel kolumn-layout genomgående
6. **Minska ikon-storlek**: `h-6 w-6` → `h-5 w-5` för en tätare, mer proportionerlig look

