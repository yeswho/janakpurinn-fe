import { useState } from 'react';
import { useAdminBookings, useUpdateBookingStatus } from '../../hooks/useAdminBooking';
import { format } from 'date-fns';
import Pagination from './Pagination';

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

  if (isLoading) return <div className="text-center py-12 text-lg font-medium">Loading bookings...</div>;
  if (error) return <div className="text-center py-12 text-lg text-red-500">Error: {error.message}</div>;

  return (
    <div className="w-full px-8 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Bookings</h1>
        <select
          value={statusFilter || ''}
          onChange={(e) => {
            setStatusFilter(e.target.value || undefined);
            setPage(1);
          }}
          className="border border-gray-200/50 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-accent-400"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="hotel-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200/50">
            <thead className="bg-primary-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary">Booking #</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary">Guest</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary">Dates</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary">Rooms</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
              {data?.data.map((booking) => {
                const availableActions = getStatusActions(booking.status);
                return (
                  <tr key={booking.id} className="hover:bg-primary-100/50 transition">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-accent-500">
                      #{booking.booking_reference}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.first_name} {booking.last_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
                      {format(new Date(booking.check_in), 'MMM d, yyyy')} - {format(new Date(booking.check_out), 'MMM d, yyyy')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                        booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
                      {booking.rooms.map(r => `${r.title} (${r.quantity})`).join(', ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      Nrs. {booking.total_amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap space-x-2">
                      {availableActions.includes('confirmed') && (
                        <button
                          onClick={() => handleStatusChange(booking.id, 'confirmed')}
                          className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                          disabled={updateStatus.isPending}
                        >
                          Confirm
                        </button>
                      )}
                      {availableActions.includes('completed') && (
                        <button
                          onClick={() => handleStatusChange(booking.id, 'completed')}
                          className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
                          disabled={updateStatus.isPending}
                        >
                          Complete
                        </button>
                      )}
                      {availableActions.includes('cancelled') && (
                        <button
                          onClick={() => handleStatusChange(booking.id, 'cancelled')}
                          className="text-sm px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                          disabled={updateStatus.isPending}
                        >
                          Cancel
                        </button>
                      )}
                      {availableActions.includes('pending') && (
                        <button
                          onClick={() => handleStatusChange(booking.id, 'pending')}
                          className="text-sm px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition"
                          disabled={updateStatus.isPending}
                        >
                          Revert
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {data?.pagination && (
          <div className="px-6 py-4 border-t border-gray-200/50 bg-gray-100/30">
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