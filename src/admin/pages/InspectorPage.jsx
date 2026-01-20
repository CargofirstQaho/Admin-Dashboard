import React, { useState } from 'react';
import { Menu, ArrowLeft, DollarSign, CheckCircle2 } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import StatsCard from '../components/StatsCard';
import InspectorsTable from '../components/InspectorsTable';
import EnquiriesTable from '../components/EnquiriesTable';

export default function InspectorPage({
  onNavigateToDetail,
  onNavigateToEnquiryDetail,
  onNavigateBack,
  onSidebarItemClick,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = ['All Inspectors', 'All Enquiries', 'Chat', 'Payments', 'Reports'];

  const inspectors = [
    { id: 'INSP001', name: 'Michael Chen', location: 'New York', assignedEnquiries: 12, dateJoined: '2026-01-14', rating: 4.8 },
    { id: 'INSP002', name: 'Sarah Williams', location: 'Los Angeles', assignedEnquiries: 8, dateJoined: '2026-01-13', rating: 4.9 },
    { id: 'INSP003', name: 'James Anderson', location: 'Chicago', assignedEnquiries: 15, dateJoined: '2026-01-12', rating: 4.7 },
    { id: 'INSP004', name: 'Emily Thompson', location: 'Houston', assignedEnquiries: 6, dateJoined: '2026-01-11', rating: 4.6 },
    { id: 'INSP005', name: 'David Martinez', location: 'Phoenix', assignedEnquiries: 10, dateJoined: '2026-01-10', rating: 4.8 },
    { id: 'INSP006', name: 'Lisa Garcia', location: 'Philadelphia', assignedEnquiries: 11, dateJoined: '2026-01-09', rating: 4.9 },
    { id: 'INSP007', name: 'Robert Wilson', location: 'San Antonio', assignedEnquiries: 7, dateJoined: '2026-01-08', rating: 4.5 },
    { id: 'INSP008', name: 'Jennifer Lee', location: 'San Diego', assignedEnquiries: 14, dateJoined: '2026-01-07', rating: 4.8 },
    { id: 'INSP009', name: 'Christopher Brown', location: 'Dallas', assignedEnquiries: 9, dateJoined: '2026-01-06', rating: 4.7 },
    { id: 'INSP010', name: 'Jessica Taylor', location: 'San Jose', assignedEnquiries: 13, dateJoined: '2026-01-05', rating: 4.9 },
    { id: 'INSP011', name: 'Daniel Rodriguez', location: 'Austin', assignedEnquiries: 5, dateJoined: '2026-01-04', rating: 4.6 },
    { id: 'INSP012', name: 'Amanda Harris', location: 'Jacksonville', assignedEnquiries: 11, dateJoined: '2026-01-03', rating: 4.8 },
    { id: 'INSP013', name: 'Matthew Clark', location: 'Fort Worth', assignedEnquiries: 8, dateJoined: '2026-01-02', rating: 4.7 },
    { id: 'INSP014', name: 'Ashley Lewis', location: 'Columbus', assignedEnquiries: 10, dateJoined: '2026-01-01', rating: 4.9 },
    { id: 'INSP015', name: 'Joshua Walker', location: 'Charlotte', assignedEnquiries: 12, dateJoined: '2025-12-31', rating: 4.8 },
  ];

  const enquiries = [
    { id: 'ENQ001', customer: 'John Smith', recentEnquiry: 'Property Inspection', status: 'Completed', date: '2026-01-10' },
    { id: 'ENQ002', customer: 'Sarah Johnson', recentEnquiry: 'Quality Assessment', status: 'Active', date: '2026-01-12' },
    { id: 'ENQ003', customer: 'Michael Brown', recentEnquiry: 'Safety Check', status: 'Pending', date: '2026-01-13' },
    { id: 'ENQ004', customer: 'Emily Davis', recentEnquiry: 'Compliance Audit', status: 'Completed', date: '2026-01-08' },
    { id: 'ENQ005', customer: 'David Wilson', recentEnquiry: 'Building Inspection', status: 'Active', date: '2026-01-14' },
    { id: 'ENQ006', customer: 'Lisa Anderson', recentEnquiry: 'Equipment Check', status: 'Pending', date: '2026-01-11' },
    { id: 'ENQ007', customer: 'James Martinez', recentEnquiry: 'Fire Safety Audit', status: 'Completed', date: '2026-01-09' },
    { id: 'ENQ008', customer: 'Mary Garcia', recentEnquiry: 'Electrical Inspection', status: 'Active', date: '2026-01-13' },
    { id: 'ENQ009', customer: 'Robert Rodriguez', recentEnquiry: 'Plumbing Check', status: 'Pending', date: '2026-01-11' },
    { id: 'ENQ010', customer: 'Jennifer Lee', recentEnquiry: 'HVAC Inspection', status: 'Completed', date: '2026-01-07' },
    { id: 'ENQ011', customer: 'William Taylor', recentEnquiry: 'Roof Inspection', status: 'Active', date: '2026-01-12' },
    { id: 'ENQ012', customer: 'Elizabeth Thomas', recentEnquiry: 'Foundation Check', status: 'Pending', date: '2026-01-10' },
    { id: 'ENQ013', customer: 'Christopher White', recentEnquiry: 'Environmental Audit', status: 'Completed', date: '2026-01-06' },
    { id: 'ENQ014', customer: 'Jessica Harris', recentEnquiry: 'Accessibility Review', status: 'Active', date: '2026-01-14' },
    { id: 'ENQ015', customer: 'Daniel Martin', recentEnquiry: 'Energy Efficiency Audit', status: 'Pending', date: '2026-01-08' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        items={sidebarItems}
        onItemClick={onSidebarItemClick}
      />

      {/* Sticky Hamburger Menu */}
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
            <div className="w-12"></div> {/* Spacer for hamburger menu */}
            <button 
              onClick={onNavigateBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Inspectors</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Inspectors Table */}
        <InspectorsTable 
          inspectors={inspectors} 
          onInspectorClick={onNavigateToDetail}
          showFilter={true}
        />

        {/* Revenue and Inspections Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatsCard 
            title="Total Revenue Earned" 
            value="$485,000" 
            icon={DollarSign}
            color="emerald"
            subtitle="Total earnings from all inspectors"
          />
          <StatsCard 
            title="Total Inspections Accepted" 
            value="342" 
            icon={CheckCircle2}
            color="indigo"
            subtitle="Across all inspectors"
          />
        </div>

        {/* All Enquiries Table */}
        <EnquiriesTable 
          enquiries={enquiries} 
          showLoadMore={false}
          onEnquiryClick={onNavigateToEnquiryDetail}
          showFilter={true}
          scrollable={true}
        />
      </main>
    </div>
  );
}