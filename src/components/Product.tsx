function Product() {
  return (
    <section id="product" className="py-24 px-6 bg-gradient-to-b from-cream via-cream-light to-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-brown mb-6">
            The Signature Experience
          </h2>
          <p className="text-lg text-taupe max-w-2xl mx-auto">
            Every waffle chip is a masterpiece of texture and taste—hand-selected premium chocolate drizzled with precision.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Product Card */}
          <div className="md:col-span-2 glass-strong rounded-3xl overflow-hidden p-10 border-2 border-gold/30">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Product Image */}
              <div className="flex-1">
                <img
                  src="/ChatGPT_Image_May_5,_2026,_10_47_38_AM.png"
                  alt="Giant Waffle Chips"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Product Info */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-brown mb-2">
                    Waffle Chips
                  </h3>
                  <p className="text-gold text-sm font-semibold tracking-widest">SEA SALT & CHOCOLATE DRIZZLE</p>
                </div>
                <p className="text-taupe leading-relaxed">
                  Crispy waffle-cut chips with a delicate sea salt infusion, finished with a smooth chocolate drizzle. Each bite delivers the perfect balance of savory and sweet.
                </p>
                <ul className="space-y-3 text-sm text-brown">
                  <li className="flex items-start space-x-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Artisanal crafted in small batches</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Premium Belgian chocolate coating</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Natural sea salt essence</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <button className="w-full glass-strong px-8 py-4 rounded-xl font-medium text-brown border-2 border-gold/30">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-6">
            <div className="glass-strong rounded-2xl p-8 border-2 border-gold/20">
              <div className="text-3xl text-gold mb-4">✨</div>
              <h4 className="font-serif text-xl font-bold text-brown mb-2">Premium Quality</h4>
              <p className="text-sm text-taupe">Only the finest ingredients selected for superior taste and texture.</p>
            </div>
            <div className="glass-strong rounded-2xl p-8 border-2 border-gold/20">
              <div className="text-3xl text-gold mb-4">🍫</div>
              <h4 className="font-serif text-xl font-bold text-brown mb-2">Chocolate Drizzle</h4>
              <p className="text-sm text-taupe">Hand-applied Belgian chocolate for an elegant finishing touch.</p>
            </div>
            <div className="glass-strong rounded-2xl p-8 border-2 border-gold/20">
              <div className="text-3xl text-gold mb-4">🌊</div>
              <h4 className="font-serif text-xl font-bold text-brown mb-2">Sea Salt Balance</h4>
              <p className="text-sm text-taupe">Natural mineral sea salt enhances every delicate flavor note.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
