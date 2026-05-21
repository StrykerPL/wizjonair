export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop"
              alt="FPV Drone in action"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              O Nas
            </p>
            <h2 className="mb-6 text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Tworzymy wizjonerskie historie
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg font-light leading-relaxed">
                Wizjonair to studio, które tworzy materiały dla marek i nieruchomości.
              </p>
              <p className="font-light leading-relaxed">
                Wieloletnie doświadczenie w filmowaniu dronami i montażu filmów pozwala na tworzenie materiałów, 
                które przyciągają uwagę. Pracujemy na sprzęcie DJI, który gwarantuje 
                najwyższą jakość i bezpieczeństwo.
              </p>
              <p className="font-light leading-relaxed">
                Od luksusowych nieruchomości po produkcje komercyjne - każdy projekt to gwarancje jakości i kreatywności.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-light text-primary md:text-4xl">150+</p>
                <p className="mt-2 text-sm font-light uppercase tracking-wider text-muted-foreground">
                  Projektow
                </p>
              </div>
              <div>
                <p className="text-3xl font-light text-primary md:text-4xl">5+</p>
                <p className="mt-2 text-sm font-light uppercase tracking-wider text-muted-foreground">
                  Lat doświadczenia.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
