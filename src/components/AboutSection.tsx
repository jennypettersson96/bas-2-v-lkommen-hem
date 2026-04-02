import { Facebook, Instagram } from "lucide-react";

const AboutSection = () => (
  <section id="om-oss" className="py-20 scroll-mt-16">
    <div className="container">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Om oss</h2>
      <div className="mt-8 space-y-4 max-w-3xl">
        <p className="text-muted-foreground leading-relaxed">
          Klypans blåbär drivs av oss, Glenn och Angelica Johansson med familj, vackert beläget i Klypan utanför Brålanda och omgivet av Dalslands skogar och natur. Här odlar vi våra blåbär med stor omsorg och ett genuint engagemang för att skapa en trivsam och naturnära upplevelse för alla som kommer hit.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Hos oss kan du plocka dina egna blåbär genom vårt självplock, eller köpa färdigplockade bär om du vill ta med något gott hem direkt.
        </p>
        <p className="text-muted-foreground leading-relaxed">
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
    </div>
  </section>
);

export default AboutSection;
