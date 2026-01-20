import React, { useState } from 'react';
import { ArrowLeft, Edit2, Save, X, Users } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function InspectionCompanyDetailPage({ companyId, onNavigateBack }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    companyName: 'Elite Inspections Inc.',
    email: 'contact@eliteinspections.com',
    phone: '+1 (555) 123-9999',
    address: '100 Corporate Drive, New York, NY 10001',
  });

  const enquiryDetails = [
    { 
      id: 1,
      enquiryId: 'ENQ001',
      customer: 'John Smith', 
      commodity: 'Residential',
      requirements: 'Full structural inspection with detailed report',
      date: '2026-01-10',
      status: 'Completed',
      assignedInspectors: ['Michael Chen', 'Sarah Williams']
    },
    { 
      id: 2,
      enquiryId: 'ENQ002',
      customer: 'Sarah Johnson', 
      commodity: 'Commercial',
      requirements: 'Quality check for building materials',
      date: '2026-01-12',
      status: 'Active',
      assignedInspectors: ['James Anderson']
    },
    { 
      id: 3,
      enquiryId: 'ENQ003',
      customer: 'Michael Brown', 
      commodity: 'Industrial',
      requirements: 'Safety compliance verification',
      date: '2026-01-13',
      status: 'Pending',
      assignedInspectors: ['Emily Thompson', 'Davis Martinez']
    },
  ];

  const completionTrendData = [
    { month: 'Jul', rate: 70 },
    { month: 'Aug', rate: 75 },
    { month: 'Sep', rate: 72 },
    { month: 'Oct', rate: 82 },
    { month: 'Nov', rate: 87 },
    { month: 'Dec', rate: 85 },
    { month: 'Jan', rate: 91 },
  ];

  const paymentAnalysisData = [
    { month: 'Jul', amount: 85000 },
    { month: 'Aug', amount: 92000 },
    { month: 'Sep', amount: 88000 },
    { month: 'Oct', amount: 105000 },
    { month: 'Nov', amount: 118000 },
    { month: 'Dec', amount: 112000 },
    { month: 'Jan', amount: 128000 },
  ];

  const paymentSuccessData = [
    { month: 'Jul', rate: 86 },
    { month: 'Aug', rate: 89 },
    { month: 'Sep', rate: 84 },
    { month: 'Oct', rate: 91 },
    { month: 'Nov', rate: 94 },
    { month: 'Dec', rate: 92 },
    { month: 'Jan', rate: 96 },
  ];

  const handleSave = () => {
    setIsEditing(false);
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
            <h1 className="text-2xl font-semibold text-gray-900">Company Details</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
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
                  {key.replace(/([A-Z])/g, ' $1').trim()}
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
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Managed Enquiries</h2>
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
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        enquiry.status === 'Completed'
                          ? 'bg-emerald-100 text-emerald-700'
                          : enquiry.status === 'Active'
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {enquiry.status}
                    </span>
                  </div>
                </div>
                {/* Assigned Inspectors Section */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Assigned Inspectors</p>
                      <div className="flex flex-wrap gap-2">
                        {enquiry.assignedInspectors.map((inspector, idx) => (
                          <span
                            key={idx}
                            className="inline-flex px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-sm"
                          >
                            {inspector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Company Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Enquiries</span>
                <span className="text-xl font-semibold text-gray-900">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Completed Inspections</span>
                <span className="text-xl font-semibold text-emerald-600">128</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending Inspections</span>
                <span className="text-xl font-semibold text-amber-600">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Company Completion Rate</span>
                <span className="text-xl font-semibold text-indigo-600">82%</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Completion Progress</span>
                  <span className="text-gray-900 font-medium">82%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Revenue</span>
                <span className="text-xl font-semibold text-gray-900">$728,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending Payments</span>
                <span className="text-xl font-semibold text-amber-600">$42,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Payment</span>
                <span className="text-xl font-semibold text-indigo-600">$5,692</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Payment Success Rate</span>
                <span className="text-xl font-semibold text-emerald-600">94%</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Payment Success</span>
                  <span className="text-gray-900 font-medium">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="space-y-6">
          {/* Company Completion Trend */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company Completion Trend</h3>
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