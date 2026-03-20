export function getWhatsAppUrl(product, clientInfo = {}) {
  const { brand, title, model } = product;
  const { name, biz, phone, msg } = clientInfo;
  
  const prodName = `${brand} ${title} (${model})`;
  
  const waMsg = `*New Enquiry from Website*\n\n` +
                `*Product:* ${prodName}\n` +
                (name ? `*Client Name:* ${name}\n` : '') +
                (biz ? `*Business:* ${biz}\n` : '') +
                (phone ? `*Phone:* ${phone}\n` : '') +
                (msg ? `*Message:* ${msg}\n` : '') +
                `\nPlease provide technical details and your best quote for the same.`;
                
  return `https://wa.me/919849461986?text=${encodeURIComponent(waMsg)}`;
}
