export function Introduction() {
  return (
    <section className="w-full section-padding bg-secondary/30">
      <div className="container-width">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading with decorative elements */}
          <div className="relative text-center mb-16">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-[1px] bg-primary" />
            <h2 className="text-4xl md:text-5xl font-light mt-8 tracking-wide">
              Welcome to{" "}
              <span className="font-semibold text-primary">LUMIÈRE</span>
            </h2>
          </div>

          {/* Introduction paragraphs with elegant spacing */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg md:text-xl text-foreground/80 font-light">
              In a city of endless beauty options, finding consistently exceptional
              nail and lash services feels impossible. Too often, luxury prices
              come with rushed service and disappointing results.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 italic">
              Why compromise with assembly-line treatments and impersonal service
              when your self-care routine should be an experience to look forward
              to?
            </p>

            <p className="text-lg md:text-xl text-foreground">
              Welcome to{" "}
              <span className="font-semibold">LUMIÈRE</span>, where we've
              reimagined beauty services as an art form. Our master technicians
              take pride in creating bespoke experiences that transform not just
              your appearance, but your entire day.
            </p>
          </div>

          {/* Decorative bottom element */}
          <div className="flex justify-center pt-8">
            <div className="w-16 h-[1px] bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
} 