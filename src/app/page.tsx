'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="home" />

      <main className="bg-slate-50 text-slate-900">
        {/* Hero Row */}
        <section className="border-b border-slate-200 bg-white">
          <div className="sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 px-4">
            <div className="grid gap-10 lg:gap-12">
              {/* Hero Text + Video */}
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2">
                  <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em]">
                    NEW CONSTRUCTION, UNDER 2,500
                  </p>
                  <h1 className="sm:text-4xl lg:text-5xl text-3xl font-light text-slate-900 tracking-normal font-playfair mt-3">
                    New Luxury Apartments in Downtown Bonita Springs
                  </h1>
                  <p className="text-sm text-slate-600 max-w-md mt-4">
                    Luxury apartments, new construction, prime sought-after location, under $2,500
                    with no price "gotchas". Inspired by the latest design and construction trends,
                    at Bella, every detail has been thoughtfully crafted to elevate your everyday
                    experience.
                  </p>
                </div>

                <div className="lg:col-span-3">
                  {/* Hero Video Placeholder */}
                  <div className="relative aspect-video rounded-3xl border border-slate-200 bg-slate-100 overflow-hidden">
                    <img
                      src="/images/bella-hero.png"
                      alt="Bella Apartments hero"
                      className="w-full h-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/15 via-slate-900/5 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-slate-50 drop-shadow-sm">
                          Bella Walkthrough
                        </p>
                        <p className="text-xs text-slate-100 drop-shadow-sm">
                          A glimpse into everyday life at Bella Apartments.
                        </p>
                      </div>
                      <button className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-white px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-900 backdrop-blur-sm hover:bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                        >
                          <polygon points="9 7 17 12 9 17 9 7" fill="currentColor" />
                        </svg>
                        Play Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two-column short text with CTA */}
              <div className="grid md:grid-cols-2 gap-10 pt-2 border-t border-slate-200 mt-6">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
                    Welcome to your New home in Bonita Springs
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md">
                    Right in the heart of one of Southwest Florida's most walkable, authentic
                    downtown—Bella isn't just where you live, it's where life gets better.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-black text-slate-600 max-w-md">
                    To see it is to love it. The best way to experience Bella's boutique apartments
                    feel is in person.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button className="inline-flex items-center justify-center rounded-full bg-[#5b7a99] text-white px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#4a6580]">
                      Schedule a Tour
                    </button>
                    <button className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99] bg-white">
                      View Availability
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apartments Row */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="sm:px-6 lg:px-8 max-w-6xl mx-auto py-14 px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em]">
                  RESIDENCES
                </p>
                <h2 className="sm:text-3xl text-2xl font-light text-slate-900 font-playfair mt-2">
                  Apartments designed for how you actually live.
                </h2>
                <p className="text-sm text-slate-600 max-w-xl mt-3">
                  True luxury lives in the details most apartments overlook. We obsess over the
                  quiet moments—the soft-close cabinets, the whisper-quiet dishwasher during dinner.
                  Premium hardware, thoughtfully insulated walls, and whisper-quiet cooling systems
                  work in harmony to create a serene sanctuary where every detail elevates your
                  daily life. Because the difference between ordinary and luxury lies in the little
                  things.
                </p>
              </div>
              <div>
                <button className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-slate-800">
                  View Floorplans
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory p-3">
                  {/* Slide 1 */}
                  <div className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] snap-start rounded-2xl overflow-hidden border border-slate-200 bg-white">
                    <div className="h-56 bg-slate-100">
                      <img
                        src="/images/the-bella-downtown-bonita-springs-fl-2br-2ba---kitchen.png"
                        alt="Two bedroom kitchen at Bella Apartments"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-medium tracking-[0.16em] uppercase text-slate-500">
                        One Bedroom
                      </p>
                      <h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900 font-playfair">
                        1 Bed · 1 Bath · Balcony
                      </h3>
                      <p className="mt-2 text-xs text-slate-600">
                        Open-concept living with south-facing windows and a private outdoor retreat.
                      </p>
                    </div>
                  </div>
                  {/* Slide 2 */}
                  <div className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] snap-start rounded-2xl overflow-hidden border border-slate-200 bg-white">
                    <div className="h-56 bg-slate-100">
                      <img
                        src="/images/the-bella-downtown-bonita-springs-fl-second-bathroom.jpg"
                        alt="Bathroom at Bella Apartments"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-medium tracking-[0.16em] uppercase text-slate-500">
                        Two Bedroom
                      </p>
                      <h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900 font-playfair">
                        Corner 2 Bed · 2 Bath
                      </h3>
                      <p className="mt-2 text-xs text-slate-600">
                        Wraparound windows, split bedrooms, and an entertainer's kitchen.
                      </p>
                    </div>
                  </div>
                  {/* Slide 3 */}
                  <div className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] snap-start rounded-2xl overflow-hidden border border-slate-200 bg-white">
                    <div className="h-56 bg-slate-100">
                      <img
                        src="/images/the-bella-downtown-bonita-springs-fl-primary-bedroom.jpg"
                        alt="Primary bedroom at Bella Apartments"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-medium tracking-[0.16em] uppercase text-slate-500">
                        Penthouse
                      </p>
                      <h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900 font-playfair">
                        3 Bed · 2.5 Bath · Terrace
                      </h3>
                      <p className="mt-2 text-xs text-slate-600">
                        Elevated ceilings, expansive terrace, and sweeping Bonita Springs views.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Carousel controls */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-3 pt-2 bg-gradient-to-t from-slate-900/5 to-transparent">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-5 rounded-full bg-slate-900" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="h-7 w-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-slate-400 bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                      >
                        <polyline points="15 6 9 12 15 18" />
                      </svg>
                    </button>
                    <button className="h-7 w-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-slate-400 bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                      >
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-slate-700 hover:text-slate-900">
                  View Floorplans
                  <span className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Row */}
        <section className="relative border-b border-slate-200 bg-slate-50">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('/images/the-bella-downtown-bonita-springs-fl-pool.jpg')",
            }}
          />
          <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto py-32 px-4 relative">
            <div className="max-w-2xl bg-white/90 border border-white/70 rounded-3xl p-6 sm:p-8 shadow-sm">
              <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#5b7a99]">
                Amenities
              </p>
              <h2 className="sm:text-3xl text-2xl font-light text-slate-900 tracking-normal font-playfair mt-3">
                Resort-style amenities
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mt-3">
                Covered garage parking, stylish and quiet concrete walls and floors! Amazing luxury
                boutique elevator building, pool, fitness center, and much more.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 items-center">
                <button className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-slate-800">
                  Explore Amenities
                </button>
                <p className="text-xs font-black text-slate-600">🐕 WE'RE PET FRIENDLY!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bonita Springs / Blog Row */}
        <section className="border-b border-slate-200 bg-white">
          <div className="sm:px-6 lg:px-8 max-w-6xl mx-auto py-14 px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-6">
              <div>
                <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em]">
                  Location, Location, Location
                </p>
                <h2 className="sm:text-3xl text-2xl font-thin text-slate-900 tracking-normal font-playfair mt-2">
                  From the Heart of Bonita Springs.
                </h2>
                <p className="text-sm text-slate-600 max-w-xl mt-3">
                  If you've spent time in Florida, you've noticed how rare true downtowns are—the
                  kind you might have grown up with. Bonita Springs is one of Southwest Florida's
                  hidden gems: an authentic downtown with character, charm, and community. Great
                  restaurants, local shops, and weekend festivals are all within walking distance.
                  It's the kind of place where you find friends and know your neighbors. It's not
                  just convenient—it's the Florida lifestyle you've been looking for, with that
                  small-town feel that's nearly impossible to find anymore.
                </p>
              </div>
              <div>
                <button className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-slate-700 hover:border-slate-400 hover:text-slate-900 bg-white">
                  Read Our Blog
                </button>
              </div>
            </div>

            {/* 4-across blog grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Article 1 */}
              <article className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
                <div className="h-32 bg-slate-100">
                  <img
                    src="/images/bonita-overhead.jpg"
                    alt="Overhead view of Bonita Springs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-slate-500">
                    Local Guide
                  </p>
                  <h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900 font-playfair">
                    A weekend walking tour of downtown Bonita Springs.
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">
                    Cafés, galleries, and waterfront stops all within minutes of Bella.
                  </p>
                </div>
              </article>
              {/* Article 2 */}
              <article className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
                <div className="h-32 bg-slate-100">
                  <img
                    src="/images/bonita-coffee.jpg"
                    alt="Coffee shop in Bonita Springs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-slate-500">
                    Lifestyle
                  </p>
                  <h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900 font-playfair">
                    Sunset rituals at the river and nearby beaches.
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">
                    The best golden-hour spots just a short drive or bike ride away.
                  </p>
                </div>
              </article>
              {/* Article 3 */}
              <article className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
                <div className="h-32 bg-slate-100">
                  <img
                    src="/images/wugarshack 2.webp"
                    alt="Dining in Bonita Springs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-slate-500">
                    Dining
                  </p>
                  <h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900 font-playfair">
                    Five restaurants within five minutes of home.
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">
                    From fresh seafood to hidden neighborhood gems.
                  </p>
                </div>
              </article>
              {/* Article 4 */}
              <article className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
                <div className="h-32 bg-slate-100">
                  <img
                    src="/images/bonita-bohemian.jpg"
                    alt="Bohemian style in Bonita Springs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-slate-500">
                    Community
                  </p>
                  <h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900 font-playfair">
                    Seasonal events and happenings at Bella.
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">
                    Resident gatherings, poolside movies, and neighborhood spotlights.
                  </p>
                </div>
              </article>
            </div>

            <div className="flex mt-8 justify-center">
              <button className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-slate-700 hover:text-slate-900">
                Read Our Blog
                <span className="inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em] mb-4">
                Frequently Asked Questions
              </p>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 font-playfair mb-4">
                Everything you need to know about Bella
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                Get quick answers to common questions about living at Bella Apartments in downtown Bonita Springs, Florida.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How far is Bella Apartments from downtown Bonita Springs?",
                  answer: "Bella is located directly in downtown Bonita Springs, within easy walking distance to restaurants, shops, and entertainment. You can walk to Riverside Park in just 5 minutes, and most downtown attractions are within a 10-minute stroll."
                },
                {
                  question: "What is the average rent at Bella Apartments?",
                  answer: "Our luxury apartments start at $2,250 per month for 1-bedroom units and $2,350 per month for 2-bedroom units. All utilities except electric are included in your rent, with no hidden fees or surprise charges. Prices are competitive for new construction luxury apartments in downtown Bonita Springs."
                },
                {
                  question: "Are pets allowed at Bella Apartments?",
                  answer: "Yes, Bella is a pet-friendly community! We welcome cats and dogs with reasonable size and breed restrictions. Pet rent and deposit fees apply. Contact us for specific details about our pet policy and any breed restrictions."
                },
                {
                  question: "What amenities are included at Bella?",
                  answer: "Bella features resort-style amenities including a heated swimming pool, two state-of-the-art fitness centers (2nd and 3rd floors), covered parking with elevator access, additional climate-controlled storage units, secure bike storage, and a poolside BBQ area. Every apartment includes in-unit full-size washer and dryer, quartz countertops, stainless steel Energy Star appliances, custom closet systems, and individual climate control."
                },
                {
                  question: "Is parking included with my apartment?",
                  answer: "Yes, residents receive two free outdoor parking spaces with each apartment. Indoor parking spaces are also available to rent for a small fee. The indoor parking is located in an enclosed, brightly lit garage with direct elevator access to all floors."
                },
                {
                  question: "How close is Bella to the beach?",
                  answer: "Bella Apartments is 5 miles from Barefoot Beach in Bonita Beach, one of Southwest Florida's most beautiful and pristine Gulf Coast beaches. It's a quick 10-12 minute drive to enjoy the white sand beaches and turquoise waters of the Gulf of Mexico."
                },
                {
                  question: "What utilities are included in the rent?",
                  answer: "Water, sewer, and trash are included in your monthly rent. You are responsible for your electric and internet bills. This straightforward approach makes budgeting easier with most utilities covered."
                },
                {
                  question: "Does Bella have a fitness center?",
                  answer: "Yes, Bella features two modern fitness centers - one on the 2nd floor and one on the 3rd floor - equipped with state-of-the-art cardio and strength training equipment. Both are available 24/7 for residents."
                },
                {
                  question: "What makes Bella different from other apartments in Bonita Springs?",
                  answer: "Bella stands out as new construction with modern amenities at under $2,500/month in a prime downtown location. Key differentiators include European-style whisper-quiet climate control (not noisy forced air), custom-designed closet systems, elevator access, spacious soft-close cabinets, filtered water systems, and high-performance ventilation that vents directly outside. The building was designed by an experienced builder with attention to details often skipped in cookie-cutter complexes."
                },
                {
                  question: "Is there an application fee and what is the lease term?",
                  answer: "Standard application fees apply. We offer flexible lease terms including 12-month leases. Contact our leasing office for current specials, move-in costs, and available lease options."
                },
                {
                  question: "Can I walk to restaurants and shops from Bella?",
                  answer: "Absolutely! Bella's downtown Bonita Springs location puts you within walking distance of numerous restaurants, cafes, bars, shops, and entertainment venues. Riverside Park, with its live music and events, is just a 5-minute walk. The walkable downtown area is one of Bella's biggest advantages."
                },
                {
                  question: "Are the apartments available furnished or unfurnished?",
                  answer: "Bella apartments are leased unfurnished, allowing you to personalize your space. However, every unit comes with premium built-in features including quartz countertops, stainless steel appliances, in-unit washer/dryer, and custom closet organization systems."
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-[#5b7a99] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                  >
                    <h3 className="text-base font-medium text-slate-900 group-hover:text-[#5b7a99] transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#5b7a99]/10 flex items-center justify-center transition-all ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-slate-600 group-hover:text-[#5b7a99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-900 font-medium mb-2">Still have questions?</p>
              <p className="text-sm text-slate-600 mb-4">Our leasing team is here to help you find your perfect home at Bella.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="tel:+12395550123" className="inline-flex items-center gap-2 text-sm text-[#5b7a99] hover:text-[#4a6580] font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (239) 555-0123
                </a>
                <span className="hidden sm:inline text-slate-300">|</span>
                <a href="mailto:hello@bellaapts.com" className="inline-flex items-center gap-2 text-sm text-[#5b7a99] hover:text-[#4a6580] font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@bellaapts.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map Row */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
              <div>
                <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em]">
                  Location, Location, Location
                </p>
                <h2 className="sm:text-3xl text-2xl font-light text-slate-900 tracking-normal font-playfair mt-2">
                  In the center of downtown Bonita Springs.
                </h2>
                <p className="mt-3 text-sm text-slate-600 max-w-xl">
                  Walkable to the best of Bonita Springs and minutes to the beaches, Bella
                  Apartments places you at the intersection of culture, convenience, and coastal
                  calm.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white h-[320px] sm:h-[380px]">
              {/* Map image */}
              <img 
                src="/images/bella-temp-map.png" 
                alt="Downtown Bonita Springs map with nearby attractions"
                className="w-full h-full object-cover"
              />

              {/* Marker overlay */}
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <div className="flex items-center gap-2 bg-white/95 px-3 py-2 rounded-full border border-slate-200 shadow-lg">
                  <div className="h-7 w-7 rounded-full bg-[#5b7a99] flex items-center justify-center text-[10px] font-semibold text-white tracking-tight">
                    B
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold tracking-tight text-slate-900">
                      Bella Apartments
                    </span>
                    <span className="text-[10px] text-slate-500">Downtown Bonita Springs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Logo */}
            <div className="flex gap-x-2 items-center">
              <div className="h-8">
                <img
                  src="/images/bella-logo-final.png"
                  alt="Bella Apartments logo"
                  className="h-8 w-auto"
                />
              </div>
            </div>

            {/* Footer Nav */}
            <nav className="flex flex-wrap items-center gap-5 text-[11px] font-normal tracking-[0.18em] uppercase">
              <Link href="/" className="text-slate-700 hover:text-[#5b7a99]">
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
              <Link href="/blog" className="text-slate-500 hover:text-[#5b7a99]">
                Bonita Springs
              </Link>
              <button className="px-4 py-2 rounded-full bg-[#5b7a99] text-white font-medium hover:bg-[#4a6580]">
                Book a Showing
              </button>
            </nav>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p className="text-[11px] text-slate-500">
              © {currentYear} Bella Apartments. All rights reserved.
            </p>
            <div className="flex gap-4 text-[11px] text-slate-500">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Fair Housing</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
