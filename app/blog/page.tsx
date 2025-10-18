import { FadeIn, Stagger } from '@/components/Animations';
import { SEOHead } from '@/components/SEOHead';
import Link from 'next/link';

const blogPosts = [
  {
    id: 'premium-510-guide',
    title: 'Premium 510-patruunat: Täydellinen opas',
    excerpt: 'Opi valitsemaan oikeat 510-patruunat aromaterapiaan ja lääkinnälliseen käyttöön.',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38f?w=800&h=400&fit=crop',
    date: '2025-01-15',
    readTime: '5 min',
    category: 'Opas',
    author: 'HerbSpot Team'
  },
  {
    id: 'aromatherapy-benefits',
    title: 'Aromaterapian terveyshyödyt',
    excerpt: 'Tutustu aromaterapian vaikutuksiin mielenterveyteen ja fyysiseen hyvinvointiin.',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38f?w=800&h=400&fit=crop',
    date: '2025-01-10',
    readTime: '7 min',
    category: 'Terveys',
    author: 'Dr. Maria Virtanen'
  },
  {
    id: 'device-maintenance',
    title: 'Laitteiden huolto ja säilytys',
    excerpt: 'Vinkkejä laitteidesi puhdistamiseen ja säilyttämiseen optimaalisessa kunnossa.',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38f?w=800&h=400&fit=crop',
    date: '2025-01-05',
    readTime: '4 min',
    category: 'Huolto',
    author: 'HerbSpot Team'
  },
  {
    id: 'b2b-whitelabel',
    title: 'B2B White-label ratkaisut',
    excerpt: 'Miten rakennat oman brändisi premium 510-tuotteilla.',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38f?w=800&h=400&fit=crop',
    date: '2025-01-01',
    readTime: '6 min',
    category: 'B2B',
    author: 'HerbSpot Business'
  }
];

const categories = ['Kaikki', 'Opas', 'Terveys', 'Huolto', 'B2B'];

export default function BlogPage() {
  return (
    <>
      <SEOHead
        title="Blog - HerbSpot.fi"
        description="Aromaterapian ja 510-patruunoiden opas, vinkit ja uutiset."
        keywords={['aromaterapia', '510-patruunat', 'terveys', 'opas', 'blog']}
        type="website"
      />
      
      <div className="min-h-screen bg-black">
        <div className="container py-16">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                HerbSpot <span className="text-[var(--brand)]">Blog</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Aromaterapian ja 510-patruunoiden opas, terveysvinkit ja uusimmat uutiset
              </p>
            </div>
          </FadeIn>

          {/* Categories */}
          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-[var(--brand)] hover:text-black transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Blog Posts Grid */}
          <Stagger>
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 100}>
                <article className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors group">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--brand)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-[var(--brand)] hover:text-white transition-colors"
                    >
                      Lue lisää
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </Stagger>

          {/* Newsletter Signup */}
          <FadeIn delay={800}>
            <div className="mt-20 bg-gradient-to-r from-[var(--brand)]/20 to-blue-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Tilaa uutiskirje
              </h3>
              <p className="text-white/80 mb-6">
                Saat uusimmat vinkit ja uutiset suoraan sähköpostiisi
              </p>
              <div className="flex max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Sähköpostiosoite"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[var(--brand)]"
                />
                <button className="px-6 py-3 bg-[var(--brand)] text-black rounded-lg font-semibold hover:bg-[var(--brand)]/80 transition-colors">
                  Tilaa
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
