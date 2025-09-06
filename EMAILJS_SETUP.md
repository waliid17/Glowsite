# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this professional template content:

**Subject:** 🚀 Nouveau client - GlowSite Agency

**HTML Content:**
```html
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
  
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">
      🌟 GlowSite Agency
    </h1>
    <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 16px;">
      Nouveau message de contact reçu
    </p>
  </div>

  <!-- Content -->
  <div style="padding: 40px 30px;">
    
    <!-- Client Info Card -->
    <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 12px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
          <span style="color: white; font-size: 24px;">👤</span>
        </div>
        <div>
          <h2 style="color: #1e293b; margin: 0; font-size: 22px; font-weight: 600;">
            {{from_name}}
          </h2>
          <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">
            Nouveau client potentiel
          </p>
        </div>
      </div>
    </div>

    <!-- Contact Details -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
      <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
        📋 Informations de contact
      </h3>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 500; width: 120px;">📧 Email:</td>
          <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">{{from_email}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 500;">📱 Instagram:</td>
          <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">{{instagram}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 500;">🏢 Entreprise:</td>
          <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">{{company}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 500;">🎯 Service:</td>
          <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">{{service}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 500;">🎨 Démo:</td>
          <td style="padding: 8px 0;">
            <span style="background: {{need_demo}} == 'Oui' ? '#10b981' : '#f59e0b'; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
              {{need_demo}}
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Message -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
      <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
        💬 Message du client
      </h3>
      <div style="background: #f8fafc; padding: 15px; border-radius: 6px; border-left: 3px solid #3b82f6;">
        <p style="color: #374151; margin: 0; line-height: 1.6; font-size: 15px;">
          {{message}}
        </p>
      </div>
    </div>

    <!-- Action Button -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="mailto:{{from_email}}?subject=Re: Votre demande de démo - GlowSite Agency" 
         style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block;">
        📧 Répondre au client
      </a>
    </div>

  </div>

  <!-- Footer -->
  <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #64748b; margin: 0; font-size: 14px;">
      Ce message a été envoyé depuis le formulaire de contact de votre site web GlowSite Agency
    </p>
    <p style="color: #94a3b8; margin: 5px 0 0 0; font-size: 12px;">
      ⚡ Réponse rapide recommandée pour maximiser les conversions
    </p>
  </div>

</div>
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)

## Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_k6pjnw9',
  TEMPLATE_ID: 'template_ygppfla', 
  PUBLIC_KEY: 'eu4akFeR8PsyyekNc'
};
```

## Step 6: Test the Form
1. Start your development server
2. Fill out the contact form
3. Submit and check your email
4. You should receive the form data in your email

## Email Template Variables
The form sends these variables to your email template:
- `{{from_name}}` - Client's full name
- `{{from_email}}` - Client's email address
- `{{instagram}}` - Client's Instagram username
- `{{company}}` - Client's company name
- `{{service}}` - Requested service
- `{{message}}` - Project details
- `{{need_demo}}` - Whether they want a demo (Oui/Non)

## Troubleshooting
- Make sure all IDs are correct
- Check that your email service is properly connected
- Verify the template variables match exactly
- Check browser console for any error messages

## Free Plan Limits
- 200 emails per month
- Perfect for most small businesses
- Upgrade if you need more emails
