'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import ContactFormModal from '@/components/ContactFormModal';

const floorplans = [
  { unit: '201', beds: 2, baths: 2, sqft: 1100, floor: 2, balcony: true, ada: false, image: '/images/201.png.webp' },
  { unit: '202', beds: 2, baths: 2, sqft: 950, floor: 2, balcony: true, ada: true, image: '/images/202.png.webp' },
  { unit: '203', beds: 2, baths: 2, sqft: 980, floor: 2, balcony: true, ada: false, image: '/images/203.png.webp' },
  { unit: '204', beds: 2, baths: 2, sqft: 1100, floor: 2, balcony: true, ada: false, image: '/images/204.png.webp' },
  { unit: '205', beds: 2, baths: 2, sqft: 1000, floor: 2, balcony: true, ada: false, image: '/images/205,206,207.png.webp' },
  { unit: '206', beds: 2, baths: 2, sqft: 1000, floor: 2, balcony: true, ada: false, image: '/images/205,206,207.png.webp' },
  { unit: '207', beds: 2, baths: 2, sqft: 1000, floor: 2, balcony: true, ada: false, image: '/images/205,206,207.png.webp' },
  { unit: '301', beds: 2, baths: 2, sqft: 1100, floor: 3, balcony: true, ada: false, image: '/images/301.png.webp' },
  { unit: '302', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: true, image: '/images/302.png.webp' },
  { unit: '303', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: false, image: '/images/303.png.webp' },
  { unit: '304', beds: 2, baths: 2, sqft: 1100, floor: 3, balcony: true, ada: false, image: '/images/304.png.webp' },
  { unit: '305', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: false, image: '/images/305,306,307.png.webp' },
  { unit: '306', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: false, image: '/images/305,306,307.png.webp' },
  { unit: '307', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: false, image: '/images/305,306,307.png.webp' },
  { unit: '401', beds: 2, baths: 2, sqft: 1100, floor: 4, balcony: true, ada: false, image: '/images/201.png.webp' },
  { unit: '402', beds: 2, baths: 2, sqft: 1000, floor: 4, balcony: true, ada: false, image: '/images/205,206,207.png.webp' },
];

