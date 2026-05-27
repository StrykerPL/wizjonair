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
              Gotowy, by wynieść swój projekt na wyższy poziom dzięki ujeciom dronem? 
              Skontaktuj się, by omówić swoją wizję.
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

          {/* Right Column - Form */}
          <div className="border border-border bg-background p-8 lg:p-12">
            {isSuccess ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-primary" />
                <h3 className="mb-2 text-2xl font-light text-foreground">
                  Wiadomość wysłana!
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-sm font-light uppercase tracking-widest text-primary transition-colors hover:text-primary/80"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-light uppercase tracking-wider text-muted-foreground"
                  >
                    Imię i Nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="Twoje imię"
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
                    required
                    className="w-full border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="twoj@email.pl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-light uppercase tracking-wider text-muted-foreground"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="Opowiedz nam o swoim projekcie..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 border border-primary bg-primary py-4 text-sm font-light uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    "Wyślij Wiadomość"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
