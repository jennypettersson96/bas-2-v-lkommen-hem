import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const offerings = [
  {
    title: "Självplock",
    description: "Plocka dina egna blåbär direkt i naturen. En härlig upplevelse för hela familjen.",
  },
  {
    title: "Färska blåbär",
    description: "Köp färdigplockade, handplockade blåbär. Perfekta för sylt, paj eller att äta som de är.",
  },
  {
    title: "Naturupplevelse",
    description: "Njut av Dalslands vackra natur med en promenad bland blåbärsriset. Frisk luft och lugn garanteras.",
  },
];

const ServicesSection = () => (
  <section id="erbjudande" className="bg-primary/5 py-20 scroll-mt-16">
    <div className="container">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Vårt erbjudande</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((s, i) => (
          <Card key={i} className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">{s.title}</CardTitle>
              <CardDescription>{s.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
