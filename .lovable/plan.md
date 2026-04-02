
## Fixa vertikalt utrymme i kontaktsektionen

Problemet: kontaktinfo-kolumnen sträcker sig för att matcha kartans höjd, vilket skapar stora mellanrum mellan Adress, Telefon och E-post.

### Ändring i `src/components/ContactSection.tsx`

Lägg till `self-start` på kontaktinfo-diven så den inte sträcks ut vertikalt för att matcha kartans höjd i grid-layouten.
