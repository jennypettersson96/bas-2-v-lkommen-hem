const HeroSection = () => (
  <section className="flex min-h-[70vh] flex-col items-center justify-center bg-primary/5 px-4 text-center">
    <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
      [Huvudrubrik här]
    </h1>
    <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
      [Underrubrik / kort beskrivning här]
    </p>
    <div className="mt-8">
      <a
        href="#kontakt"
        className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Kontakta oss
      </a>
    </div>
  </section>
);

export default HeroSection;
