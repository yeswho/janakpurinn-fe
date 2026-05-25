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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Inquiry for ${hallName}:`, formData);
    setSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', date: '', guests: '', eventType: 'Corporate Meeting' });
    }, 3000);
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
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <button type="submit" className="w-full btn-primary py-3 rounded-md text-white font-medium hover:bg-accent-600 transition-colors">
        Submit Inquiry
      </button>
    </form>
  );
}
