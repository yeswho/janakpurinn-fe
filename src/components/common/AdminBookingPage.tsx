import { useState } from 'react';
import { useAdminBookings, useUpdateBookingStatus } from '../../hooks/useAdminBooking';
import { format } from 'date-fns';
import Pagination from './Pagination';

export default function AdminBookingsPage() {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [statusFilter, setStatusFilter] = useState<string | undefined>();
    const [expandedBooking, setExpandedBooking] = useState<string | null>(null);

    const { data, isLoading, error } = useAdminBookings(page, limit, statusFilter);
    const updateStatus = useUpdateBookingStatus();

    const handleStatusChange = async (bookingId: string, newStatus: string) => {
        try {
            await updateStatus.mutateAsync({ id: bookingId, status: newStatus });
        } catch (err) {
            console.error("Failed to update status:", err);
        }
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
                                    <tr key={booking.id} className="hover:bg-primary-100/50 transition">
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
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap space-x-1 sm:space-x-2">
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
                            className="hotel-card p-4 rounded-lg shadow-sm"
                            onClick={() => setExpandedBooking(expandedBooking === booking.id ? null : booking.id)}
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

                            {expandedBooking === booking.id && (
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

                                    <div className="flex flex-wrap gap-2 pt-2">
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
                            )}
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
        </div>
    );
}