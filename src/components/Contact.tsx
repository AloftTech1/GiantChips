import { useState } from 'react';
import { Mail } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function Contact() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setMessage('');
    setSuccess(false);

    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (error) {
        if (error.code === '23505') {
          setMessage('You\'re already subscribed!');
        } else {
          throw error;
        }
      } else {
        setSuccess(true);
        setMessage('Welcome to the Giant circle. Check your inbox.');
        setEmail('');
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-cream to-cream-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-brown mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-taupe">
            Be the first to know about new releases and exclusive updates.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="glass-strong rounded-3xl p-12 md:p-16 max-w-2xl mx-auto border-3 border-gold/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="flex items-center space-x-3">
                <Mail className="text-gold" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border-b-2 border-gold/30 focus:border-gold outline-none py-3 text-brown placeholder-taupe/50 transition-smooth"
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !email.trim()}
              className="w-full bg-gradient-to-r from-[#c9a961] to-[#8b6f47] hover:from-[#d4b776] hover:to-[#5c4033] text-[#f5f1ed] font-semibold py-4 rounded-full transition-smooth disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl border-2 border-[#c9a961]"
              >
              {loading ? 'Subscribing...' : 'Join Our Circle'}
            </button>

            {message && (
              <p
                className={`text-center text-sm font-medium transition-smooth ${
                  success ? 'text-green-600' : 'text-brown/70'
                }`}
              >
                {message}
              </p>
            )}
          </form>

          <p className="text-xs text-taupe text-center mt-8">
            We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="glass-strong rounded-2xl p-8 text-center border-2 border-gold/30">
            <h3 className="font-serif text-lg font-bold text-brown mb-2">Email</h3>
            <p className="text-taupe">hello@giantchips.com</p>
          </div>
          <div className="glass-strong rounded-2xl p-8 text-center border-2 border-gold/30">
            <h3 className="font-serif text-lg font-bold text-brown mb-2">Follow Us</h3>
            <p className="text-taupe">@giantchips</p>
          </div>
          <div className="glass-strong rounded-2xl p-8 text-center border-2 border-gold/30">
            <h3 className="font-serif text-lg font-bold text-brown mb-2">Handcrafted</h3>
            <p className="text-taupe">Since 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
