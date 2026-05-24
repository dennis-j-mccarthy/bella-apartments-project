'use client';

import { useState } from 'react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    moveInTimeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ email: '', firstName: '', lastName: '', phoneNumber: '', moveInTimeline: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitStatus('idle');
    setErrorMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;ve received your information and will be in touch soon.
            </p>
            <button
              onClick={handleClose}
              className="bg-[#5b7a99] text-white px-6 py-3 rounded-full hover:bg-[#4a6a89] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Contact Rich Section */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/images/rich.jpg"
                alt="Rich, the owner"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-xs text-gray-600">Contact Rich the owner now via SMS:</p>
                <a
                  href="sms:+13125041835"
                  className="text-base font-semibold text-[#5b7a99] hover:text-[#4a6a89] transition-colors"
                >
                  (312) 504-1835
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 my-3">
              <div className="flex-1 border-t border-gray-200" />
              <span className="text-xs text-gray-500">Or</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sign Up to Book a Showing
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Fill out the form below and we&apos;ll contact you to schedule a tour.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-0.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b7a99] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-0.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b7a99] focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-0.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b7a99] focus:border-transparent outline-none transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-medium text-gray-700 mb-0.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b7a99] focus:border-transparent outline-none transition-all text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="moveInTimeline" className="block text-xs font-medium text-gray-700 mb-0.5">
                  When are you looking to move?
                </label>
                <select
                  id="moveInTimeline"
                  name="moveInTimeline"
                  value={formData.moveInTimeline}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b7a99] focus:border-transparent outline-none transition-all text-sm bg-white"
                >
                  <option value="">Select a timeframe</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="3-4 months">3-4 months</option>
                  <option value="5-6 months">5-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>

              {submitStatus === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5b7a99] text-white py-2.5 rounded-full font-medium text-sm hover:bg-[#4a6a89] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