export default function Floorplans() {
  const currentYear = new Date().getFullYear();
  const [filter, setFilter] = useState<'all' | '1br' | '2br'>('all');
  const [selectedPlan, setSelectedPlan] = useState<typeof floorplans[0] | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const filteredPlans = floorplans.filter((plan) => {
    if (filter === 'all') return true;
    if (filter === '1br') return plan.beds === 1;
    if (filter === '2br') return plan.beds === 2;
    return true;
  });

  const oneBedCount = floorplans.filter(p => p.beds === 1).length;
  const twoBedCount = floorplans.filter(p => p.beds === 2).length;

  const getFloorColor = (floor: number) => {
    switch (floor) {
      case 2: return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 3: return 'bg-sky-50 text-sky-700 border-sky-100';
      case 4: return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="apartments" onBookShowing={() => setIsContactModalOpen(true)} />

      <main className="flex-1 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-3xl">
                <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em]">
                  Floorplans
                </p>
                <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 font-playfair">
                  Light-filled homes, thoughtfully sized.
                </h1>
                <p className="mt-2 text-sm text-slate-700">
                  1BR starting at $2,250 – 2BR starting at $2,350
                </p>
                <p className="mt-4 text-sm text-slate-600 max-w-xl">
                  Browse all sixteen residences at Bella—from efficient studios to expanded
                  two-bedrooms with balconies. Every layout is optimized for natural light,
                  storage, and everyday luxury living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-2 sm:gap-3 text-[11px]">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                    filter === 'all'
                      ? 'bg-[#5b7a99] text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                  }`}
                >
                  All Homes ({floorplans.length})
                </button>
                <button
                  onClick={() => setFilter('1br')}
                  className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                    filter === '1br'
                      ? 'bg-[#5b7a99] text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                  }`}
                >
                  1 Bedroom ({oneBedCount})
                </button>
                <button
                  onClick={() => setFilter('2br')}
                  className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                    filter === '2br'
                      ? 'bg-[#5b7a99] text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                  }`}
                >
                  2 Bedroom ({twoBedCount})
                </button>
              </div>

              <div className="flex flex-wrap gap-3 items-center text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-[0.18em]">Approx. Sq Ft</span>
                  <span className="px-3 py-1 rounded-full border border-slate-300 bg-white text-slate-700">
                    900 – 1,100
                  </span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                  <span>Pet-friendly • Parking available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floorplan Cards */}
        <section className="py-10 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
              {filteredPlans.map((plan) => (
                <article
                  key={plan.unit}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                  onClick={() => setSelectedPlan(plan)}
                >
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#5b7a99] via-slate-400 to-[#5b7a99]/60 opacity-80"></div>

                  <div className="relative bg-slate-50/80">
                    <img
                      src={plan.image}
                      alt={`Residence ${plan.unit} floorplan`}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
                    <div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                    <div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] tracking-[0.18em] uppercase text-slate-900 font-medium">
                          {plan.unit}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {plan.beds} Bed • {plan.baths} Bath • Approx. {plan.sqft.toLocaleString()} sq ft
                          {plan.balcony && ' • Outdoor balcony'}
                          {plan.ada && ' • ADA accessible'}
                        </span>
                      </div>
                      <div className="text-right flex flex-col items-end gap-1">
                        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase ${getFloorColor(plan.floor)}`}>
                          {plan.floor === 2 ? '2nd' : plan.floor === 3 ? '3rd' : '4th'} floor
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      Experience modern urban living in this spacious {plan.sqft.toLocaleString()} square foot
                      {plan.beds === 1 ? ' one-bedroom' : ' two-bedroom'}, {plan.baths === 1 ? 'one-bathroom' : 'two-bathroom'} apartment
                      on the {plan.floor === 2 ? '2nd' : plan.floor === 3 ? '3rd' : '4th'} floor.
                      Features include open-concept living, large windows, in-unit washer/dryer,
                      quartz countertops, and stainless steel appliances.
                    </p>

                    <button
                      className="mt-4 inline-flex items-center text-[11px] font-medium tracking-[0.18em] uppercase text-[#5b7a99] hover:text-[#4a6580] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPlan(plan);
                      }}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Decorative Image Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em] mb-4">
                  Experience Bella
                </p>
                <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 font-playfair mb-4">
                  Designed for how you live.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Every residence at Bella features thoughtfully designed layouts that maximize natural light and storage. From the gourmet kitchens with quartz countertops to the spacious walk-in closets with custom organization systems, each detail has been carefully considered.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#5b7a99]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#5b7a99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Open Layouts</p>
                      <p className="text-xs text-slate-600">Flowing floor plans</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#5b7a99]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#5b7a99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Natural Light</p>
                      <p className="text-xs text-slate-600">Large windows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#5b7a99]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#5b7a99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Smart Storage</p>
                      <p className="text-xs text-slate-600">Custom closets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#5b7a99]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#5b7a99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Premium Finishes</p>
                      <p className="text-xs text-slate-600">High-end details</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/the-bella-downtown-bonita-springs-fl-living-room.jpg"
                      alt="Modern living room"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/the-bella-downtown-bonita-springs-fl-primary-bedroom.jpg"
                      alt="Primary bedroom"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/the-bella-downtown-bonita-springs-fl-gourmet-kitchen.jpg"
                      alt="Gourmet kitchen"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/the-bella-downtown-bonita-springs-fl-2br-2ba---kitchen.jpg"
                      alt="Modern kitchen"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-playfair mb-4 tracking-tight">
              Find your perfect home at Bella.
            </h2>
            <p className="text-base text-slate-600 font-light mb-10">
              Schedule a private tour to see our residences in person.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#5b7a99] text-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#4a6580] transition-all shadow-sm"
              >
                Schedule a Tour
              </button>
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
              <Link href="/floorplans" className="text-[#5b7a99]">Apartments</Link>
              <Link href="/amenities" className="text-slate-500 hover:text-[#5b7a99]">Amenities</Link>
              <Link href="/gallery" className="text-slate-500 hover:text-[#5b7a99]">Gallery</Link>
              <Link href="/blog" className="text-slate-500 hover:text-[#5b7a99]">Bonita Springs</Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-4 py-2 rounded-full bg-[#5b7a99] text-white font-medium hover:bg-[#4a6580]"
              >
                Book a Showing
              </button>
            </nav>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p className="text-[11px] text-slate-500">© {currentYear} Bella Apartments. All rights reserved.</p>
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

      {/* Detail Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-slate-900 hover:bg-slate-100 transition-colors"
              onClick={() => setSelectedPlan(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-playfair text-slate-900 mb-2">
                      Residence {selectedPlan.unit}
                    </h2>
                    <p className="text-sm text-slate-600">
                      {selectedPlan.beds} Bed • {selectedPlan.baths} Bath • Approx. {selectedPlan.sqft.toLocaleString()} sq ft
                    </p>
                  </div>
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] tracking-[0.16em] uppercase ${getFloorColor(selectedPlan.floor)}`}>
                    {selectedPlan.floor === 2 ? '2nd' : selectedPlan.floor === 3 ? '3rd' : '4th'} floor
                  </span>
                </div>
              </div>

              {/* Floorplan Image */}
              <div className="mb-6 bg-slate-50 rounded-xl overflow-hidden">
                <img
                  src={selectedPlan.image}
                  alt={`Residence ${selectedPlan.unit} floorplan`}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-[#5b7a99]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5b7a99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{selectedPlan.sqft.toLocaleString()} sq ft</p>
                    <p className="text-xs text-slate-500">Living Space</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-[#5b7a99]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5b7a99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{selectedPlan.beds} Bedroom{selectedPlan.beds > 1 ? 's' : ''}</p>
                    <p className="text-xs text-slate-500">Spacious Layout</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-[#5b7a99]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5b7a99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{selectedPlan.baths} Bathroom{selectedPlan.baths > 1 ? 's' : ''}</p>
                    <p className="text-xs text-slate-500">Modern Finishes</p>
                  </div>
                </div>

                {selectedPlan.balcony && (
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-full bg-[#5b7a99]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#5b7a99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Private Balcony</p>
                      <p className="text-xs text-slate-500">Outdoor Space</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6 p-4 bg-slate-50 rounded-xl">
                <h3 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wider">Features & Finishes</h3>
                <ul className="text-sm text-slate-600 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5b7a99]"></span>
                    Open-concept floor plan with abundant natural light
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5b7a99]"></span>
                    Gourmet kitchen with quartz countertops and designer backsplash
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5b7a99]"></span>
                    Stainless steel Energy Star appliances
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5b7a99]"></span>
                    In-unit full-size washer and dryer
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5b7a99]"></span>
                    Custom closet systems with built-in organizers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5b7a99]"></span>
                    Individual climate control
                  </li>
                  {selectedPlan.balcony && (
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5b7a99]"></span>
                      Spacious private balcony with downtown views
                    </li>
                  )}
                  {selectedPlan.ada && (
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5b7a99]"></span>
                      ADA accessible with universal design features
                    </li>
                  )}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-[#5b7a99] text-white px-6 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#4a6580] transition-all"
                >
                  Schedule a Tour
                </button>
                              </div>
            </div>
          </div>
        </div>
      )}

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
