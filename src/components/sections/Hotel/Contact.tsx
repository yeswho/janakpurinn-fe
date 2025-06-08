import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = {
    address: {
      line1: "Ramanand Chowk",
      line2: "Janakpur Dham - 08",
      country: "Nepal"
    },
    phones: [
      "+977 41-591317",
      "+977 41-591989",
      "+977 9765263291",
      "+977 9840149464"
    ],
    email: "janakpurinnhna2079@gmail.com"
  };

  return (
    <div className="relative min-h-screen bg-primary-50">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(var(--color-primary-100) 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      />

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-serif font-bold text-accent-500 mb-4">Contact Us</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for inquiries, reservations, or any assistance you may need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="hotel-card p-8 h-full">
            <h2 className="text-2xl font-serif text-accent-500 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-accent-400 mb-2">Address</h3>
                <address className="text-text-secondary not-italic">
                  <p>{contactInfo.address.line1}</p>
                  <p>{contactInfo.address.line2}</p>
                  <p>{contactInfo.address.country}</p>
                </address>
              </div>

              <div>
                <h3 className="text-lg font-medium text-accent-400 mb-2">Phone</h3>
                <ul className="text-text-secondary space-y-1">
                  {contactInfo.phones.map((phone, index) => (
                    <li key={index}>
                      <a href={`tel:${phone.replace(/ /g, '')}`} className="hover:text-accent-500 transition-colors">
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-accent-400 mb-2">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-text-secondary hover:text-accent-500 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200/50">
              <h3 className="text-lg font-medium text-accent-400 mb-4">Business Hours</h3>
              <ul className="text-text-secondary space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="hotel-card p-8">
            <h2 className="text-2xl font-serif text-accent-500 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300/50 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300/50 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300/50 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300/50 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback/Suggestions</option>
                  <option value="event">Event Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300/50 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;