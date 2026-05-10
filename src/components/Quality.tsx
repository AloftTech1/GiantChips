function Quality() {
  return (
    <section id="quality" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-brown mb-6">
            Our Promise to You
          </h2>
          <p className="text-lg text-taupe max-w-2xl mx-auto">
            Quality is not a compromise—it's a philosophy. Every detail matters.
          </p>
        </div>

        {/* Quality Pillars */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Left Column */}
          <div className="space-y-10">
            <div className="glass-strong rounded-2xl p-10 border-2 border-gold/40">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-brown/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brown mb-3">Artisan Craftsmanship</h3>
                  <p className="text-taupe leading-relaxed">
                    Each batch is crafted in small quantities using traditional techniques combined with modern precision. No shortcuts, ever.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-10 border-2 border-gold/40">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-brown/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brown mb-3">Finest Ingredients</h3>
                  <p className="text-taupe leading-relaxed">
                    We source premium materials from trusted suppliers worldwide. Every ingredient is chosen for excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <div className="glass-strong rounded-2xl p-10 border-2 border-gold/40">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-brown/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brown mb-3">Meticulous Process</h3>
                  <p className="text-taupe leading-relaxed">
                    From selection to packaging, every step is executed with careful attention to detail and quality control.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-10 border-2 border-gold/40">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-brown/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💎</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brown mb-3">Premium Packaging</h3>
                  <p className="text-taupe leading-relaxed">
                    Elegant, minimalist design that protects the product and reflects our commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="glass-strong rounded-3xl overflow-hidden p-12 md:p-16 border-2 border-gold/30">
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-serif text-3xl md:text-4xl font-bold text-brown mb-6">
              Quality isn't what we do—it's who we are.
            </p>
            <p className="text-lg text-taupe">
              At Giant, we believe that your expectations should never be compromised. We exist to deliver products that exceed the standards of excellence, because anything less would be a disservice to your palate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
