"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface PortfolioItem {
  id: string
  title: string
  category: string
  thumbnail: string
  videoUrl: string
}

const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "fpv-interiors", label: "FPV Wnetrza" },
  { id: "fpv-exteriors", label: "FPV Zewnetrza" },
  { id: "cinematic-air", label: "Cinematic Air 3S" },
  { id: "social-reels", label: "Social Media Reels" },
  { id: "industrial", label: "Przemyslowe" },
]

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Luksusowa Willa - Wnetrze",
    category: "fpv-interiors",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "2",
    title: "Nowoczesny Penthouse",
    category: "fpv-interiors",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "3",
    title: "Rezydencja Nadmorska",
    category: "fpv-exteriors",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "4",
    title: "Gorska Posiadlosc",
    category: "fpv-exteriors",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "5",
    title: "Kinowe Ujecia Wybrzeza",
    category: "cinematic-air",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "6",
    title: "Ekspedycja Alpejska",
    category: "cinematic-air",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "7",
    title: "Teaser Premiery Marki",
    category: "social-reels",
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "8",
    title: "Promocja Hotelu",
    category: "social-reels",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "9",
    title: "Zaklad Produkcyjny",
    category: "industrial",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "10",
    title: "Farma Fotowoltaiczna",
    category: "industrial",
    thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    videoUrl: "#",
  },
]

export function VideoPortfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="work" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>
          <h2 className="mb-6 text-4xl font-light tracking-tight text-foreground md:text-5xl">
            Nasze Realizacje
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            Odkryj nasza kolekcje kinowych ujec dronem w roznych kategoriach
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-light tracking-wide transition-all md:px-6 ${
                activeCategory === category.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative aspect-video cursor-pointer overflow-hidden bg-card ${
                index === 0 && filteredItems.length > 2 ? "sm:col-span-2 sm:aspect-[21/9]" : ""
              }`}
            >
              {/* Thumbnail */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/40 transition-all duration-500 group-hover:bg-background/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Play Button */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-foreground/30 bg-background/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/20 md:h-20 md:w-20">
                  <Play className="h-6 w-6 text-foreground transition-colors group-hover:text-primary md:h-8 md:w-8" />
                </div>

                {/* Title */}
                <h3 className="text-center text-lg font-light tracking-wide text-foreground md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-primary">
                  {categories.find((c) => c.id === item.category)?.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
