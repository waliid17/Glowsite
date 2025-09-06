// EmailJS Configuration Example
// Copy this file to emailjs.ts and replace with your actual credentials
// Get them from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  SERVICE_ID: 'service_k6pjnw9',
  
  // Your EmailJS template ID
  TEMPLATE_ID: 'template_ygppfla',
  
  // Your EmailJS public key
  PUBLIC_KEY: 'eu4akFeR8PsyyekNc'
};

// Email template variables
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  company: string;
  instagram: string;
  service: string;
  message: string;
  need_demo: string;
  to_email: string;
}

