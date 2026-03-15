'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import ContactFormModal from '@/components/ContactFormModal';

const blogPosts = [
  {
    slug: 'whats-coming-downtown-bonita-springs',
    title: 'What\'s Coming to Downtown Bonita Springs: Why the Next Two Years Matter',
    excerpt: 'Riverfront development, new restaurants, and public space investment are shaping downtown Bonita Springs\' next chapter.',
    image: '/images/downtown.jpg',
    category: 'Neighborhood',
    date: 'January 21, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'rooftop-at-riverside-bonita-springs',
    title: 'The Rooftop Bar at Riverside: Bonita Springs\' Open-Air Social Backyard',
    excerpt: 'A two-story rooftop bar and rotating food truck park overlooking Riverside Park in downtown Bonita Springs.',
    image: '/images/rooftop2.avif',
    category: 'Dining',
    date: 'January 20, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'chartreuse-craft-cocktail-lounge',
    title: 'Chartreuse: Where Bonita Springs Craft Cocktails Come Alive',
    excerpt: 'A modern cocktail lounge in downtown Bonita Springs featuring inventive drinks, local art, and a vibrant atmosphere.',
    image: '/images/chartreuse.png',
    category: 'Dining',
    date: 'January 18, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'sugarshack-downtown-bonita-springs',
    title: 'Sugarshack: Bonita Springs\' Neighborhood Bar with Soul',
    excerpt: 'The chill neighborhood bar in downtown Bonita Springs where everyone knows your name and the vibe is always right.',
    image: '/images/music.webp',
    category: 'Entertainment',
    date: 'January 15, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'downtown-coffee-wine-guide',
    title: 'Downtown Bonita Springs Living: Coffee & Wine Culture',
    excerpt: 'Relocating to Bonita Springs? Explore the coffee and wine scene near downtown Bonita Springs apartments and discover the local lifestyle.',
    image: '/images/coffee.jpg',
    category: 'Lifestyle',
    date: 'December 20, 2025',
    readTime: '4 min read',
  },
  {
    slug: 'seasonal-living-southwest-florida',
    title: 'Relocating to Bonita Springs: Your Year-Round Living Guide',
    excerpt: 'Thinking of relocating to Bonita Springs apartments? Learn about seasonal living in downtown Bonita Springs and what to expect year-round.',
    image: '/images/downtown-webp.webp',
    category: 'Lifestyle',
    date: 'December 10, 2025',
    readTime: '5 min read',
  },
  {
    slug: 'canary-club-restaurant',
    title: 'Downtown Bonita Springs Dining: Canary Club Restaurant',
    excerpt: 'Living in downtown Bonita Springs apartments means walkable dining at unique spots like Canary Club. Your local restaurant guide.',
    image: '/images/canary.png',
    category: 'Dining',
    date: 'November 28, 2025',
    readTime: '4 min read',
  },
  {
    slug: 'shangri-la-spa-wellness',
    title: 'Bonita Springs Apartments Living: Wellness & Spa Guide',
    excerpt: 'Discover wellness options near downtown Bonita Springs apartments including Shangri La Spa. Essential for relocating to Bonita Springs.',
    image: '/images/shangrila.jpg',
    category: 'Wellness',
    date: 'November 22, 2025',
    readTime: '3 min read',
  },
  {
    slug: 'sugar-shack-live-music',
    title: 'Downtown Bonita Springs Living: Sugar Shack Music Venue',
    excerpt: 'Relocating to Bonita Springs? Discover walkable live music venues like Sugar Shack near downtown Bonita Springs apartments.',
    image: '/images/music.webp',
    category: 'Entertainment',
    date: 'November 18, 2025',
    readTime: '3 min read',
  },
  {
    slug: 'bandshell-festivals',
    title: 'Bonita Springs Apartments: Riverside Park Events Guide',
    excerpt: 'Downtown Bonita Springs living includes walkable festivals and concerts. Your guide to community events near Bonita Springs apartments.',
    image: '/images/riverside.avif',
    category: 'Events',
    date: 'November 12, 2025',
    readTime: '5 min read',
  },
  {
    slug: 'upcoming-downtown-developments',
    title: 'Relocating to Bonita Springs: New Downtown Developments',
    excerpt: 'Considering Bonita Springs apartments? Learn about upcoming downtown Bonita Springs developments and the future of the area.',
    image: '/images/citymap.png',
    category: 'Neighborhood',
    date: 'November 8, 2025',
    readTime: '4 min read',
  },
];

export default function Blog() {
  const currentYear = new Date().getFullYear();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Bonita Springs Apartments Blog | Downtown Bonita Springs Living';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="blog" onBookShowing={() => setIsContactModalOpen(true)} />

      <main>
        {/* Page Title */}
        <section className="bg-white pt-20 pb-16 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em] mb-4">
              News &amp; Updates
            </p>
            <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight font-playfair">
              In the Heart of Bonita Springs
            </h1>
            <p className="mt-6 text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
              Discover the latest community updates, local guides to Bonita Springs, and lifestyle
              tips for modern living at Bella.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="border-b border-slate-200 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col group cursor-pointer block"
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/10] mb-6 bg-slate-100 relative">
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-10"></div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full text-slate-900 border border-slate-200">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3 text-xs text-slate-500 font-medium tracking-wide uppercase">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-playfair text-slate-900 mb-3 tracking-tight group-hover:text-slate-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 font-light leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 flex items-center text-slate-900 text-xs font-semibold uppercase tracking-[0.2em] group-hover:gap-2 transition-all duration-300">
                      <span>Read Story</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-playfair mb-4 tracking-tight">
              Stay connected with Bella.
            </h2>
            <p className="text-base text-slate-600 font-light mb-10">
              Subscribe to our newsletter for community updates and exclusive leasing offers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-full border border-slate-200 px-6 py-3.5 text-sm outline-none focus:border-[#5b7a99] focus:ring-0 transition-all placeholder:text-slate-400 bg-slate-50"
              />
              <button className="w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center rounded-full bg-[#5b7a99] text-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#4a6580] transition-all shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex gap-x-2 items-center self-start">
              <img
                src="/images/bella-logo-final.png"
                alt="Bella Apartments logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-[11px] font-normal tracking-[0.18em] uppercase">
              <Link href="/" className="text-slate-500 hover:text-[#5b7a99]">
                Home
              </Link>
              <Link href="/floorplans" className="text-slate-500 hover:text-[#5b7a99]">
                Apartments
              </Link>
              <Link href="/amenities" className="text-slate-500 hover:text-[#5b7a99]">
                Amenities
              </Link>
              <Link href="/gallery" className="text-slate-500 hover:text-[#5b7a99]">
                Gallery
              </Link>
              <Link href="/blog" className="text-[#5b7a99]">
                Bonita Springs
              </Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-4 py-2 rounded-full bg-[#5b7a99] text-white font-medium hover:bg-[#4a6580]"
              >
                Book a Showing
              </button>
            </nav>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p className="text-[11px] text-slate-500">
              © {currentYear} Bella Apartments. All rights reserved.
            </p>
<a
              href="https://www.google.com/maps/search/?api=1&query=10575+Crockett+Street,+Bonita+Springs,+FL+34145"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-[#5b7a99] transition-colors"
            >
              10575 Crockett Street, Bonita Springs, FL 34145
            </a>
          </div>
        </div>
      </footer>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
