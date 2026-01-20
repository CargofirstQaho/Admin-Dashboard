import React, { useState } from 'react';

export default function InspectorsTable({ inspectors, onInspectorClick, showFilter = false }) {
  const [nameFilter, setNameFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredInspectors = inspectors.filter((inspector) => {
    const matchesName = inspector.name && inspector.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesLocation = inspector.location && inspector.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesName && matchesLocation;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header with filters */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">All Inspectors</h3>
          {showFilter && (
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Filter by Name */}
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx={11} cy={11} r={8} stroke="currentColor" strokeWidth={2} fill="none" />
                  <line x1={21} y1={21} x2={16.65} y2={16.65} stroke="currentColor" strokeWidth={2} />
                </svg>
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>
              {/* Filter by Location */}
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx={11} cy={11} r={8} stroke="currentColor" strokeWidth={2} fill="none" />
                  <line x1={21} y1={21} x2={16.65} y2={16.65} stroke="currentColor" strokeWidth={2} />
                </svg>
                <input
                  type="text"
                  placeholder="Search by location..."
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table container */}
      <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Location</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Enquiries</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date Joined</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rating</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {filteredInspectors.map((inspector) => (
              <tr
                key={inspector.id}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onInspectorClick?.(inspector.id)}
              >
                <td className="px-6 py-4 text-sm text-gray-600">{inspector.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{inspector.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{inspector.location}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{inspector.assignedEnquiries}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{inspector.dateJoined}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.212c.969 0 1.371 1.24.588 1.81l-3.413 2.477a1 1 0 00-.364 1.118l1.286 3.964c.3.921-.755 1.688-1.54 1.118l-3.413-2.477a1 1 0 00-1.175 0l-3.413 2.477c-.784.57-1.839-.197-1.54-1.118l1.286-3.964a1 1 0 00-.364-1.118L2.17 9.392c-.783-.57-.38-1.81.588-1.81h4.212a1 1 0 00.95-.69l1.286-3.964z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">{inspector.rating.toFixed(1)}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}