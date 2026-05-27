"use client"

import { Instagram, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    const subject = encodeURIComponent(`Zapytanie od ${name}`)
    const body = encodeURIComponent(`Imię i nazwisko: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`)
    
    window.location.href = `mailto:hello@wizjonair.pl?subject=${subject}&body=${body}`
  }

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
              Stwórzmy coś razem!
            </h2>
            <p className="mb-12 max-w-lg text-lg font-light leading-relaxed text-muted-foreground">
              Gotowy aby wynieść swój projekt na wyższy poziom dzięki ujeciom z drona? 
              Skontaktuj się, by omówić swoją wizję!
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
                href="mailto:hello@wizjonair.pl"
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
                    hello@wizjonair.pl
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
                    Realizacje w całej Polsce
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */ }
               </div>
      </div>
    </section>
  )
}
  
