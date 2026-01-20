import React, { useState } from 'react';
import { ArrowLeft, Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import CompaniesTable from '../components/CompaniesTable';

export default function AllCompaniesPage({ 
  companies, 
  onNavigateToDetail, 
  onNavigateBack,
  sidebarItems,
  onSidebarItemClick
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">All Inspection Companies</h1>
              <p className="text-sm text-gray-600 mt-1">View and manage all company records</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <CompaniesTable 
          companies={companies}
          onCompanyClick={onNavigateToDetail}
          showFilter={true}
        />
      </main>
    </div>
  );
}