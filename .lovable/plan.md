

## Ta bort strecket mellan "Vecka" och veckonumret

### Ändring i `src/components/OpeningHoursSection.tsx`

Ändra raden som visar veckonumret från:
```
{weekRow.label} {weekRow.value && `– ${weekRow.value}`}
```
till:
```
{weekRow.label} {weekRow.value}
```

Detta tar bort tankstrecket (–) så det blir "Vecka 15" istället för "Vecka – 15".

