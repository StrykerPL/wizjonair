"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop"
      >
        <source
          src="https://videos.pexels.com/video-files/2022395/2022395-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Kinowe Ujecia FPV
        </p>
        <h1 className="mb-6 text-5xl font-light tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="block">Wizjonair</span>
        </h1>
        <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
          Tworzymy wyjatkowe perspektywy poprzez sztuke filmowania dronem
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Zobacz Realizacje
            </span>
            <div className="h-12 w-px bg-primary/50" />
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-foreground transition-colors group-hover:text-primary" />
            ) : (
              <Play className="h-4 w-4 text-foreground transition-colors group-hover:text-primary" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-foreground transition-colors group-hover:text-primary" />
            ) : (
              <Volume2 className="h-4 w-4 text-foreground transition-colors group-hover:text-primary" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
