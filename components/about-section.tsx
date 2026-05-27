export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/images/dji-avata-2-action.jpg"
              alt="DJI Avata 2 FPV Drone"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              O nas
            </p>
            <h2 className="mb-6 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              Tworzymy ujęcia, które zatrzymują uwagę.
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg font-light leading-relaxed">
                Wizjonair to studio specjalizujące się w nowoczesnych realizacjach FPV i cinematic drone shots dla nieruchomości, 
                hoteli, biznesu i marek. Łączymy dynamiczne przeloty FPV z klasycznymi ujęciami filmowymi, tworząc materiały, które budują emocje i wyróżniają się na tle standardowych produkcji.
              </p>
              <p className="font-light leading-relaxed">
                Pracujemy na profesjonalnym sprzęcie DJI, wykorzystując zarówno drony FPV, jak i klasyczne drony, 
                co pozwala realizować płynne przeloty wewnątrz i na zewnątrz obiektów - od luksusowych apartamentów i restauracji po przestrzenie komercyjne oraz inwestycje premium.
              </p>
              <p className="font-light leading-relaxed">
                Wieloletnie doświadczenie w filmowaniu, montażu i pracy z obrazem pozwala nam tworzyć materiały dopracowane nie tylko technicznie, 
                ale przede wszystkim wizualnie. Każdy projekt traktujemy indywidualnie, dbając o atmosferę, dynamikę i detale, które przyciągają uwagę odbiorcy już od pierwszych sekund.
              </p>
<p className="font-light leading-relaxed">          Tworzymy treści do:
<ul>
<li>prezentacji nieruchomości,</li>
<li>hoteli i apartamentów,</li>
<li>social media,</li>
<li>kampanii reklamowych,</li>
<li>materiałów promocyjnych i wizerunkowych.</li>
</ul>
Od dynamicznych przelotów one-take FPV po spokojne cinematic shots — naszym celem jest pokazanie przestrzeni z perspektywy, której nie da się osiągnąć tradycyjną kamerą.
</p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-light text-primary md:text-4xl">150+</p>
                <p className="mt-2 text-sm font-light uppercase tracking-wider text-muted-foreground">
                  Projektów
                </p>
              </div>
              <div>
                <p className="text-3xl font-light text-primary md:text-4xl">5+</p>
                <p className="mt-2 text-sm font-light uppercase tracking-wider text-muted-foreground">
                  Lat doświadczenia
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
