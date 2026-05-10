function Footer() {
  return (
    <footer className="bg-brown text-cream py-12 px-6 relative overflow-hidden">
      {/* Glass gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown via-transparent to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-brown-light rounded-full flex items-center justify-center">
                <span className="text-cream font-serif text-sm font-bold">G</span>
              </div>
              <span className="font-serif text-xl font-bold">Giant</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Premium waffle chips with chocolate drizzle. Crafted for those who demand excellence.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold">Product</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <a href="#product" className="hover:text-gold transition-smooth">
                  Our Waffle Chips
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-gold transition-smooth">
                  Quality Promise
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-smooth">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold">Company</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <a href="#" className="hover:text-gold transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-smooth">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold">Legal</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <a href="#" className="hover:text-gold transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-smooth">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-smooth">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          {/* Copyright and Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-cream/60">
              © 2024 Giant. All rights reserved. Handcrafted with precision.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-cream/60 hover:text-gold transition-smooth text-sm"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-gold transition-smooth text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-gold transition-smooth text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
