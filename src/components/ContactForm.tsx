import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import type { ContactFormData } from '../types';
import { businessConfig } from '../config/businessConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceOrProduct: 'General Repair Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type a short description of your inquiry or instrument';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const whatsAppDirectMessage = `Hello ${businessConfig.businessName},

My Name: ${formData.fullName || 'Customer'}
Phone: ${formData.phone || 'N/A'}
Inquiry Type: ${formData.serviceOrProduct}

Message: ${formData.message || 'I would like to inquire about your repair and engineering services.'}`;

  const whatsAppDirectUrl = generateWhatsAppLink(whatsAppDirectMessage);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xl">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our technical engineering team will review your inquiry and contact you shortly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  serviceOrProduct: 'General Repair Inquiry',
                  message: '',
                });
              }}
              className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-xs"
            >
              Send Another Message
            </button>

            <a
              href={whatsAppDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center shadow-md"
            >
              <MessageSquare className="w-4 h-4 mr-2 fill-current" />
              Chat Immediately on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-2xl font-bold text-slate-900">Send Us a Technical Inquiry</h3>
            <p className="text-slate-500 text-xs mt-1">
              Fill out the form below or chat directly with our repair technicians via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. David Adebayo"
                className={`w-full px-4 py-3 text-sm border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.fullName
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/50'
                    : 'border-slate-300 focus:ring-blue-500 bg-white'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. david@example.com"
                className={`w-full px-4 py-3 text-sm border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.email
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/50'
                    : 'border-slate-300 focus:ring-blue-500 bg-white'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 08087431135"
                className={`w-full px-4 py-3 text-sm border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.phone
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/50'
                    : 'border-slate-300 focus:ring-blue-500 bg-white'
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Service/Product Interest Selector */}
            <div>
              <label htmlFor="serviceOrProduct" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Service / Subject
              </label>
              <select
                id="serviceOrProduct"
                value={formData.serviceOrProduct}
                onChange={(e) => setFormData({ ...formData, serviceOrProduct: e.target.value })}
                className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              >
                <option value="General Repair Inquiry">General Repair Inquiry</option>
                <option value="Guitar Repair & Maintenance">Guitar Repair & Maintenance</option>
                <option value="Keyboard / Piano Servicing">Keyboard / Piano Servicing</option>
                <option value="Amplifier Repair">Amplifier Repair</option>
                <option value="Speaker & Audio Equipment Repair">Speaker & Audio Equipment Repair</option>
                <option value="Sound System Engineering">Sound System Engineering</option>
                <option value="Product Order Inquiry">Product Order Inquiry</option>
              </select>
            </div>

          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Instrument Details & Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your instrument brand, model, and what issue you are experiencing..."
              className={`w-full px-4 py-3 text-sm border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                errors.message
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/50'
                  : 'border-slate-300 focus:ring-blue-500 bg-white'
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Form Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>

            <a
              href={whatsAppDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-2 fill-current" />
              Chat With Us on WhatsApp
            </a>
          </div>
        </form>
      )}
    </div>
  );
};
