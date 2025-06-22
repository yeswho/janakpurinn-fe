import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
    >
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(var(--color-primary-100) 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      />

      <div className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-text-primary mb-4 sm:mb-6 tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-base sm:text-lg md:text-xl font-serif font-medium text-text-primary">
              We'd Love to Hear From You
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent-400 mx-auto mt-3 sm:mt-6"></div>
          </div>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Reach out to us for inquiries, reservations, or any assistance you may need.
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
        >
          {/* Contact Information */}
          <motion.div 
            variants={item}
            className="hotel-card p-6 sm:p-8 h-full"
          >
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-text-primary mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                className="flex items-start"
              >
                <motion.div 
                  className="flex-shrink-0 bg-accent-400/10 p-3 rounded-lg mr-4"
                  whileHover="hover"
                >
                  <motion.div>
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
                  </motion.div>
                </motion.div>
                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-2">Address</h3>
                  <address className="text-sm sm:text-base text-text-secondary not-italic">
                    <p>{contactInfo.address.line1}</p>
                    <p>{contactInfo.address.line2}</p>
                    <p>{contactInfo.address.country}</p>
                  </address>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
              >
                <motion.div 
                  className="flex-shrink-0 bg-accent-400/10 p-3 rounded-lg mr-4"
                  whileHover="hover"
                >
                  <motion.div>
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
                  </motion.div>
                </motion.div>
                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-2">Phone</h3>
                  <ul className="text-sm sm:text-base text-text-secondary space-y-1">
                    {contactInfo.phones.map((phone, index) => (
                      <li key={index}>
                        <a 
                          href={`tel:${phone.replace(/ /g, '')}`} 
                          className="hover:text-accent-500 transition-colors"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
              >
                <motion.div 
                  className="flex-shrink-0 bg-accent-400/10 p-3 rounded-lg mr-4"
                  whileHover="hover"
                >
                  <motion.div>
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
                  </motion.div>
                </motion.div>
                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-2">Email</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-sm sm:text-base text-text-secondary hover:text-accent-500 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-200/50">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <motion.div 
                  className="flex-shrink-0 bg-accent-400/10 p-3 rounded-lg mr-4"
                  whileHover="hover"
                >
                  <motion.div>
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
                  </motion.div>
                </motion.div>
                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-3">Business Hours</h3>
                  <ul className="text-sm sm:text-base text-text-secondary space-y-2">
                    <li className="flex justify-between max-w-xs">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between max-w-xs">
                      <span>Saturday - Sunday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={item}
            className="hotel-card p-6 sm:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-text-primary mb-6">
              Send Us a Message
            </h2>
            
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-400/10 rounded-full mb-4">
                  <CheckCircle className="w-10 h-10 text-accent-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 text-text-primary">
                  Message Sent!
                </h3>
                <p className="text-sm sm:text-base text-text-secondary mb-6">
                  We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="btn-primary px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-5 sm:space-y-6"
              >
                <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
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
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;