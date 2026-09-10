import React from 'react';
import { MessageSquare } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'compact';
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hello Lekarsemir Musical, I would like to inquire about your repair and engineering services.",
  label = "Order on WhatsApp",
  variant = 'primary',
  className = "",
}) => {
  const url = generateWhatsAppLink(message);

  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg px-5 py-3 text-base",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-5 py-3 text-base",
    outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-2 text-sm font-semibold",
    compact: "bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 text-xs font-semibold rounded-md"
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={`${label} via WhatsApp`}
    >
      <MessageSquare className="w-5 h-5 mr-2 shrink-0 fill-current" />
      <span>{label}</span>
    </a>
  );
};
