import React from 'react';
import { Clock, CheckCircle2, Calendar } from 'lucide-react';

export default function InspectionsTable({ inspections }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'In Progress':
        return <Clock className="w-5 h-5 text-indigo-600" />;
      case 'Scheduled':
        return <Calendar className="w-5 h-5 text-amber-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-700';
      case 'In Progress':
        return 'text-indigo-700';
      case 'Scheduled':
        return 'text-amber-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Inspections</h3>
      </div>
      
      <div className="p-6 space-y-4">
        {inspections.map((inspection) => (
          <div
            key={inspection.id}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                {getStatusIcon(inspection.status)}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-1">
                  {inspection.type} - {inspection.customer}
                </h4>
                <p className="text-sm text-gray-600">
                  {inspection.date} • <span className={`font-medium ${getStatusColor(inspection.status)}`}>{inspection.status}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}