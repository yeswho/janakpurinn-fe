import { useState } from 'react';
import { useRooms } from '../../../hooks/useRooms';
import { motion } from 'framer-motion';
import { useCreateBooking } from '../../../hooks/useBooking';

export interface BookingPayload {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    specialRequests?: string;
    paymentMethod: 'cash' | 'credit_card' | 'debit_card' | 'upi';
    rooms: {
        id: string;
        quantity: number;
    }[];
    total: number;
}

const BookingPage = () => {
    const { data: roomData, isLoading, error } = useRooms();
    const { mutate: createBooking, isPending } = useCreateBooking();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        specialRequests: '',
        paymentMethod: 'cash' as 'cash' | 'credit_card' | 'debit_card' | 'upi',
    });

    const [selectedRooms, setSelectedRooms] = useState<{ id: string; quantity: number }[]>([]);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [bookingReference, setBookingReference] = useState('');

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRoomSelect = (roomId: string, quantity: number) => {
        setSelectedRooms(prev => {
            if (quantity === 0) {
                return prev.filter(item => item.id !== roomId);
            }

            const existing = prev.find(item => item.id === roomId);
            if (existing) {
                return prev.map(item =>
                    item.id === roomId ? { ...item, quantity } : item
                );
            }

            return [...prev, { id: roomId, quantity }];
        });
    };

    const filteredRooms = roomData?.filter(room => room.availableRooms > 0) || [];

    const calculateTotal = () => {
        return selectedRooms.reduce((total, item) => {
            const room = roomData?.find(r => r.id === item.id);
            return total + (room ? room.price * item.quantity : 0);
        }, 0);
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            checkIn: '',
            checkOut: '',
            specialRequests: '',
            paymentMethod: 'cash',
        });
        setSelectedRooms([]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const bookingData: BookingPayload = {
            ...formData,
            rooms: selectedRooms,
            total: calculateTotal()
        };

        createBooking(bookingData, {
            onSuccess: (data) => {
                setBookingReference(data.bookingReference);
                setSubmitSuccess(true);
                resetForm();
            },
            onError: (error) => {
                console.error('Booking failed:', error.message);
                // Consider using a toast notification here
            }
        });
    };

    if (isLoading) {
        return <LoadingView />;
    }

    if (error) {
        return <ErrorView error={error} />;
    }

    if (submitSuccess) {
        return <SuccessView bookingReference={bookingReference} />;
    }

    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-2xl md:text-3xl font-serif font-medium text-text-primary">
                    Book Your Stay
                </h1>
                <div className="w-24 h-1 bg-accent-400 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-2">
                    <div className="hotel-card p-6 mb-8">
                        <h2 className="text-xl font-serif font-semibold mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput
                                label="First Name *"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleFormChange}
                                required
                            />
                            <FormInput
                                label="Last Name *"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleFormChange}
                                required
                            />
                            <FormInput
                                label="Email *"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                            />
                            <FormInput
                                label="Phone *"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="hotel-card p-6 mb-8">
                        <h2 className="text-xl font-serif font-semibold mb-4">Booking Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput
                                label="Check-in *"
                                name="checkIn"
                                type="date"
                                value={formData.checkIn}
                                onChange={handleFormChange}
                                required
                                min={new Date().toISOString().split('T')[0]}
                            />
                            <FormInput
                                label="Check-out *"
                                name="checkOut"
                                type="date"
                                value={formData.checkOut}
                                onChange={handleFormChange}
                                required
                                min={formData.checkIn || new Date().toISOString().split('T')[0]}
                            />
                        </div>
                    </div>

                    <div className="hotel-card p-6">
                        <h2 className="text-xl font-serif font-semibold mb-4">Payment Information</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Payment Method *</label>
                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleFormChange}
                                required
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                            >
                                <option value="cash">Cash on Arrival</option>
                                <option value="credit_card">Credit Card</option>
                                <option value="debit_card">Debit Card</option>
                                <option value="upi">UPI</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Special Requests</label>
                            <textarea
                                name="specialRequests"
                                value={formData.specialRequests}
                                onChange={handleFormChange}
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="hotel-card p-6 sticky top-4">
                        <h2 className="text-xl font-serif font-semibold mb-4">Select Rooms</h2>
                        <a
                            href="/rooms"
                            className="inline-block mb-4 text-accent-500 hover:underline font-medium text-sm"
                        >
                            (View details)
                        </a>

                        {filteredRooms.length === 0 ? (
                            <p className="text-text-secondary">No rooms available</p>
                        ) : (
                            <div className="space-y-4">
                                {filteredRooms.map(room => (
                                    <div key={room.id} className="border-b border-gray-200 pb-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-medium">{room.title}</h3>
                                            <span className="text-accent-500">NPR {room.price}</span>
                                        </div>
                                        <p className="text-sm text-text-secondary mb-2">
                                            Available: {room.availableRooms}
                                        </p>
                                        <select
                                            value={selectedRooms.find(r => r.id === room.id)?.quantity || 0}
                                            onChange={(e) => handleRoomSelect(room.id, parseInt(e.target.value))}
                                            className="w-full px-3 py-1 border border-gray-200 rounded-lg"
                                        >
                                            {[...Array(room.availableRooms + 1).keys()].map(num => (
                                                <option key={num} value={num}>
                                                    {num === 0 ? 'Select' : `${num} ${num === 1 ? 'room' : 'rooms'}`}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedRooms.length > 0 && (
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <h3 className="font-serif font-semibold mb-2">Booking Summary</h3>
                                <div className="space-y-2 mb-4">
                                    {selectedRooms.map(item => {
                                        const room = roomData?.find(r => r.id === item.id);
                                        if (!room) return null;
                                        return (
                                            <div key={item.id} className="flex justify-between text-sm">
                                                <span>{item.quantity}x {room.title}</span>
                                                <span>NPR {room.price * item.quantity}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-between font-serif font-semibold">
                                    <span>Total:</span>
                                    <span className="text-accent-500">NPR {calculateTotal()}</span>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!formData.checkIn || !formData.checkOut || isPending}
                                    className="btn-primary w-full mt-4 py-3 disabled:opacity-50 flex items-center justify-center"
                                >
                                    {isPending && (
                                        <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                        </svg>
                                    )}
                                    {isPending ? 'Processing...' : 'Complete Booking'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Success View Component
const SuccessView = ({ bookingReference }: { bookingReference: string }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 p-4">
        <motion.div
            className="hotel-card text-center max-w-md w-full p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="text-accent-500 text-5xl mb-6">✓</div>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-text-primary">
                Booking Confirmed!
            </h2>
            <p className="mb-4 text-text-secondary">
                Thank you for your booking. We will be contacting you shortly.
            </p>
            {bookingReference && (
                <p className="mb-6 text-sm bg-primary-100 p-3 rounded-lg">
                    Your booking reference: <span className="font-mono font-medium">{bookingReference}</span>
                </p>
            )}
            <a
                href="/"
                className="btn-primary px-8 py-3 inline-block"
            >
                Return to Home
            </a>
        </motion.div>
    </div>
);

// Loading View Component
const LoadingView = () => (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
        <motion.div
            role="status"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hotel-card"
        >
            <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin fill-accent-500 mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <p className="mt-4 text-text-secondary font-medium">Loading...</p>
        </motion.div>
    </div>
);

// Error View Component
const ErrorView = ({ error }: { error: Error }) => (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 p-4">
        <motion.div
            className="hotel-card text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="text-red-500/80">
                <h2 className="text-2xl font-serif font-semibold mb-4 text-text-primary">Unable to Load Content</h2>
                <p className="mb-6 text-text-secondary">{error.message || 'Please try again later.'}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="btn-primary"
                >
                    Try Again
                </button>
            </div>
        </motion.div>
    </div>
);

// Reusable Form Input Component
const FormInput = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    required = false,
    min,
}: {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    min?: string;
}) => (
    <div>
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            min={min}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg"
        />
    </div>
);

export default BookingPage;