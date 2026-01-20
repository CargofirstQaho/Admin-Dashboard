import React, { useState } from 'react';
import { Menu, ArrowLeft, DollarSign, FileText } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import StatsCard from '../components/StatsCard';
import CompaniesTable from '../components/CompaniesTable';
import EnquiriesTable from '../components/EnquiriesTable';

export default function InspectionCompanyPage({
  onNavigateToDetail,
  onNavigateToEnquiryDetail,
  onNavigateBack,
  onSidebarItemClick,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = ['All Companies', 'All Enquiries', 'Chat', 'Payments', 'Reports'];

  const companies = [
    { id: 'COMP001', name: 'Elite Inspections Inc.', location: 'New York', inspectorsAssigned: 15, dateRegistered: '2026-01-14', totalEnquiries: 45 },
    { id: 'COMP002', name: 'Quality Check Co.', location: 'Los Angeles', inspectorsAssigned: 12, dateRegistered: '2026-01-13', totalEnquiries: 38 },
    { id: 'COMP003', name: 'SafeGuard Inspections', location: 'Chicago', inspectorsAssigned: 18, dateRegistered: '2026-01-12', totalEnquiries: 52 },
    { id: 'COMP004', name: 'Premier Inspection Services', location: 'Houston', inspectorsAssigned: 8, dateRegistered: '2026-01-11', totalEnquiries: 28 },
    { id: 'COMP005', name: 'Certified Inspectors Group', location: 'Phoenix', inspectorsAssigned: 14, dateRegistered: '2026-01-10', totalEnquiries: 41 },
    { id: 'COMP006', name: 'Precision Inspection Solutions', location: 'Philadelphia', inspectorsAssigned: 16, dateRegistered: '2026-01-09', totalEnquiries: 47 },
    { id: 'COMP007', name: 'TrustMark Inspections', location: 'San Antonio', inspectorsAssigned: 10, dateRegistered: '2026-01-08', totalEnquiries: 32 },
    { id: 'COMP008', name: 'Apex Inspection Specialists', location: 'San Diego', inspectorsAssigned: 19, dateRegistered: '2026-01-07', totalEnquiries: 56 },
    { id: 'COMP009', name: 'Reliable Inspection Partners', location: 'Dallas', inspectorsAssigned: 11, dateRegistered: '2026-01-06', totalEnquiries: 35 },
    { id: 'COMP010', name: 'Professional Inspectors LLC', location: 'San Jose', inspectorsAssigned: 17, dateRegistered: '2026-01-05', totalEnquiries: 49 },
    { id: 'COMP011', name: 'Guardian Inspection Services', location: 'Austin', inspectorsAssigned: 9, dateRegistered: '2026-01-04', totalEnquiries: 30 },
    { id: 'COMP012', name: 'Expert Inspection Team', location: 'Jacksonville', inspectorsAssigned: 13, dateRegistered: '2026-01-03', totalEnquiries: 42 },
    { id: 'COMP013', name: 'Assured Quality Inspections', location: 'Fort Worth', inspectorsAssigned: 10, dateRegistered: '2026-01-02', totalEnquiries: 34 },
    { id: 'COMP014', name: 'Master Inspectors Network', location: 'Columbus', inspectorsAssigned: 15, dateRegistered: '2026-01-01', totalEnquiries: 44 },
    { id: 'COMP015', name: 'Superior Inspection Group', location: 'Charlotte', inspectorsAssigned: 16, dateRegistered: '2025-12-31', totalEnquiries: 48 },
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
            <h1 className="text-2xl font-semibold text-gray-900">Inspection Companies</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Companies Table */}
        <CompaniesTable
          companies={companies}
          onCompanyClick={onNavigateToDetail}
          showFilter={true}
        />

        {/* Revenue and Enquiries Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatsCard
            title="Company Revenue"
            value="$1,245,000"
            icon={DollarSign}
            color="emerald"
            subtitle="Total revenue from all companies"
          />
          <StatsCard
            title="Total Enquiries Managed"
            value="624"
            icon={FileText}
            color="indigo"
            subtitle="Across all companies"
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