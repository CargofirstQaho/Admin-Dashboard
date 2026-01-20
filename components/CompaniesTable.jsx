import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function CompaniesTable({ companies, onCompanyClick, showFilter = false }) {
  const [nameFilter, setNameFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredCompanies = companies.filter(company => {
    const matchesName = company.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesLocation = company.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesName && matchesLocation;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">All Companies</h3>
          {showFilter && (
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
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
      
      <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Company ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Location</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Inspectors Assigned</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date Registered</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Enquiries</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredCompanies.map((company) => (
              <tr
                key={company.id}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onCompanyClick?.(company.id)}
              >
                <td className="px-6 py-4 text-sm text-gray-600">{company.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{company.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{company.location}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{company.inspectorsAssigned}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{company.dateRegistered}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{company.totalEnquiries}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}