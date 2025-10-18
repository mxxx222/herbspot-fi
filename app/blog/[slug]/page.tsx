import { notFound } from 'next/navigation';
import { SEOHead } from '@/components/SEOHead';
import { FadeIn } from '@/components/Animations';
import Link from 'next/link';

const blogPosts = {
  'premium-510-guide': {
    title: 'Premium 510-patruunat: Täydellinen opas',
    content: `
      <h2>Mikä on 510-patruuna?</h2>
      <p>510-patruuna on standardoitu kärki, jota käytetään aromaterapialaitteissa. Se on nimetty 510-kierteen mukaan, joka on yleisin kärkityyppi markkinoilla.</p>
      
      <h3>510-patruunoiden edut:</h3>
      <ul>
        <li><strong>Yhteensopivuus:</strong> Toimii useimpien laitteiden kanssa</li>
        <li><strong>Helppokäyttöisyys:</strong> Yksinkertainen vaihto ja huolto</li>
        <li><strong>Kustannustehokkuus:</strong> Edullinen vaihtoehto</li>
        <li><strong>Laadunvarmistus:</strong> Standardoitu laatu</li>
      </ul>
      
      <h3>Miten valitset oikean 510-patruunan?</h3>
      <p>Oikea 510-patruuna riippuu käyttötarkoituksestasi ja laitteestasi. Tärkeimmät tekijät ovat:</p>
      
      <h4>1. Materiaali</h4>
      <p><strong>Keraaminen kela:</strong> Paras laatu, ei metallin makua</p>
      <p><strong>Lääkinnällinen teräs:</strong> Kestävää ja turvallista</p>
      <p><strong>Pyrex-lasi:</strong> Lämmönkestävä ja puhdas</p>
      
      <h4>2. Koko</h4>
      <p><strong>0.5ml:</strong> Sopii kokeiluun ja pieniin annoksiin</p>
      <p><strong>1.0ml:</strong> Sopii säännölliseen käyttöön</p>
      
      <h3>Huolto ja säilytys</h3>
      <p>510-patruunoiden huolto on yksinkertaista:</p>
      <ol>
        <li>Puhdista kärki käytön jälkeen</li>
        <li>Säilytä kuivassa paikassa</li>
        <li>Vaihda säännöllisesti</li>
        <li>Käytä vain laadukkaita nesteitä</li>
      </ol>
      
      <h3>Yhteenveto</h3>
      <p>Oikea 510-patruuna on avain hyvään aromaterapiakokemukseen. Valitse laadukas materiaali ja oikea koko käyttötarkoituksesi mukaan.</p>
    `,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38f?w=1200&h=600&fit=crop',
    date: '2025-01-15',
    readTime: '5 min',
    category: 'Opas',
    author: 'HerbSpot Team',
    tags: ['510-patruunat', 'opas', 'aromaterapia']
  },
  'aromatherapy-benefits': {
    title: 'Aromaterapian terveyshyödyt',
    content: `
      <h2>Mikä on aromaterapia?</h2>
      <p>Aromaterapia on luonnonterveysmenetelmä, jossa käytetään eteerisiä öljyjä hyvinvoinnin edistämiseen.</p>
      
      <h3>Tieteelliset todisteet</h3>
      <p>Viimeaikaiset tutkimukset ovat osoittaneet aromaterapian tehokkuuden useissa terveysongelmissa.</p>
      
      <h3>Pääasialliset hyödyt</h3>
      
      <h4>1. Stressin vähentäminen</h4>
      <p>Laventeli ja kamomilla ovat erityisen tehokkaita stressin lievittämisessä.</p>
      
      <h4>2. Unenlaadun parantaminen</h4>
      <p>Laventeli ja valeriana auttavat rentoutumaan ja nukahtamaan.</p>
      
      <h4>3. Kivun lievittäminen</h4>
      <p>Minttu ja eukalyptu voivat lievittää päänsärkyä ja lihaskipuja.</p>
      
      <h4>4. Hengitystiehyödyt</h4>
      <p>Eukalyptu ja tee-puu auttavat hengitystieongelmissa.</p>
      
      <h3>Turvallinen käyttö</h3>
      <p>Aromaterapian käyttö vaatii varovaisuutta:</p>
      <ul>
        <li>Käytä vain laadukkaita eteerisiä öljyjä</li>
        <li>Laimenna öljyt ennen käyttöä</li>
        <li>Testaa allergiat ennen käyttöä</li>
        <li>Käytä sopivia laitteita</li>
      </ul>
      
      <h3>Yhteenveto</h3>
      <p>Aromaterapia voi olla tehokas lisä perinteiseen terveydenhuoltoon, kun sitä käytetään turvallisesti.</p>
    `,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38f?w=1200&h=600&fit=crop',
    date: '2025-01-10',
    readTime: '7 min',
    category: 'Terveys',
    author: 'Dr. Maria Virtanen',
    tags: ['aromaterapia', 'terveys', 'hyvinvointi']
  }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <SEOHead
        title={`${post.title} - HerbSpot Blog`}
        description={post.content.replace(/<[^>]*>/g, '').substring(0, 160)}
        keywords={post.tags}
        image={post.image}
        type="article"
      />
      
      <div className="min-h-screen bg-black">
        <div className="container py-16">
          {/* Back Button */}
          <FadeIn>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-[var(--brand)] hover:text-white transition-colors mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Takaisin blogiin
            </Link>
          </FadeIn>

          {/* Article Header */}
          <FadeIn delay={200}>
            <article className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                  <span className="bg-[var(--brand)] text-black px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {post.title}
                </h1>
              </div>

              {/* Featured Image */}
              <div className="aspect-video rounded-lg overflow-hidden mb-12">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Tagit:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Jaa artikkeli:</h3>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    WhatsApp
                  </button>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
