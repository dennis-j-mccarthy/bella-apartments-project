'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';

const images = [
  { id: 1, src: '/images/the-bella-downtown-bonita-springs-fl-living-room.jpg', alt: 'Modern living room', category: 'interiors' },
  { id: 2, src: '/images/the-bella-downtown-bonita-springs-fl-gourmet-kitchen.jpg', alt: 'Gourmet kitchen', category: 'interiors' },
  { id: 3, src: '/images/the-bella-downtown-bonita-springs-fl-2br-2ba---kitchen.jpg', alt: 'Kitchen with modern finishes', category: 'interiors' },
  { id: 4, src: '/images/the-bella-downtown-bonita-springs-fl-primary-bedroom.jpg', alt: 'Primary bedroom', category: 'interiors' },
  { id: 5, src: '/images/the-bella-downtown-bonita-springs-fl-second-bedroom.jpg', alt: 'Second bedroom', category: 'interiors' },
  { id: 6, src: '/images/the-bella-downtown-bonita-springs-fl-primary-bathroomwalk-in-closet.jpg', alt: 'Primary bathroom and walk-in closet', category: 'interiors' },
  { id: 7, src: '/images/the-bella-downtown-bonita-springs-fl-second-bathroom.jpg', alt: 'Second bathroom', category: 'interiors' },
  { id: 8, src: '/images/the-bella-downtown-bonita-springs-fl-modern-design.jpg', alt: 'Modern design details', category: 'interiors' },
  { id: 9, src: '/images/the-bella-downtown-bonita-springs-fl-pool.jpg', alt: 'Resort-style swimming pool', category: 'amenities' },
  { id: 10, src: '/images/the-bella-downtown-bonita-springs-fl-2nd-floor-fitness-center.jpg', alt: '2nd floor fitness center', category: 'amenities' },
  { id: 11, src: '/images/the-bella-downtown-bonita-springs-fl-3rd-floor-fitness-center.jpg', alt: '3rd floor fitness center', category: 'amenities' },
  { id: 12, src: '/images/bella-hero.png', alt: 'The Bella building exterior', category: 'exterior' },
  { id: 13, src: '/images/bath1.png', alt: 'Luxurious bathroom with modern fixtures', category: 'interiors' },
  { id: 14, src: '/images/br1.png', alt: 'Spacious bedroom with natural light', category: 'interiors' },
  { id: 15, src: '/images/br2.png', alt: 'Elegant bedroom suite', category: 'interiors' },
  { id: 16, src: '/images/lr1.png', alt: 'Open-concept living room', category: 'interiors' },
];

type Category = 'all' | 'interiors' | 'amenities' | 'exterior';

export default function Gallery() {
  const currentYear = new Date().getFullYear();
  const [filter, setFilter] = useState<Category>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const filteredImages = images.filter((img) => {
    if (filter === 'all') return true;
    return img.category === filter;
  });

  const openLightbox = (id: number) => {
    setActiveImage(id);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (activeImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === activeImage);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    setActiveImage(filteredImages[newIndex].id);
  };

  const activeImageData = images.find((img) => img.id === activeImage);

  const getCounts = () => ({
    all: images.length,
    interiors: images.filter((i) => i.category === 'interiors').length,
    amenities: images.filter((i) => i.category === 'amenities').length,
    exterior: images.filter((i) => i.category === 'exterior').length,
  });

  const counts = getCounts();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="gallery" />

      <main className="flex-1 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em]">
                Gallery
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 font-playfair">
                See Bella in detail.
              </h1>
              <p className="mt-4 text-sm text-slate-600 max-w-xl">
                Explore our beautifully designed residences, resort-inspired amenities, and 
                stunning outdoor spaces. Every corner of Bella has been thoughtfully crafted 
                for modern living.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
            <div className="flex flex-wrap gap-2 sm:gap-3 text-[11px]">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                  filter === 'all'
                    ? 'bg-[#5b7a99] text-white'
                    : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                }`}
              >
                All Photos ({counts.all})
              </button>
              <button
                onClick={() => setFilter('interiors')}
                className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                  filter === 'interiors'
                    ? 'bg-[#5b7a99] text-white'
                    : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                }`}
              >
                Interiors ({counts.interiors})
              </button>
              <button
                onClick={() => setFilter('amenities')}
                className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                  filter === 'amenities'
                    ? 'bg-[#5b7a99] text-white'
                    : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                }`}
              >
                Amenities ({counts.amenities})
              </button>
              <button
                onClick={() => setFilter('exterior')}
                className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                  filter === 'exterior'
                    ? 'bg-[#5b7a99] text-white'
                    : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                }`}
              >
                Exterior ({counts.exterior})
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-10 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-2xl bg-slate-200 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(image.id)}
                >
                  <div className={`relative ${index === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-light">{image.alt}</p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] uppercase tracking-[0.16em]">
                        {image.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 rounded-full bg-white/90 text-slate-700">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-playfair mb-4 tracking-tight">
              See it for yourself.
            </h2>
            <p className="text-base text-slate-600 font-light mb-10">
              Photos only tell part of the story. Schedule a tour to experience Bella in person.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#5b7a99] text-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#4a6580] transition-all shadow-sm">
                Schedule a Tour
              </button>
              <Link
                href="/floorplans"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-600 hover:border-[#5b7a99] hover:text-[#5b7a99] bg-white transition-all"
              >
                View Floorplans
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <img
              src="/images/bella-logo-final.png"
              alt="Bella Apartments logo"
              className="h-8 w-auto"
            />
            <nav className="flex flex-wrap items-center gap-5 text-[11px] font-normal tracking-[0.18em] uppercase">
              <Link href="/" className="text-slate-500 hover:text-[#5b7a99]">Home</Link>
              <Link href="/floorplans" className="text-slate-500 hover:text-[#5b7a99]">Apartments</Link>
              <Link href="/amenities" className="text-slate-500 hover:text-[#5b7a99]">Amenities</Link>
              <Link href="/gallery" className="text-[#5b7a99]">Gallery</Link>
              <Link href="/blog" className="text-slate-500 hover:text-[#5b7a99]">Bonita Springs</Link>
              <button className="px-4 py-2 rounded-full bg-[#5b7a99] text-white font-medium hover:bg-[#4a6580]">
                Book a Showing
              </button>
            </nav>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p className="text-[11px] text-slate-500">© {currentYear} Bella Apartments. All rights reserved.</p>
            <div className="flex gap-4 text-[11px] text-slate-500">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Fair Housing</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && activeImageData && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors z-10"
              onClick={closeLightbox}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="p-8">
              <img
                src={activeImageData.src}
                alt={activeImageData.alt}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-slate-800 text-sm font-light">{activeImageData.alt}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] uppercase tracking-[0.16em]">
                  {activeImageData.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
