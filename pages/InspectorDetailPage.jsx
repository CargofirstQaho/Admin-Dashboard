import React, { useState } from 'react';
import { ArrowLeft, Edit2, Save, X, ThumbsUp, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function InspectorDetailPage({
  inspectorId,
  onNavigateBack
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+1 (555) 987-6543',
    address: '789 Inspector Lane, New York, NY 10002',
  });

  const [enquiryStatuses, setEnquiryStatuses] = useState({
    1: 'pending',
    2: 'bid',
    3: 'accepted',
  });

  const enquiryDetails = [
    { 
      id: 1,
      enquiryId: 'ENQ001',
      customer: 'John Smith', 
      commodity: 'Residential',
      requirements: 'Full structural inspection with detailed report',
      date: '2026-01-10',
      status: 'Active'
    },
    { 
      id: 2,
      enquiryId: 'ENQ002',
      customer: 'Sarah Johnson', 
      commodity: 'Commercial',
      requirements: 'Quality check for building materials',
      date: '2026-01-12',
      status: 'Pending'
    },
    { 
      id: 3,
      enquiryId: 'ENQ003',
      customer: 'Michael Brown', 
      commodity: 'Industrial',
      requirements: 'Safety compliance verification',
      date: '2026-01-13',
      status: 'Completed'
    },
  ];

  const acceptanceTrendData = [
    { month: 'Jul', rate: 72 },
    { month: 'Aug', rate: 78 },
    { month: 'Sep', rate: 75 },
    { month: 'Oct', rate: 82 },
    { month: 'Nov', rate: 88 },
    { month: 'Dec', rate: 85 },
    { month: 'Jan', rate: 90 },
  ];

  const completionTrendData = [
    { month: 'Jul', rate: 68 },
    { month: 'Aug', rate: 74 },
    { month: 'Sep', rate: 71 },
    { month: 'Oct', rate: 80 },
    { month: 'Nov', rate: 86 },
    { month: 'Dec', rate: 83 },
    { month: 'Jan', rate: 89 },
  ];

  const paymentSuccessData = [
    { month: 'Jul', rate: 88 },
    { month: 'Aug', rate: 91 },
    { month: 'Sep', rate: 87 },
    { month: 'Oct', rate: 93 },
    { month: 'Nov', rate: 96 },
    { month: 'Dec', rate: 94 },
    { month: 'Jan', rate: 97 },
  ];

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleBidAccept = (enquiryId, action) => {
    setEnquiryStatuses(prev => ({
      ...prev,
      [enquiryId]: action
    }));
  };

  const getActionButton = (enquiryId) => {
    const status = enquiryStatuses[enquiryId] || 'pending';

    if (status === 'accepted') {
      return (
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg">
          <CheckCircle className="w-4 h-4" />
          Accepted
        </span>
      );
    }

    if (status === 'bid') {
      return (
        <button
          onClick={() => handleBidAccept(enquiryId, 'accepted')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <CheckCircle className="w-4 h-4" />
          Accept
        </button>
      );
    }

    return (
      <button
        onClick={() => handleBidAccept(enquiryId, 'bid')}
        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
      >
        <ThumbsUp className="w-4 h-4" />
        Place Bid
      </button>
    );
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
            <h1 className="text-2xl font-semibold text-gray-900">Inspector Details</h1>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
     
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(profileData).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                  {key}
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setProfileData({ ...profileData, [key]: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                ) : (
                  <p className="text-gray-900">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Assigned Enquiries</h2>
          <div className="space-y-6">
            {enquiryDetails.map((enquiry) => (
              <div key={enquiry.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Enquiry ID</p>
                    <p className="font-medium text-gray-900">{enquiry.enquiryId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Customer</p>
                    <p className="font-medium text-gray-900">{enquiry.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Commodity</p>
                    <p className="font-medium text-gray-900">{enquiry.commodity}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600">Requirements</p>
                    <p className="font-medium text-gray-900">{enquiry.requirements}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium text-gray-900">{enquiry.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      enquiry.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                      enquiry.status === 'Active' ? 'bg-indigo-100 text-indigo-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {enquiry.status}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">{getActionButton(enquiry.id)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Inspection Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Assigned Enquiries</span>
                <span className="text-xl font-semibold text-gray-900">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Completed Inspections</span>
                <span className="text-xl font-semibold text-emerald-600">22</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending Inspections</span>
                <span className="text-xl font-semibold text-amber-600">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Acceptance Rate</span>
                <span className="text-xl font-semibold text-indigo-600">89%</span>
              </div>
            </div>
          </div
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Earned</span>
                <span className="text-xl font-semibold text-gray-900">$145,800</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending Payments</span>
                <span className="text-xl font-semibold text-amber-600">$12,200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Payment</span>
                <span className="text-xl font-semibold text-indigo-600">$6,627</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Payment Success Rate</span>
                <span className="text-xl font-semibold text-emerald-600">95%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
         
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Acceptance Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={acceptanceTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#6366f1"
                  strokeWidth={2}
                  name="Acceptance Rate (%)"
                  dot={{ fill: '#6366f1', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Inspection Completion Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={completionTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Completion Rate (%)"
                  dot={{ fill: '#10b981', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Success Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={paymentSuccessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name="Success Rate (%)"
                  dot={{ fill: '#f59e0b', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
