import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const colorMap = {
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  amber: 'bg-amber-50 text-amber-600 border-amber-100',
  rose: 'bg-rose-50 text-rose-600 border-rose-100',
  violet: 'bg-violet-50 text-violet-600 border-violet-100',
};

export default function StatsCard({ title, value, icon: Icon, color = 'indigo', trend, subtitle, onClick }) {
  const colorClasses = colorMap[color] || colorMap.indigo;

  return (
    <div 
      onClick={onClick}
      className={`
        relative overflow-hidden bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm transition-all
        ${onClick ? 'cursor-pointer hover:shadow-md hover:-translate-y-1 active:scale-[0.98]' : ''}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-slate-900">{value}</h3>
            {trend && (
              <span className={`flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full ${trend > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {trend > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {Math.abs(trend)}%
              </span>
            )}
          </div>
          {subtitle && <p className="text-sm font-medium text-slate-500">{subtitle}</p>}
        </div>

        <div className={`p-4 rounded-2xl border ${colorClasses}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      {/* Subtle Background Decoration */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.03]">
        <Icon size={100} strokeWidth={1} />
      </div>
    </div>
  );
}