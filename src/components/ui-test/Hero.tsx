interface HeroProps {
  title: string
  backgroundUrl?: string | null
}

export function Hero({ title, backgroundUrl }: HeroProps) {
  return (
    <section
      className="relative flex items-center justify-center h-64 bg-cover bg-center"
      style={backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : undefined}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-black/50" />
      <h1 id="hero-title" className="relative text-4xl md:text-5xl font-bold text-white text-center px-4">
        {title}
      </h1>
    </section>
  )
}
