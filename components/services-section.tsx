import { Clapperboard, Building2, Smartphone } from "lucide-react"

const services = [
  {
    icon: Clapperboard,
    title: "FPV Wnetrza",
    description:
      "Immersyjne przeloty przez wnetrza, ktore ukazuja detale architektoniczne i przestrzen z kinowa precyzja.",
  },
  {
    icon: Building2,
    title: "FPV Outdoor",
    description:
      "Dynamiczne ujecia zewnetrzne z niemozliwych katow, ukazujace skale i otoczenie nieruchomosci.",
  },
  {
    icon: Smartphone,
    title: "Social Media Reels",
    description:
      "Materialy w formacie pionowym zoptymalizowane pod Instagram, TikTok i inne platformy spolecznosciowe.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Uslugi
          </p>
          <h2 className="mb-6 text-4xl font-light tracking-tight text-foreground md:text-5xl">
            Co Oferujemy
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            Profesjonalne uslugi cinematografii dronem dopasowane do Twoich potrzeb
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-border bg-background p-8 transition-all duration-300 hover:border-primary/50"
            >
              <service.icon className="mb-6 h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-4 text-xl font-light tracking-wide text-foreground">
                {service.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
