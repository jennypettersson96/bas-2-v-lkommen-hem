import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Välkommen", id: "valkommen" },
  { label: "Om oss", id: "om-oss" },
  { label: "Hitta hit", id: "hitta-hit" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-primary">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Klypans blåbär logotyp" className="h-14 w-auto" />
          Klypans blåbär
        </a>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Meny"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-60" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-4 px-6 pb-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(link.id); }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
