import React from 'react';
import { 
  Wrench, Guitar, Piano, Drum, Radio, Volume2, Mic, 
  Activity, Sliders, ShieldCheck, Disc, Cpu, Clock, CheckCircle2, MessageSquare 
} from 'lucide-react';
import type { Service } from '../types';
import { generateServiceWhatsAppMessage } from '../utils/whatsapp';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Guitar,
  Piano,
  Drum,
  Radio,
  Volume2,
  Mic,
  Activity,
  Sliders,
  ShieldCheck,
  Disc,
  Cpu,
};

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Wrench;
  const whatsAppUrl = generateServiceWhatsAppMessage(service.name);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-500/50">
      <div className="p-6">
        
        {/* Top Header: Icon & Category Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-inner">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>
          {service.turnaroundTime && (
            <span className="inline-flex items-center text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5 mr-1 text-blue-500" />
              {service.turnaroundTime}
            </span>
          )}
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Breakdown Bullet Points */}
        <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">Key Repairs Included:</p>
          {service.details.map((detail, idx) => (
            <div key={idx} className="flex items-start text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mr-2 mt-0.5" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action Button */}
      <div className="p-6 pt-0 bg-slate-50/50 border-t border-slate-100">
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors duration-200 shadow-sm"
        >
          <MessageSquare className="w-4 h-4 mr-2 fill-current" />
          Request This Service
        </a>
      </div>
    </div>
  );
};
