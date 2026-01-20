import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function EnquiriesTable({
  enquiries,
  showLoadMore = false,
  onEnquiryClick,
  showFilter = false,
  scrollable = false,
  onLoadMore
}) {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-100 text-emerald-700';
      case 'Pending':
        return 'bg-amber-100 text-amber-700';
      case 'Active':
        return 'bg-indigo-100 text-indigo-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesStatus = statusFilter === 'all' || enquiry.status === statusFilter;
    const lowerSearchTerm = searchTerm.toLowerCase();
    const matchesSearch =
      enquiry.customer.toLowerCase().includes(lowerSearchTerm) ||
      enquiry.recentEnquiry.toLowerCase().includes(lowerSearchTerm);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header with optional filter controls */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">All Enquiries</h3>
          {showFilter && (
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>
              {/* Status filter dropdown */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              >
                <option value="all">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Active">Active</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Table with optional scrolling */}
      <div className={scrollable ? "overflow-x-auto max-h-[400px] overflow-y-auto" : "overflow-x-auto"}>
        <table className="w-full">
          <thead className={`bg-gray-50 ${scrollable ? 'sticky top-0' : ''}`}>
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Enquiry ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Recent Enquiry</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredEnquiries.map((enquiry) => (
              <tr
                key={enquiry.id}
                className={`hover:bg-gray-50 transition-colors ${onEnquiryClick ? 'cursor-pointer' : ''}`}
                onClick={() => onEnquiryClick?.(enquiry)}
              >
                <td className="px-6 py-4 text-sm text-gray-600">{enquiry.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{enquiry.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{enquiry.recentEnquiry}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(enquiry.status)}`}>
                    {enquiry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Load More button */}
      {showLoadMore && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onLoadMore}
            className="w-full px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}