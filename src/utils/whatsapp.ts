import { businessConfig } from '../config/businessConfig';
import type { CartItem } from '../types';

/**
 * Format currency in Nigerian Naira ₦
 */
export const formatNaira = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format raw phone number into clean E.164 digits for wa.me URL
 * Converts 08087431135 -> 2348087431135
 */
export const cleanPhoneNumber = (phone: string): string => {
  let cleaned = phone.replace(/[^0-9]/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '234' + cleaned.slice(1);
  }
  return cleaned;
};

/**
 * Encodes text and generates direct WhatsApp Web / App link (wa.me)
 */
export const generateWhatsAppLink = (message: string, rawPhone?: string): string => {
  const phone = rawPhone ? cleanPhoneNumber(rawPhone) : businessConfig.whatsappNumber;
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
};

/**
 * Generate WhatsApp message for a single product inquiry/order
 */
export const generateProductWhatsAppMessage = (productName: string, price: number, rawPhone?: string): string => {
  const text = `Hello ${businessConfig.businessName},

I am interested in ordering/inquiring about the following product:

*Product:* ${productName}
*Price:* ${formatNaira(price)}

Please confirm item availability and let me know the next steps for pickup or delivery. Thank you!`;

  return generateWhatsAppLink(text, rawPhone);
};

/**
 * Generate WhatsApp message for requesting a specific technical service
 */
export const generateServiceWhatsAppMessage = (serviceName: string, rawPhone?: string): string => {
  const text = `Hello ${businessConfig.businessName},

I would like to enquire about your *${serviceName}* service.

I have an instrument/equipment that requires professional attention. Please let me know how I can bring it in for assessment or schedule a consultation.

Thank you!`;

  return generateWhatsAppLink(text, rawPhone);
};

/**
 * Generate WhatsApp message for full shopping cart checkout
 */
export const generateCartWhatsAppMessage = (
  items: CartItem[],
  total: number,
  customerDetails?: {
    name?: string;
    phone?: string;
    location?: string;
    notes?: string;
  },
  rawPhone?: string
): string => {
  const itemLines = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}* x ${item.quantity}\n   Price: ${formatNaira(item.product.price * item.quantity)}`
    )
    .join('\n\n');

  let text = `Hello ${businessConfig.businessName},

I would like to place an order for the following items in my cart:

--- *ORDER DETAILS* ---
${itemLines}

*TOTAL AMOUNT:* ${formatNaira(total)}
`;

  if (customerDetails && (customerDetails.name || customerDetails.phone || customerDetails.location)) {
    text += `\n--- *CUSTOMER DETAILS* ---`;
    if (customerDetails.name) text += `\nName: ${customerDetails.name}`;
    if (customerDetails.phone) text += `\nPhone: ${customerDetails.phone}`;
    if (customerDetails.location) text += `\nDelivery Location: ${customerDetails.location}`;
    if (customerDetails.notes) text += `\nAdditional Message: ${customerDetails.notes}`;
  } else {
    text += `\n--- *CUSTOMER DETAILS* ---
Name: 
Phone Number: 
Delivery Location: 
Additional Message: `;
  }

  text += `\n\nPlease confirm availability and provide payment/delivery instructions.`;

  return generateWhatsAppLink(text, rawPhone);
};
