import { Facebook, Instagram } from "lucide-react";

const AboutSection = () => (
  <section id="om-oss" className="py-20 scroll-mt-16">
    <div className="container">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-10">Om oss</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Text column */}
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Klypans blåbär drivs av oss, Glenn och Angelica Johansson med familj, vackert beläget i Klypan utanför Brålanda och omgivet av Dalslands skogar och natur. Här odlar vi våra blåbär med stor omsorg och ett genuint engagemang för att skapa en trivsam och naturnära upplevelse för alla som kommer hit.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hos oss kan du plocka dina egna blåbär genom vårt självplock, eller köpa färdigplockade bär om du vill ta med något gott hem direkt.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vi uppdaterar öppettider och aktuell information löpande på våra sociala medier – allt efter hur blåbären mognar.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.facebook.com/dalslandsblabar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/klypansblabar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/about-1.jpg"
              alt="Blåbärsplockning"
              className="w-full aspect-[3/2] object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src="/about-2.jpg"
                alt="Färska blåbär"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src="/about-3.jpg"
                alt="Familjen med hund"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
