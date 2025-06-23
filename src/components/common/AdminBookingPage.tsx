import { format } from 'date-fns';
import { useState } from 'react';
import { useAdminBookings, useUpdateBookingStatus } from '../../hooks/useAdminBooking';
import Pagination from './Pagination';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    Button
} from "@nextui-org/react";

export default function AdminBookingsPage() {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [statusFilter, setStatusFilter] = useState<string | undefined>();

    const { data, isLoading, error } = useAdminBookings(page, limit, statusFilter);
    const updateStatus = useUpdateBookingStatus();

    const handleStatusChange = async (bookingId: string, newStatus: string) => {
        try {
            await updateStatus.mutateAsync({ id: bookingId, status: newStatus });
        } catch (err) {
            console.error("Failed to update status:", err);
        }
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedBooking, setSelectedBooking] = useState<any>(null);

    const handleBookingClick = (booking: any) => {
        setSelectedBooking(booking);
        onOpen();
    };

    const getStatusActions = (currentStatus: string) => {
        switch (currentStatus) {
            case 'pending':
                return ['confirmed', 'cancelled'];
            case 'confirmed':
                return ['completed', 'cancelled'];
            case 'completed':
                return [];
            case 'cancelled':
                return ['pending', 'confirmed'];
            default:
                return [];
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-amber-100 text-amber-800 border-amber-200';
            case 'confirmed':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'completed':
                return 'bg-emerald-100 text-emerald-800 border-emerald-200';
            case 'cancelled':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    if (isLoading) return <div className="text-center py-8 sm:py-12 text-base sm:text-lg font-medium">Loading bookings...</div>;
    if (error) return <div className="text-center py-8 sm:py-12 text-base sm:text-lg text-red-500">Error: {error.message}</div>;

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Bookings</h1>
                <select
                    value={statusFilter || ''}
                    onChange={(e) => {
                        setStatusFilter(e.target.value || undefined);
                        setPage(1);
                    }}
                    className="border border-gray-200/50 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 shadow-sm focus:ring-2 focus:ring-accent-400 text-sm sm:text-base w-full sm:w-auto"
                >
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {/* Desktop Table */}
            <div className="hidden sm:block hotel-card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200/50">
                        <thead className="bg-primary-100">
                            <tr>
                                <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-text-secondary">Booking #</th>
                                <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-text-secondary">Guest</th>
                                <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-text-secondary">Dates</th>
                                <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-text-secondary">Status</th>
                                <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-text-secondary">Rooms</th>
                                <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-text-secondary">Total</th>
                                <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-text-secondary">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200/50">
                            {data?.data.map((booking) => {
                                const availableActions = getStatusActions(booking.status);
                                return (
                                    <tr
                                        key={booking.id}
                                        className="hover:bg-primary-100/50 transition cursor-pointer"
                                        onClick={() => handleBookingClick(booking)}
                                    >
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap font-semibold text-accent-500 text-sm sm:text-base">
                                            #{booking.booking_reference}
                                        </td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap text-sm sm:text-base">
                                            {booking.first_name} {booking.last_name}
                                        </td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap text-text-secondary text-xs sm:text-sm">
                                            {format(new Date(booking.check_in), 'MMM d, yyyy')} - {format(new Date(booking.check_out), 'MMM d, yyyy')}
                                        </td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                                                    booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                        'bg-red-100 text-red-800'
                                                }`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap text-text-secondary text-xs sm:text-sm">
                                            {booking.rooms.map(r => `${r.title} (${r.quantity})`).join(', ')}
                                        </td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap font-medium text-sm sm:text-base">
                                            Nrs. {booking.total_amount.toFixed(2)}
                                        </td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap space-x-1 sm:space-x-2" onClick={(e) => e.stopPropagation()}>
                                            {availableActions.map((action) => (
                                                <button
                                                    key={action}
                                                    onClick={() => handleStatusChange(booking.id, action)}
                                                    className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg hover:opacity-80 transition ${action === 'confirmed' ? 'bg-blue-100 text-blue-700' :
                                                        action === 'completed' ? 'bg-green-100 text-green-700' :
                                                            action === 'cancelled' ? 'bg-red-100 text-red-700' :
                                                                'bg-yellow-100 text-yellow-700'
                                                        }`}
                                                    disabled={updateStatus.isPending}
                                                >
                                                    {action === 'pending' ? 'Revert' : action.charAt(0).toUpperCase() + action.slice(1)}
                                                </button>
                                            ))}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {data?.pagination && (
                    <div className="px-4 md:px-6 py-3 border-t border-gray-200/50 bg-gray-100/30">
                        <Pagination
                            currentPage={data.pagination.page}
                            totalPages={data.pagination.totalPages}
                            onPageChange={setPage}
                        />
                    </div>
                )}
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-4">
                {data?.data.map((booking) => {
                    const availableActions = getStatusActions(booking.status);
                    return (
                        <div
                            key={booking.id}
                            className="hotel-card p-4 rounded-lg shadow-sm cursor-pointer"
                            onClick={() => handleBookingClick(booking)}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold text-accent-500">#{booking.booking_reference}</h3>
                                    <p className="text-sm font-medium">{booking.first_name} {booking.last_name}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                    booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                                        booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                                            'bg-red-100 text-red-800'
                                    }`}>
                                    {booking.status}
                                </span>
                            </div>

                            <div className="mt-3 space-y-2">
                                <div className="text-sm">
                                    <span className="font-medium">Dates: </span>
                                    {format(new Date(booking.check_in), 'MMM d, yyyy')} - {format(new Date(booking.check_out), 'MMM d, yyyy')}
                                </div>
                                <div className="text-sm">
                                    <span className="font-medium">Rooms: </span>
                                    {booking.rooms.map(r => `${r.title} (${r.quantity})`).join(', ')}
                                </div>
                                <div className="text-sm font-medium">
                                    Total: Nrs. {booking.total_amount.toFixed(2)}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2" onClick={(e) => e.stopPropagation()}>
                                    {availableActions.map((action) => (
                                        <button
                                            key={action}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleStatusChange(booking.id, action);
                                            }}
                                            className={`text-xs px-3 py-1 rounded-lg ${action === 'confirmed' ? 'bg-blue-100 text-blue-700' :
                                                action === 'completed' ? 'bg-green-100 text-green-700' :
                                                    action === 'cancelled' ? 'bg-red-100 text-red-700' :
                                                        'bg-yellow-100 text-yellow-700'
                                                }`}
                                            disabled={updateStatus.isPending}
                                        >
                                            {action === 'pending' ? 'Revert' : action.charAt(0).toUpperCase() + action.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}

                {data?.pagination && (
                    <div className="mt-4">
                        <Pagination
                            currentPage={data.pagination.page}
                            totalPages={data.pagination.totalPages}
                            onPageChange={setPage}
                        />
                    </div>
                )}
            </div>

            {/* Booking Details Modal - Enhanced Styling */}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
                scrollBehavior="inside"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900/50 to-zinc-900/20 backdrop-blur-sm",
                    base: "border-[1px] border-gray-200/20 bg-white/95 backdrop-blur-md shadow-2xl",
                    header: "border-b-[1px] border-gray-200/50 bg-gradient-to-r from-gray-50/80 to-white/80",
                    body: "py-6",
                    footer: "border-t-[1px] border-gray-200/50 bg-gradient-to-r from-gray-50/80 to-white/80"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-800">
                                            Booking #{selectedBooking?.booking_reference}
                                        </h2>
                                        <p className="text-sm text-gray-500 font-normal">
                                            {selectedBooking && format(new Date(selectedBooking.created_at), 'MMM d, yyyy \'at\' h:mm a')}
                                        </p>
                                    </div>
                                </div>
                            </ModalHeader>

                            <ModalBody className="px-6">
                                {selectedBooking && (
                                    <div className="space-y-6">
                                        {/* Status Banner */}
                                        <div className={`p-4 rounded-xl border-2 ${getStatusColor(selectedBooking.status)}`}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 rounded-full bg-current opacity-60"></div>
                                                    <span className="font-semibold text-sm uppercase tracking-wide">
                                                        {selectedBooking.status}
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-2xl font-bold">
                                                        Nrs. {selectedBooking.total_amount.toFixed(2)}
                                                    </p>
                                                    <p className="text-xs opacity-75">Total Amount</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Guest & Booking Info Grid */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            {/* Guest Information */}
                                            <div className="bg-gradient-to-br rounded-xl p-5 border border-blue-100/50">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <h3 className="font-bold text-gray-800">Guest Information</h3>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-gray-600 w-16">Name:</span>
                                                        <span className="text-sm font-semibold text-gray-800">{selectedBooking.first_name} {selectedBooking.last_name}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-gray-600 w-16">Email:</span>
                                                        <span className="text-sm text-blue-600 font-medium">{selectedBooking.email}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-gray-600 w-16">Phone:</span>
                                                        <span className="text-sm font-semibold text-gray-800">{selectedBooking.phone}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Booking Details */}
                                            <div className="bg-gradient-to-br rounded-xl p-5 border border-emerald-100/50">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <h3 className="font-bold text-gray-800">Booking Details</h3>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-gray-600 w-20">Check-in:</span>
                                                        <span className="text-sm font-semibold text-gray-800">{format(new Date(selectedBooking.check_in), 'MMM d, yyyy')}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-gray-600 w-20">Check-out:</span>
                                                        <span className="text-sm font-semibold text-gray-800">{format(new Date(selectedBooking.check_out), 'MMM d, yyyy')}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-gray-600 w-20">Payment:</span>
                                                        <span className="text-sm font-semibold text-gray-800">{selectedBooking.payment_method}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Rooms Section */}
                                        <div className="bg-gradient-to-br rounded-xl p-5 border border-purple-100/50">
                                            <div className="flex items-center gap-2 mb-4">
                                                <h3 className="font-bold text-gray-800">Room Details</h3>
                                            </div>
                                            <div className="grid gap-3">
                                                {selectedBooking.rooms.map((room: any) => (
                                                    <div key={room.id} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/50">
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <h4 className="font-semibold text-gray-800">{room.title}</h4>
                                                                <p className="text-sm text-gray-600">Category: {room.category}</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                                                    x{room.quantity}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Special Requests */}
                                        <div className="bg-gradient-to-br rounded-xl p-5 border border-amber-100/50">
                                            <div className="flex items-center gap-2 mb-3">
                                                <h3 className="font-bold text-gray-800">Special Requests</h3>
                                            </div>
                                            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/50">
                                                <p className="text-sm text-gray-700 italic">
                                                    {selectedBooking.special_requests || 'No special requests made'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </ModalBody>

                            <ModalFooter className="flex justify-between">
                                <div className="text-xs text-gray-500">
                                    Last updated: {selectedBooking && format(new Date(selectedBooking.updated_at || selectedBooking.created_at), 'MMM d, yyyy h:mm a')}
                                </div>
                                <Button
                                    onPress={onClose}
                                    className="bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium px-6 py-2 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200"
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}