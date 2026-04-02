const HeroSection = () => (
  <section id="valkommen" className="flex min-h-[70vh] flex-col items-center justify-center bg-primary/5 px-4 text-center scroll-mt-16">
    <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
      Välkommen till Klypans blåbär
    </h1>
    <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
      Mitt i Dalslands vackra natur, vid Klypen 100 utanför Brålanda, odlar och skördar vi blåbär med kärlek och omtanke. Kom och upplev självplock, frisk luft och smaken av riktiga svenska blåbär.
    </p>
    <div className="mt-8">
      <a
        href="#hitta-hit"
        className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Hitta hit
      </a>
    </div>
  </section>
);

export default HeroSection;
