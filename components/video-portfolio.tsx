"use client"

import { useState, useEffect, useCallback } from "react"
import { Play, X, Link2, Share2, Check, MapPin } from "lucide-react"

interface PortfolioItem {
  id: string
  title: string
  category: string
  thumbnail?: string
  videoUrl: string
  location?: string
  description?: string
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const regExp =
    /(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/)|youtu\.be\/)([^#&?/\n]{11})/

  const match = url.match(regExp)

  return match ? match[1] : null
}

// Helper function to generate YouTube thumbnail
function getYouTubeThumbnail(url: string): string {
  const videoId = getYouTubeVideoId(url)
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }
  return ""
}

const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "fpv-interiors", label: "FPV wnętrza" },
  { id: "fpv-exteriors", label: "FPV outdoor" },
  { id: "social-reels", label: "Rolki social media" },
]

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Kąpielisko w Nowych Siołkowicach",
    category: "fpv-exteriors",
    videoUrl: "https://youtu.be/RkgRRS9xMk4",
    location: "Nowe Siołkowice",
    description: "FPV one take, bez cięć.",
  },
  {
    id: "2",
    title: "Under the bridge",
    category: "social-reels",
    videoUrl: "https://www.youtube.com/shorts/5sQLk65NhY4",
    location: "Most Halupczoka w Opolu",
    description: "FPV one take, bez cięć.",
  },
]
function isYouTubeShort(url: string): boolean {
  return url.includes("/shorts/")
}

// Share button component
function ShareButton({ 
  url, 
  title, 
  className = "" 
}: { 
  url: string
  title: string
  className?: string 
}) {
  const [copied, setCopied] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    setShowOptions(false)
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent(title)
    const body = encodeURIComponent(`${title}\n\n${url}`)
    window.open(`mailto:?subject=${subject}&body=${body}`)
    setShowOptions(false)
  }

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(`${title}\n${url}`)
    window.open(`https://wa.me/?text=${text}`, "_blank")
    setShowOptions(false)
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setShowOptions(!showOptions)
        }}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-background/80 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10"
        title="Udostępnij"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-primary" />
        ) : (
          <Share2 className="h-3.5 w-3.5 text-muted-foreground" />
        )}
      </button>
      
      {showOptions && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowOptions(false)} 
          />
          <div className="absolute right-0 top-10 z-50 min-w-[160px] overflow-hidden border border-border bg-card shadow-xl">
            <button
              onClick={copyLink}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-foreground transition-colors hover:bg-muted"
            >
              <Link2 className="h-4 w-4 text-muted-foreground" />
              Kopiuj link
            </button>
            <button
              onClick={shareViaEmail}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-foreground transition-colors hover:bg-muted"
            >
              <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </button>
            <button
              onClick={shareViaWhatsApp}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-foreground transition-colors hover:bg-muted"
            >
              <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// Video Modal Component
function VideoModal({ 
  isOpen, 
  onClose, 
  videoUrl, 
  title 
}: { 
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string 
}) {
  const videoId = getYouTubeVideoId(videoUrl)

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen || !videoId) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center border border-border bg-card/50 text-foreground transition-all hover:border-primary hover:text-primary"
        aria-label="Zamknij"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Video title */}
      <div className="absolute left-6 top-6 z-50">
        <p className="text-sm font-light uppercase tracking-widest text-primary">
          Odtwarzanie
        </p>
        <h3 className="mt-1 text-lg font-light text-foreground">
          {title}
        </h3>
      </div>

      {/* Video container */}
      <div 
        className="relative z-10 w-full max-w-6xl px-6"
        onClick={(e) => e.stopPropagation()}
      >

          <div
  className={`relative overflow-hidden border border-border/30 bg-black shadow-2xl ${
    isYouTubeShort(videoUrl)
      ? "mx-auto aspect-[9/16] max-w-md"
      : "aspect-video w-full"
  }`}
>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}

export function VideoPortfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null)

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  const openModal = useCallback((item: PortfolioItem) => {
    setSelectedVideo(item)
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
    setSelectedVideo(null)
  }, [])

  const [currentUrl, setCurrentUrl] = useState("")
  
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  return (
    <>
      <section id="work" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Portfolio
            </p>
            <h2 className="mb-6 text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Nasze realizacje
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
              Odkryj naszą kolekcję realizacji w różnych kategoriach
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                  activeCategory === category.id
                    ? "border border-primary bg-primary/10 text-primary"
                    : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <span className="absolute -bottom-px left-1/2 h-px w-8 -translate-x-1/2 bg-primary" />
                )}
              </button>
            ))}
            
            {/* Share portfolio section */}
            <ShareButton 
              url={`${currentUrl}#work`}
              title="Wizjonair - Portfolio"
              className="ml-2"
            />
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative cursor-pointer overflow-hidden border border-border/30 bg-card transition-all duration-500 hover:border-primary/30 ${
                  index === 0 && filteredItems.length > 2 ? "sm:col-span-2" : ""
                }`}
                onClick={() => openModal(item)}
              >
                {/* Thumbnail */}
                <div className={`relative overflow-hidden ${
                  index === 0 && filteredItems.length > 2 ? "aspect-[21/9]" : "aspect-video"
                }`}>
                  <img
                    src={item.thumbnail || getYouTubeThumbnail(item.videoUrl)}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/30 bg-background/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/20 md:h-20 md:w-20">
                      <Play className="h-6 w-6 text-foreground transition-colors group-hover:text-primary md:h-8 md:w-8" />
                    </div>
                  </div>

                  {/* Share button on card */}
                  <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ShareButton 
                      url={item.videoUrl}
                      title={item.title}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-lg font-light tracking-wide text-foreground md:text-xl">
                        {item.title}
                      </h3>
                      
                      {/* Meta info */}
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                        <span className="uppercase tracking-widest text-primary">
                          {categories.find((c) => c.id === item.category)?.label}
                        </span>
                        {item.location && (
                          <>
                            <span className="text-border">|</span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                      
                      {/* Description */}
                      {item.description && (
                        <p className="mt-3 text-sm font-light text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">
                Brak realizacji w tej kategorii. Wkrótce dodamy nowe projekty.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={closeModal}
        videoUrl={selectedVideo?.videoUrl || ""}
        title={selectedVideo?.title || ""}
      />
    </>
  )
}
