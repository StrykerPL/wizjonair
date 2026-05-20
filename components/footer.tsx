import { Instagram, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-light tracking-widest text-foreground transition-colors hover:text-primary"
          >
            WIZJONAIR
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/wizjonair"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@wizjonair.com"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm font-light text-muted-foreground">
            © {currentYear} Wizjonair. Wszelkie prawa zastrzezone.
          </p>
        </div>
      </div>
    </footer>
  )
}
