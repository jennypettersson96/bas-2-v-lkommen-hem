import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="hitta-hit" className="py-20 scroll-mt-16">
    <div className="container">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Hitta hit</h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Contact info */}
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Adress</h3>
              <p className="text-sm text-muted-foreground">Klypen 100<br />464 63 Brålanda</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Telefon</h3>
              <a href="tel:+46722228065" className="text-sm text-muted-foreground hover:text-primary transition-colors">072-222 80 65</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">E-post</h3>
              <a href="mailto:klypanshumleodling@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">klypanshumleodling@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Embedded map */}
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            title="Karta till Klypans blåbär"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2100!2d12.3!3d58.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTjCsDM2JzAwLjAiTiAxMsKwMTgnMDAuMCJF!5e0!3m2!1ssv!2sse!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
