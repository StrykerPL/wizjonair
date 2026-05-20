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
  { id: "fpv-exteriors", label: "FPV Outdoor" },
  { id: "social-reels", label: "Social Media Reels" },
]

interface PortfolioItemWithLocation extends PortfolioItem {
  location?: string
}

const portfolioItems: PortfolioItemWithLocation[] = [
  {
    id: "1",
    title: "Kąpielisko w Nowych Siołkowicach",
    category: "fpv-exteriors",
    thumbnail: "https://img.youtube.com/vi/RkgRRS9xMk4/maxresdefault.jpg",
    videoUrl: "https://youtu.be/RkgRRS9xMk4",
    location: "Nowe Siołkowice",
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
            Odkryj naszą kolekcję realizacji w różnych kategoriach
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
            <a
              key={item.id}
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
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
                {item.location && (
                  <p className="mt-1 text-xs font-light text-muted-foreground">
                    {item.location}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
