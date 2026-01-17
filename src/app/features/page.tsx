'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  differentiator?: {
    label: string;
    comparison: string;
  };
}

const features: Feature[] = [
  {
    id: 2,
    title: 'Spacious Cabinets',
    description: 'Plenty of cabinet space for all your kitchen essentials, designed to maximize storage and keep your space organized.',
    image: '/images/cabinets.jpg',
    category: 'Interior',
    differentiator: {
      label: 'More Space',
      comparison: 'Compare our cabinet space with other apartments in the Bonita Springs area and you\'ll see the difference at Bella. The cabinets are also soft-close so you\'ll never hear one slam.',
    },
  },
  {
    id: 3,
    title: 'In-Unit Full-Size Washer & Dryer',
    description: 'Full-size washer and dryer conveniently located in your apartment for the ultimate in-home laundry experience.',
    image: '/images/washer.jpg',
    category: 'Appliances',
  },
  {
    id: 4,
    title: 'Spacious Closets',
    description: 'Generous walk-in closets with custom organization systems designed to accommodate your lifestyle.',
    image: '/images/shelves.jpg',
    category: 'Interior',
  },
  {
    id: 5,
    title: 'Climate Control',
    description: 'Individual climate control units in every residence, ensuring personalized comfort year-round in the Florida climate.',
    image: '/images/cooling.jpg',
    category: 'Systems',
    differentiator: {
      label: 'Whisper Quiet',
      comparison: 'Given the climate in Southwest Florida, many apartment buildings have a forced air cooling system that runs continuously and can be noisy. Bella features European style climate control units that are whisper quiet, and very efficient.',
    },
  },
  {
    id: 6,
    title: 'Premium Dishwashers',
    description: 'Whisper-quiet, energy-efficient dishwashers that make cleanup effortless while complementing your modern kitchen.',
    image: '/images/dishwasher.jpg',
    category: 'Appliances',
  },
  {
    id: 7,
    title: 'Custom Closet Systems',
    description: 'Professionally designed closet organization systems with built-in shelving, drawers, and premium fixtures.',
    image: '/images/shelves.jpg',
    category: 'Interior',
    differentiator: {
      label: 'Expertly Designed',
      comparison: 'These closet systems were custom designed by the experienced builder who created Bella, drawing on years of expertise in optimizing storage space. This attention to detail sets Bella apart from cookie-cutter apartment complexes that typically skip these deluxe features in favor of basic, one-size-fits-all solutions.',
    },
  },
  {
    id: 8,
    title: 'Ventilation Systems',
    description: 'High-performance exhaust fans venting directly to the outside, ensuring optimal air quality and comfort in kitchens and bathrooms.',
    image: '/images/placeholder-exhaust.jpg',
    category: 'Systems',
  },
  {
    id: 9,
    title: 'Filtered Water',
    description: 'Built-in water filtration system in refrigerators providing fresh, clean drinking water on demand.',
    image: '/images/water.jpg',
    category: 'Appliances',
    differentiator: {
      label: 'Fresh & Convenient',
      comparison: 'In Southwest Florida, the drinking water is not always ideal. So most people go to the grocery store or use special water service companies to provide their drinking water. At Bella, all your water is fresh and on demand and delicious through a filtered system in the refrigerator. Compare this with other apartment complexes in the area.',
    },
  },
  {
    id: 10,
    title: 'Concrete Ceilings',
    description: 'Exposed concrete ceilings create an industrial-chic aesthetic while providing superior sound insulation.',
    image: '/images/ceiling.jpg',
    category: 'Interior',
    differentiator: {
      label: 'Sound & Style',
      comparison: 'While most apartments use standard drywall ceilings, Bella features exposed concrete that provides exceptional sound insulation between floors and a distinctive modern aesthetic you won\'t find in cookie-cutter complexes.',
    },
  },
  {
    id: 12,
    title: 'Chef-Grade Kitchen',
    description: 'Professional-quality sinks and faucets designed for serious home cooking with commercial-grade performance.',
    image: '/images/chef.jpg',
    category: 'Interior',
  },
  {
    id: 13,
    title: 'Seamless Surfaces',
    description: 'Matching quartz countertops and backsplash create a cohesive, sophisticated kitchen design.',
    image: '/images/surfaces.jpg',
    category: 'Interior',
  },
  {
    id: 14,
    title: 'Private Balconies',
    description: 'Spacious outdoor balconies perfect for morning coffee, evening relaxation, or entertaining guests.',
    image: '/images/patio2.jpg',
    category: 'Outdoor',
  },
];

const categories = ['All', 'Interior', 'Appliances', 'Systems', 'Technology', 'Building', 'Amenity', 'Outdoor'];

export default function Features() {
  const currentYear = new Date().getFullYear();
  const [selectedDifferentiator, setSelectedDifferentiator] = useState<Feature | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="features" />

      <main className="flex-1 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em]">
                Features & Finishes
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 font-playfair">
                Designed for modern living.
              </h1>
              <p className="mt-4 text-sm text-slate-600 max-w-xl">
                Every detail at Bella has been carefully considered. From premium appliances
                to smart building technology, discover the features that make everyday living
                extraordinary.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-10 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#5b7a99] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden rounded-t-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] uppercase tracking-[0.16em] font-semibold text-slate-900 border border-slate-200">
                        {feature.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair text-slate-900 mb-3 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.differentiator && (
                      <div className="mt-2">
                        <span className="relative inline-block group/tooltip">
                          <button
                            onClick={() => setSelectedDifferentiator(feature)}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-orange-600 hover:text-orange-700 transition-colors border border-orange-400 bg-orange-50 rounded-full px-2 py-0.5"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Why This Matters
                          </button>
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white text-slate-800 text-xs rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none z-[60]">
                            <div className="font-semibold mb-1 text-slate-900">Why this matters:</div>
                            <div className="text-slate-700 leading-relaxed">
                              {feature.differentiator.comparison}
                            </div>
                            {/* Arrow */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                              <div className="border-8 border-transparent border-t-white"></div>
                            </div>
                          </div>
                        </span>
                      </div>
                    )}
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
              Experience the difference.
            </h2>
            <p className="text-base text-slate-600 font-light mb-10">
              Schedule a tour to see these premium features and finishes in person.
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
              <Link href="/features" className="text-[#5b7a99]">Features</Link>
              <Link href="/gallery" className="text-slate-500 hover:text-[#5b7a99]">Gallery</Link>
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

      {/* Differentiator Modal */}
      {selectedDifferentiator && selectedDifferentiator.differentiator && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/50 flex items-center justify-center p-4"
          onClick={() => setSelectedDifferentiator(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              onClick={() => setSelectedDifferentiator(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-semibold tracking-[0.16em] uppercase mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {selectedDifferentiator.differentiator.label}
                </div>
                <h2 className="text-3xl font-playfair text-slate-900 mb-2">
                  {selectedDifferentiator.title}
                </h2>
                <p className="text-sm text-slate-600">
                  How Bella stands apart from the competition
                </p>
              </div>

              {/* Comparison */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-slate-800 leading-relaxed">
                  {selectedDifferentiator.differentiator.comparison}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <button className="flex-1 inline-flex items-center justify-center rounded-full bg-[#5b7a99] text-white px-6 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#4a6580] transition-all">
                  Schedule a Tour
                </button>
                <button
                  onClick={() => setSelectedDifferentiator(null)}
                  className="flex-1 inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99] bg-white transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
