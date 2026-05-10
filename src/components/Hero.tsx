function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-cream-light to-cream"
        style={{
          backgroundImage: 'url(/ChatGPT_Image_May_5,_2026,_10_47_38_AM.png)',
          backgroundPosition: 'center 20%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/50 to-cream/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8 fade-in-up">
          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-brown leading-tight">
            Exquisite <span className="text-gold">Indulgence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-brown font-light tracking-wide max-w-xl mx-auto">
            Waffle chips wrapped in velvety chocolate drizzle. Crafted for those who value quality above all.
          </p>

          {/* Glass CTA Button */}
          <div className="pt-8">
            <button className="glass-strong px-12 py-5 rounded-full font-medium text-brown hover:scale-110 transform duration-300 shadow-2xl hover:shadow-xl border-2 border-gold/40">
              Discover Giant
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 flex justify-center opacity-70 hover:opacity-100 transition-smooth">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-brown"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
