'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import ContactFormModal from '@/components/ContactFormModal';

export default function Amenities() {
  const currentYear = new Date().getFullYear();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="amenities" onBookShowing={() => setIsContactModalOpen(true)} />

      <main>
        {/* Page Title */}
        <section className="bg-white pt-20 pb-12 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em] mb-4">
              Designed for Living
            </p>
            <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight font-playfair">
              Amenities
            </h1>
          </div>
        </section>

        {/* Feature 1: Pool */}
        <section className="border-b border-slate-200 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Text Side */}
              <div className="order-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-px bg-slate-300"></div>
                  <p className="text-[11px] uppercase font-semibold text-[#5b7a99] tracking-[0.22em]">
                    Outdoors
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-playfair mb-6 tracking-tight">
                  Pool and Outdoor Grilling Area
                </h2>
                <p className="text-base leading-relaxed text-slate-600 mb-8 font-light">
                  A private pool offers residents a place to unwind without the crowds common to
                  larger communities. With only sixteen units sharing the space, availability is
                  never a concern. Adjacent to the pool, a furnished grilling area provides a proper
                  setting for outdoor cooking and casual gatherings.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-base text-slate-700 font-light">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Private pool exclusively for 16 units</span>
                  </li>
                  <li className="flex items-center gap-3 text-base text-slate-700 font-light">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Furnished lounge deck</span>
                  </li>
                  <li className="flex items-center gap-3 text-base text-slate-700 font-light">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Premium grilling station</span>
                  </li>
                </ul>
              </div>

              {/* Image Side */}
              <div className="order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-100 aspect-[4/3] bg-slate-100 group">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-10"></div>
                  <img
                    src="/images/the-bella-downtown-bonita-springs-fl-pool.jpg"
                    alt="Bella Apartments Pool"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Fitness Rooms */}
        <section className="border-b border-slate-200 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Image Side */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-100 aspect-[4/3] bg-slate-100 group">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-10"></div>
                  <img
                    src="/images/the-bella-downtown-bonita-springs-fl-2nd-floor-fitness-center.jpg"
                    alt="Modern fitness center with dumbbells and cable machine"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-px bg-slate-300"></div>
                  <p className="text-[11px] uppercase font-semibold text-[#5b7a99] tracking-[0.22em]">
                    Wellness
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-playfair mb-6 tracking-tight">
                  Fitness Rooms
                </h2>
                <p className="text-base leading-relaxed text-slate-600 mb-8 font-light">
                  The on-site fitness studio is designed with a modern aesthetic, featuring exposed
                  concrete ceilings and track lighting. The facility is equipped with a versatile
                  cable crossover machine, a full rack of dumbbells for strength training, and
                  premium cardio equipment including treadmills and ellipticals. Wall-to-wall
                  mirrors and climate control ensure a professional and comfortable workout
                  environment, all steps from your apartment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors group cursor-default">
                    <svg
                      className="w-5 h-5 text-slate-700 mb-3 group-hover:text-slate-900 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6.5 6.5h11M17.5 6.5v11M6.5 17.5h11M6.5 6.5v11" />
                      <circle cx="4" cy="6.5" r="2.5" />
                      <circle cx="20" cy="6.5" r="2.5" />
                      <circle cx="4" cy="17.5" r="2.5" />
                      <circle cx="20" cy="17.5" r="2.5" />
                    </svg>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Strength Training
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Free weights &amp; benches</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors group cursor-default">
                    <svg
                      className="w-5 h-5 text-slate-700 mb-3 group-hover:text-slate-900 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Functional
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Cable &amp; Cardio machines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Divider */}
        <section className="relative bg-slate-900 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('/images/bella-hero.png')",
              backgroundAttachment: 'fixed',
            }}
          ></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-36 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-normal tracking-tight mb-6 text-white">
              Every detail considered.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-light tracking-wide leading-relaxed">
              Modern conveniences integrated into urban style, creating a top-quality living
              experience.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Item: Enclosed Hallways */}
              <div className="bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/hall.jpg"
                    alt="Enclosed hallways at Bella"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-slate-900 mb-3 font-playfair tracking-tight">
                    Enclosed Hallways
                  </h3>
                  <p className="text-base leading-relaxed text-slate-500 font-light">
                    Unlike the open-air breezeways typical of Florida construction, Bella features
                    fully enclosed, climate-controlled corridors throughout. No more leaves, dirt, 
                    or debris blowing in—hallways remain clean and protected regardless of weather conditions.
                  </p>
                </div>
              </div>

              {/* Item: Covered Garage Parking */}
              <div className="bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/parking.jpg"
                    alt="Covered garage parking at Bella"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-slate-900 mb-3 font-playfair tracking-tight">
                    Covered Garage Parking
                  </h3>
                  <p className="text-base leading-relaxed text-slate-500 font-light">
                    The parking structure is fully covered, well-lit, and secured with controlled
                    access. Vehicles remain protected from sun damage, afternoon storms, and debris.
                    Dedicated bike racks included.
                  </p>
                </div>
              </div>

              {/* Item: Guest Suite */}
              <div className="bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/jnwpkntpm/DSC02338.jpg"
                    alt="Guest suite at Bella"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-slate-900 mb-3 font-playfair tracking-tight">
                    Guest Suite
                  </h3>
                  <p className="text-base leading-relaxed text-slate-500 font-light">
                    A dedicated guest suite is available for resident booking. When family or friends
                    visit, they enjoy private accommodations within the building—a more comfortable
                    arrangement than a hotel.
                  </p>
                </div>
              </div>

              {/* Item: Poolside BBQ */}
              <div className="bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/the-bella-downtown-bonita-springs-fl-pool.jpg"
                    alt="Poolside BBQ area at Bella"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-slate-900 mb-3 font-playfair tracking-tight">
                    Poolside BBQ
                  </h3>
                  <p className="text-base leading-relaxed text-slate-500 font-light">
                    A professional-grade outdoor barbecue area sits adjacent to the resort-style pool,
                    perfect for weekend cookouts, entertaining guests, or casual gatherings with neighbors.
                  </p>
                </div>
              </div>

              {/* Item: Keyless Entry */}
              <div className="bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/keypad.jpg"
                    alt="Keyless entry system at Bella"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-slate-900 mb-3 font-playfair tracking-tight">
                    Keyless Entry
                  </h3>
                  <p className="text-base leading-relaxed text-slate-500 font-light">
                    Modern electronic access controls are installed throughout the property. Entry is
                    seamless and secure, with no physical keys required for building access, garage
                    entry, or individual units.
                  </p>
                </div>
              </div>

              {/* Item: Security */}
              <div className="bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/security.jpg"
                    alt="Security system at Bella"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-slate-900 mb-3 font-playfair tracking-tight">
                    Security
                  </h3>
                  <p className="text-base leading-relaxed text-slate-500 font-light">
                    Surveillance cameras monitor common areas and entry points. The garage is
                    access-controlled, and exterior spaces are appropriately lit after dark. Security
                    is present without being intrusive.
                  </p>
                </div>
              </div>

              {/* Item: Elevator */}
              <div className="bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/elevator.jpg"
                    alt="Elevator at Bella"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-slate-900 mb-3 font-playfair tracking-tight">
                    Elevator
                  </h3>
                  <p className="text-base leading-relaxed text-slate-500 font-light">
                    A central elevator provides access to all floors, accommodating residents and
                    guests with ease.
                  </p>
                </div>
              </div>

              {/* Item: Storage */}
              <div className="bg-white rounded-2xl border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/storage.jpg"
                    alt="Private storage at Bella"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-slate-900 mb-3 font-playfair tracking-tight">
                    Private Storage
                  </h3>
                  <p className="text-base leading-relaxed text-slate-500 font-light">
                    Private storage closets are available for lease, offering additional space for
                    seasonal items, sporting equipment, or personal belongings beyond what unit
                    closets accommodate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-playfair mb-4 tracking-tight">
              Ready to experience Bella in person?
            </h2>
            <p className="text-base text-slate-600 font-light mb-10">
              Schedule a private tour to see our amenities and available residences.
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
            {/* Logo */}
            <div className="flex gap-x-2 items-center self-start">
              <img
                src="/images/bella-logo-final.png"
                alt="Bella Apartments logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            {/* Footer Nav */}
            <nav className="flex flex-wrap items-center gap-5 text-[11px] font-normal tracking-[0.18em] uppercase">
              <Link href="/" className="text-slate-500 hover:text-[#5b7a99]">
                Home
              </Link>
              <Link href="/floorplans" className="text-slate-500 hover:text-[#5b7a99]">
                Apartments
              </Link>
              <Link href="/amenities" className="text-[#5b7a99]">
                Amenities
              </Link>
              <Link href="/gallery" className="text-slate-500 hover:text-[#5b7a99]">
                Gallery
              </Link>
              <Link href="/blog" className="text-slate-500 hover:text-[#5b7a99]">
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
