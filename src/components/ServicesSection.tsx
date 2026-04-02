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

const ServicesSection = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="erbjudande"
      className="relative py-28 scroll-mt-16 overflow-hidden"
      style={{
        backgroundImage: `url(${baseUrl}images/erbjudande-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Vårt erbjudande</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((s, i) => (
            <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">{s.title}</CardTitle>
                <CardDescription className="text-white/80">{s.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
