import { Instagram, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Kontakt
            </p>
            <h2 className="mb-6 text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Stworzmy Cos Razem
            </h2>
            <p className="mb-12 max-w-lg text-lg font-light leading-relaxed text-muted-foreground">
              Gotowy, by wyniesc swoj projekt na wyzszy poziom dzieki kinowym ujeciem dronem? 
              Skontaktuj sie, by omowic swoja wizje.
            </p>

            {/* Contact Links */}
            <div className="space-y-6">
              <a
                href="https://instagram.com/wizjonair"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-border transition-all group-hover:border-primary group-hover:bg-primary/10">
                  <Instagram className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <div>
                  <p className="text-sm font-light uppercase tracking-wider text-muted-foreground">
                    Instagram
                  </p>
                  <p className="text-foreground transition-colors group-hover:text-primary">
                    @wizjonair
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@wizjonair.com"
                className="group flex items-center gap-4 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-border transition-all group-hover:border-primary group-hover:bg-primary/10">
                  <Mail className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <div>
                  <p className="text-sm font-light uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="text-foreground transition-colors group-hover:text-primary">
                    hello@wizjonair.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-border">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-light uppercase tracking-wider text-muted-foreground">
                    Lokalizacja
                  </p>
                  <p className="text-foreground">
                    Dostepni w Calej Polsce
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="border border-border bg-background p-8 lg:p-12">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-light uppercase tracking-wider text-muted-foreground"
                >
                  Imie i Nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  placeholder="Twoje imie"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-light uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  placeholder="twoj@email.pl"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-sm font-light uppercase tracking-wider text-muted-foreground"
                >
                  Typ Projektu
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="">Wybierz kategorie</option>
                  <option value="fpv-interiors">FPV Wnetrza</option>
                  <option value="fpv-exteriors">FPV Zewnetrza</option>
                  <option value="cinematic-air">Cinematic Air 3S</option>
                  <option value="social-reels">Social Media Reels</option>
                  <option value="industrial">Przemyslowe</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-light uppercase tracking-wider text-muted-foreground"
                >
                  Wiadomosc
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  placeholder="Opowiedz nam o swoim projekcie..."
                />
              </div>

              <button
                type="submit"
                className="w-full border border-primary bg-primary py-4 text-sm font-light uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                Wyslij Wiadomosc
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
