import React, { useState } from 'react';
import { ArrowLeft, Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import EnquiriesTable from '../components/EnquiriesTable';

export default function AllEnquiriesPage({ 
  enquiries, 
  onNavigateToDetail, 
  onNavigateBack,
  sidebarItems,
  onSidebarItemClick,
  roleContext
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getRoleTitle = () => {
    switch(roleContext) {
      case 'customer': return 'Customer';
      case 'inspector': return 'Inspector';
      case 'company': return 'Company';
      default: return '';
    }
  };

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
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">All Enquiries</h1>
              <p className="text-sm text-gray-600 mt-1">{getRoleTitle()} - View and manage all enquiries</p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <EnquiriesTable 
          enquiries={enquiries}
          onEnquiryClick={onNavigateToDetail}
          showFilter={true}
          scrollable={true}
        />
      </main>
    </div>
  );
}
