import React, { useState } from 'react';
import { Search, MapPin, DollarSign, ChevronRight, User } from 'lucide-react';

export default function CustomersTable({ customers = [], onCustomerClick, showFilter = false }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {showFilter && (
        <div className="p-4 border-b border-slate-50 bg-white">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search customers by name or location..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Client</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Activity</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Budget</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Profile</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                onClick={() => onCustomerClick?.(customer.id)}
                className="group hover:bg-slate-50/80 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">{customer.name}</div>
                      <div className="text-[10px] font-bold text-slate-400 font-mono tracking-tighter uppercase">ID: {customer.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-300" />
                    {customer.location}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-bold text-slate-700">{customer.recentEnquiries} Enquiries</div>
                  <div className="text-[11px] text-slate-400">Joined {customer.date}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="inline-flex items-center px-2.5 py-1 bg-emerald-50 rounded-lg text-emerald-700 text-sm font-black border border-emerald-100">
                    <DollarSign className="w-3 h-3 mr-0.5" />
                    {customer.budget.replace('$', '')}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-300 group-hover:text-indigo-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}