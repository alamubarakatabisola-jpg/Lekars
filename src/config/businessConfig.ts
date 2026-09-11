export interface BusinessConfig {
  businessName: string;
  tagline: string;
  supportingMessage: string;
  whatsappNumber: string; // E.164 without leading + or 0, e.g. "2348087431135"
  secondaryWhatsAppNumber: string; // e.g. "2348106460593"
  displayWhatsApp: string;
  displaySecondaryWhatsApp: string;
  phoneNumber: string;
  secondaryPhoneNumber: string;
  email: string;
  address: string;
  businessHours: string;
  adminPasscode: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}

export const businessConfig: BusinessConfig = {
  businessName: "Lekarsemir Musical",
  tagline: "Professional Musical Instrument Repair & Engineering Solutions",
  supportingMessage: "Keeping Your Sound Alive.",
  whatsappNumber: "2348087431135", // Primary WhatsApp: 08087431135 -> 2348087431135
  secondaryWhatsAppNumber: "2348106460593", // Secondary WhatsApp: 08106460593 -> 2348106460593
  displayWhatsApp: "0808 743 1135",
  displaySecondaryWhatsApp: "0810 646 0593",
  phoneNumber: "0808 743 1135",
  secondaryPhoneNumber: "0810 646 0593",
  email: "contact@lekarsemirmusical.com",
  address: "Suite 104, Technical Sound Plaza, Commercial Avenue, Ikeja, Lagos",
  businessHours: "Monday – Saturday: 8:30 AM – 6:30 PM",
  adminPasscode: "1234", // Default Admin PIN
  socials: {
    instagram: "https://instagram.com/lekarsemirmusical",
    facebook: "https://facebook.com/lekarsemirmusical",
    tiktok: "https://tiktok.com/@lekarsemirmusical",
  },
};
