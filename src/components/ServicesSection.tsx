import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { title: "[Tjänst 1]", description: "[Kort beskrivning av tjänsten]" },
  { title: "[Tjänst 2]", description: "[Kort beskrivning av tjänsten]" },
  { title: "[Tjänst 3]", description: "[Kort beskrivning av tjänsten]" },
];

const ServicesSection = () => (
  <section id="tjanster" className="bg-muted/50 py-20 scroll-mt-16">
    <div className="container">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Tjänster</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card key={i} className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">{s.title}</CardTitle>
              <CardDescription>{s.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
