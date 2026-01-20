import React, { useState } from 'react';
import { Menu, ArrowLeft, DollarSign, FileText } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import StatsCard from '../components/StatsCard';
import CustomersTable from '../components/CustomersTable';
import EnquiriesTable from '../components/EnquiriesTable';

export default function CustomerPage({ onNavigateToDetail, onNavigateToEnquiryDetail, onNavigateBack, onSidebarItemClick }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = ['All Customers', 'All Enquiries', 'Chat', 'Payments', 'Reports'];

  const customers = [
    { id: 'CUST001', name: 'John Smith', location: 'New York', recentEnquiries: 5, date: '2026-01-14', budget: '$15,000' },
    { id: 'CUST002', name: 'Sarah Johnson', location: 'Los Angeles', recentEnquiries: 3, date: '2026-01-13', budget: '$12,500' },
    { id: 'CUST003', name: 'Michael Brown', location: 'Chicago', recentEnquiries: 7, date: '2026-01-12', budget: '$20,000' },
    { id: 'CUST004', name: 'Emily Davis', location: 'Houston', recentEnquiries: 2, date: '2026-01-11', budget: '$8,000' },
    { id: 'CUST005', name: 'David Wilson', location: 'Phoenix', recentEnquiries: 4, date: '2026-01-10', budget: '$10,500' },
    { id: 'CUST006', name: 'Lisa Anderson', location: 'Philadelphia', recentEnquiries: 6, date: '2026-01-09', budget: '$18,000' },
    { id: 'CUST007', name: 'James Martinez', location: 'San Antonio', recentEnquiries: 3, date: '2026-01-08', budget: '$9,500' },
    { id: 'CUST008', name: 'Mary Garcia', location: 'San Diego', recentEnquiries: 8, date: '2026-01-07', budget: '$22,000' },
    { id: 'CUST009', name: 'Robert Rodriguez', location: 'Dallas', recentEnquiries: 4, date: '2026-01-06', budget: '$11,000' },
    { id: 'CUST010', name: 'Jennifer Lee', location: 'San Jose', recentEnquiries: 5, date: '2026-01-05', budget: '$14,500' },
    { id: 'CUST011', name: 'William Taylor', location: 'Austin', recentEnquiries: 2, date: '2026-01-04', budget: '$7,500' },
    { id: 'CUST012', name: 'Elizabeth Thomas', location: 'Jacksonville', recentEnquiries: 6, date: '2026-01-03', budget: '$16,000' },
    { id: 'CUST013', name: 'Christopher White', location: 'Fort Worth', recentEnquiries: 3, date: '2026-01-02', budget: '$9,000' },
    { id: 'CUST014', name: 'Jessica Harris', location: 'Columbus', recentEnquiries: 4, date: '2026-01-01', budget: '$13,000' },
    { id: 'CUST015', name: 'Daniel Martin', location: 'Charlotte', recentEnquiries: 7, date: '2025-12-31', budget: '$19,500' },
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

      <button 
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-30 p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:bg-indigo-50"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12"></div> 
            <button 
              onClick={onNavigateBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
 
        <CustomersTable 
          customers={customers} 
          onCustomerClick={onNavigateToDetail}
          showFilter={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatsCard 
            title="Revenue" 
            value="$248,500" 
            icon={DollarSign}
            color="emerald"
            subtitle="Total revenue from all customers"
          />
          <StatsCard 
            title="Total Enquiries Raised" 
            value="156" 
            icon={FileText}
            color="indigo"
            subtitle="Across all customers"
          />
        </div>

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
