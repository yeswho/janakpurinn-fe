import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Utensils, CheckCircle } from 'lucide-react';

interface RestaurantReservationProps {
  isOpen: boolean;
  onClose: () => void;
}

const RestaurantReservation: React.FC<RestaurantReservationProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Reservation submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="hotel-card w-full max-w-md sm:max-w-lg bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-semibold text-text-primary">
                Restaurant Reservation
              </h2>
              <div className="w-16 h-1 bg-accent-400 mt-2"></div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-accent-500 transition-colors p-1"
              disabled={isSubmitting}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-4 sm:py-6"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-accent-400/10 rounded-full mb-4"
              >
                <CheckCircle className="w-10 h-10 text-accent-500" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 text-text-primary">
                Reservation Confirmed!
              </h3>
              <p className="text-sm sm:text-base text-text-secondary mb-6">
                We've sent a confirmation to your email.
              </p>
              <button
                onClick={onClose}
                className="btn-primary px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
              >
                Close
              </button>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                      Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-text-secondary mb-1">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-200/50 rounded-lg text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-6 py-2 border border-gray-200/50 rounded-lg text-sm sm:text-base text-text-primary hover:bg-primary-100/50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-6 py-2 text-sm sm:text-base disabled:opacity-70 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Reserving...
                    </>
                  ) : (
                    <>
                      <Utensils className="w-4 h-4 mr-2" />
                      Confirm Reservation
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RestaurantReservation;