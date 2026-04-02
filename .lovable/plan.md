

## Gör kartan större i kontaktsektionen

### Ändringar i `src/components/ContactSection.tsx`

1. **Ändra grid-proportionerna** så kartan får mer horisontellt utrymme: `lg:grid-cols-2` → `lg:grid-cols-[1fr_2fr]` (kartan får dubbelt så bred kolumn)
2. **Öka kartans höjd**: `aspect-video` → `min-h-[350px] h-full` så kartan fyller hela grid-radens höjd istället för att låsas till 16:9

