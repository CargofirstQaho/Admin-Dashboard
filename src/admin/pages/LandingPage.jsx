import React, { useState } from 'react';
import { Menu, Users, ClipboardList, Building2 } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import StatsCard from '../components/StatsCard';
import EnquiriesTable from '../components/EnquiriesTable';
import InspectionsTable from '../components/InspectionsTable';

export default function LandingPage({
  onNavigateToCustomers,
  onNavigateToInspectors,
  onNavigateToCompanies,
  onNavigateToAllEnquiries,
  onNavigateToEnquiryDetail,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = ['Customer', 'Inspector', 'Inspection Company'];

  const handleItemClick = (item) => {
    if (item === 'Customer') {
      onNavigateToCustomers();
    } else if (item === 'Inspector') {
      onNavigateToInspectors();
    } else if (item === 'Inspection Company') {
      onNavigateToCompanies();
    }
  };

  const enquiries = [
    { id: 'ENQ001', customer: 'John Smith', recentEnquiry: 'Property Inspection', status: 'Completed', date: '2026-01-10' },
    { id: 'ENQ002', customer: 'Sarah Johnson', recentEnquiry: 'Quality Assessment', status: 'Active', date: '2026-01-12' },
    { id: 'ENQ003', customer: 'Michael Brown', recentEnquiry: 'Safety Check', status: 'Pending', date: '2026-01-13' },
    { id: 'ENQ004', customer: 'Emily Davis', recentEnquiry: 'Compliance Audit', status: 'Completed', date: '2026-01-08' },
    { id: 'ENQ005', customer: 'David Wilson', recentEnquiry: 'Building Inspection', status: 'Active', date: '2026-01-14' },
    { id: 'ENQ006', customer: 'Lisa Anderson', recentEnquiry: 'Equipment Check', status: 'Pending', date: '2026-01-11' },
  ];

  const inspections = [
    { id: 'INS001', customer: 'John Smith', type: 'Property', date: '2026-01-10', status: 'Completed' },
    { id: 'INS002', customer: 'Sarah Johnson', type: 'Quality', date: '2026-01-12', status: 'In Progress' },
    { id: 'INS003', customer: 'Michael Brown', type: 'Safety', date: '2026-01-15', status: 'Scheduled' },
    { id: 'INS004', customer: 'Emily Davis', type: 'Compliance', date: '2026-01-08', status: 'Completed' },
    { id: 'INS005', customer: 'David Wilson', type: 'Building', date: '2026-01-14', status: 'In Progress' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        items={sidebarItems}
        onItemClick={handleItemClick}
      />

      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-30 p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:bg-indigo-50"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12"></div> {/* Spacer for hamburger */}
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            title="Total Customers" 
            value="1,234" 
            icon={Users}
            color="indigo"
            onClick={onNavigateToCustomers}
          />
          <StatsCard 
            title="Total Inspectors" 
            value="87" 
            icon={ClipboardList}
            color="emerald"
            onClick={onNavigateToInspectors}
          />
          <StatsCard 
            title="Total Inspection Companies" 
            value="45" 
            icon={Building2}
            color="violet"
            onClick={onNavigateToCompanies}
          />
        </div>

        {/* Enquiries and Inspections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Enquiries Table with Load More Button */}
          <div className="lg:col-span-2">
            <EnquiriesTable 
              enquiries={enquiries} 
              showLoadMore={true}
              onEnquiryClick={onNavigateToEnquiryDetail}
              onLoadMore={onNavigateToAllEnquiries}
            />
            {/* Load More Button */}
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                onClick={onNavigateToAllEnquiries}
              >
                Load More
              </button>
            </div>
          </div>
          
          {/* Inspections Table */}
          <div className="lg:col-span-1">
            <InspectionsTable inspections={inspections} />
          </div>
        </div>
      </main>
    </div>
  );
}