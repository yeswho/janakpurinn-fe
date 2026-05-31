import React, { useState } from 'react';

export default function EventInquiryForm({ hallName }: { hallName: string }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '',
    eventType: 'Corporate Meeting'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'hall',
          hallName,
          ...formData
        }),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to submit inquiry. Please try again.';
        try {
          const errorData = await response.json();
          errorMsg = errorData.error || errorMsg;
        } catch (e) {
          if (response.status === 404) {
            errorMsg = 'API endpoint not found (404). If running locally, please start your server using "vercel dev" instead of "npm run dev".';
          }
        }
        throw new Error(errorMsg);
      }

      await response.json();

      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', date: '', guests: '', eventType: 'Corporate Meeting' });
    } catch (err: any) {
      console.error('Event inquiry submission error:', err);
      setSubmitError(err.message || 'Something went wrong. Please check your network and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Inquiry Sent!</h3>
        <p>Thank you for your interest in the {hallName}. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h3 className="text-2xl font-serif font-semibold text-text-primary mb-6">Request a Quote</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Event Date *</label>
          <input required type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Estimated Guests *</label>
          <input required type="number" min="1" id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border" />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
          <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 px-4 py-2 border">
            <option value="Corporate Meeting">Corporate Meeting</option>
            <option value="Workshop">Workshop/Seminar</option>
            <option value="Wedding">Wedding/Reception</option>
            <option value="Social Gathering">Social Gathering</option>
            <option value="Pilgrimage Gathering">Pilgrimage Gathering</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      {submitError && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
          {submitError}
        </div>
      )}
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full btn-mithila disabled:opacity-75 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </button>
    </form>
  );
}
