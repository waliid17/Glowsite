// EmailJS Configuration Example
// Copy this file to emailjs.ts and replace with your actual credentials
// Get them from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  SERVICE_ID: 'your_service_id_here',
  
  // Your EmailJS template ID
  TEMPLATE_ID: 'your_template_id_here',
  
  // Your EmailJS public key
  PUBLIC_KEY: 'your_public_key_here'
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

