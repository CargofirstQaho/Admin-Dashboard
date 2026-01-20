import React, { useState } from 'react';
import { ArrowLeft, Edit2, Save, X } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CustomerDetailPage({ customerId, onNavigateBack }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
  });

  const enquiryDetails = [
    { 
      id: 1,
      category: 'Property Inspection', 
      medium: 'Email', 
      address: '456 Oak Avenue, NY', 
      budget: '$5,000', 
      status: 'Completed',
      commodity: 'Residential',
      requirements: 'Full structural inspection with detailed report',
      date: '2026-01-10'
    },
    { 
      id: 2,
      category: 'Quality Assessment', 
      medium: 'Phone', 
      address: '789 Pine Street, NY', 
      budget: '$3,500', 
      status: 'Active',
      commodity: 'Commercial',
      requirements: 'Quality check for building materials',
      date: '2026-01-12'
    },
    { 
      id: 3,
      category: 'Safety Check', 
      medium: 'Website', 
      address: '321 Elm Road, NY', 
      budget: '$2,500', 
      status: 'Pending',
      commodity: 'Industrial',
      requirements: 'Safety compliance verification',
      date: '2026-01-13'
    },
  ];

  const completionTrendData = [
    { month: 'Jul', rate: 65 },
    { month: 'Aug', rate: 72 },
    { month: 'Sep', rate: 68 },
    { month: 'Oct', rate: 85 },
    { month: 'Nov', rate: 90 },
    { month: 'Dec', rate: 88 },
    { month: 'Jan', rate: 92 },
  ];

  const paymentAnalysisData = [
    { month: 'Jul', amount: 12000 },
    { month: 'Aug', amount: 15000 },
    { month: 'Sep', amount: 13500 },
    { month: 'Oct', amount: 18000 },
    { month: 'Nov', amount: 20000 },
    { month: 'Dec', amount: 17500 },
    { month: 'Jan', amount: 22000 },
  ];

  const paymentSuccessData = [
    { month: 'Jul', rate: 85 },
    { month: 'Aug', rate: 88 },
    { month: 'Sep', rate: 82 },
    { month: 'Oct', rate: 90 },
    { month: 'Nov', rate: 95 },
    { month: 'Dec', rate: 93 },
    { month: 'Jan', rate: 96 },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, save to backend
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
            <h1 className="text-2xl font-semibold text-gray-900">Customer Details</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Profile Section */}
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

        {/* Enquiry Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Enquiry Details</h2>
          <div className="space-y-6">
            {enquiryDetails.map((enquiry) => (
              <div key={enquiry.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-medium text-gray-900">{enquiry.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Medium</p>
                    <p className="font-medium text-gray-900">{enquiry.medium}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-medium text-gray-900">{enquiry.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Budget</p>
                    <p className="font-medium text-gray-900">{enquiry.budget}</p>
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
                  <div>
                    <p className="text-sm text-gray-600">Commodity</p>
                    <p className="font-medium text-gray-900">{enquiry.commodity}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600">Requirements</p>
                    <p className="font-medium text-gray-900">{enquiry.requirements}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date of Enquiry</p>
                    <p className="font-medium text-gray-900">{enquiry.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inspection Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Inspection Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Enquiries</span>
                <span className="text-xl font-semibold text-gray-900">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Completed Inspections</span>
                <span className="text-xl font-semibold text-emerald-600">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending Inspections</span>
                <span className="text-xl font-semibold text-amber-600">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Completion Rate</span>
                <span className="text-xl font-semibold text-indigo-600">75%</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Completion Progress</span>
                  <span className="text-gray-900 font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Paid</span>
                <span className="text-xl font-semibold text-gray-900">$118,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending Payments</span>
                <span className="text-xl font-semibold text-amber-600">$8,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Payment</span>
                <span className="text-xl font-semibold text-indigo-600">$6,583</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Payment Success Rate</span>
                <span className="text-xl font-semibold text-emerald-600">93%</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Payment Success</span>
                  <span className="text-gray-900 font-medium">93%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="space-y-6">
          {/* Completion Rate Trend */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Completion Rate Trend</h3>
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
                  stroke="#6366f1" 
                  strokeWidth={2}
                  name="Completion Rate (%)"
                  dot={{ fill: '#6366f1', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Payment Analysis */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={paymentAnalysisData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Bar 
                  dataKey="amount" 
                  fill="#10b981" 
                  name="Payment Amount ($)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Payment Success Trend */}
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
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Success Rate (%)"
                  dot={{ fill: '#10b981', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}