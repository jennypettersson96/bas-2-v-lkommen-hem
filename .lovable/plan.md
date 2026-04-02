
## Fixa kontaktsektionen

Sektionen har placeholder-text med hakparenteser runt telefon och e-post. Uppdatera med riktiga uppgifter och ta bort hakparenteserna.

### Ändringar i `src/components/ContactSection.tsx`

1. **Telefon** (rad 21): Ändra `[+46 00 000 00 00]` → `072-222 80 65`
2. **E-post** (rad 28): Ändra `[info@klypansblabar.se]` → `klypanshumleodling@gmail.com`
3. Gör telefonnumret och e-posten klickbara med `<a href="tel:...">` och `<a href="mailto:...">`

### Tekniska detaljer
- Telefon-länk: `<a href="tel:+46722228065">072-222 80 65</a>`
- E-post-länk: `<a href="mailto:klypanshumleodling@gmail.com">klypanshumleodling@gmail.com</a>`
- Behåll allt annat (adress, karta, layout) som det är
