

## Flytta "Vårt erbjudande" ovanför "Öppettider"

Byt ordningen på komponenterna i `src/pages/Index.tsx` så att `<ServicesSection />` renderas före `<OpeningHoursSection />`.

### Ändring i `src/pages/Index.tsx`

Nuvarande ordning:
```
<AboutSection />
<OpeningHoursSection />
<ServicesSection />
```

Ny ordning:
```
<AboutSection />
<ServicesSection />
<OpeningHoursSection />
```

Uppdatera även eventuella navigeringslänkar i `Navbar.tsx` om de förlitar sig på sektionsordningen.

