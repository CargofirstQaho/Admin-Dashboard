import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function EnquiryDetailPage({ enquiry, onNavigateBack }) {
  // Extended enquiry details
  const fullDetails = {
    ...enquiry,
    category: 'Property Inspection',
    medium: 'Email',
    address: '456 Oak Avenue, New York, NY 10001',
    budget: '$5,000',
    commodity: 'Residential',
    requirements:
      'Full structural inspection with detailed report including foundation, roof, electrical, and plumbing systems.',
    inspectorAssigned: 'Michael Chen',
    startDate: enquiry.date,
    completionDate: '2026-01-20',
    priority: 'High',
    notes: 'Customer prefers morning appointments. Property is vacant and accessible anytime.',
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Enquiry Details</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Enquiry ID</p>
              <p className="font-medium text-gray-900">{fullDetails.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Customer</p>
              <p className="font-medium text-gray-900">{fullDetails.customer}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <span
                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(fullDetails.status)}`}
              >
                {fullDetails.status}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Category</p>
              <p className="font-medium text-gray-900">{fullDetails.category}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Medium</p>
              <p className="font-medium text-gray-900">{fullDetails.medium}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Budget</p>
              <p className="font-medium text-gray-900">{fullDetails.budget}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Commodity</p>
              <p className="font-medium text-gray-900">{fullDetails.commodity}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Inspector Assigned</p>
              <p className="font-medium text-gray-900">{fullDetails.inspectorAssigned}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Priority</p>
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700">
                {fullDetails.priority}
              </span>
            </div>
          </div>
        </div>

        {/* Location & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
            <div>
              <p className="text-sm text-gray-600 mb-1">Address</p>
              <p className="font-medium text-gray-900">{fullDetails.address}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Start Date</p>
                <p className="font-medium text-gray-900">{fullDetails.startDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Expected Completion</p>
                <p className="font-medium text-gray-900">{fullDetails.completionDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements & Notes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
          <p className="text-gray-700 leading-relaxed">{fullDetails.requirements}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Notes</h3>
          <p className="text-gray-700 leading-relaxed">{fullDetails.notes}</p>
        </div>
      </main>
    </div>
  );
}