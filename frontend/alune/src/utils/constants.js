// Central configuration for ALUNE
export const APP_CONFIG = {
  brandName: 'ALUNE',
  // Central WhatsApp number placeholder - Update with production number
  whatsappNumber: '+212600000000', 
  defaultCurrency: 'EUR',
  supportEmail: 'concierge@alune-eyewear.com',
};

export const generateWhatsAppLink = ({ productName, productId, productUrl }) => {
  const currentUrl = productUrl || window.location.href;
  const message = `Hello ALUNE,\n\nI would like to inquire about purchasing the following eyewear model:\n\n• Model: ${productName}\n• Ref ID: ${productId}\n• Link: ${currentUrl}\n\nPlease confirm availability and ordering details.`;
  return `https://wa.me/${APP_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
};
