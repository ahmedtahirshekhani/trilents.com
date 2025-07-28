# Contact Form Email Setup Instructions

The contact form is now implemented and ready to send emails to `ahmed.shekhani@trilents.com`. You have two options to make it work:

## Option 1: Formspree (Recommended - Free & Easy)

1. **Sign up at [Formspree.io](https://formspree.io)**
   - Create a free account
   - Create a new form
   - Set the target email to: `ahmed.shekhani@trilents.com`

2. **Get your Form ID**
   - After creating the form, you'll get a form ID that looks like: `xpznqwer`
   - The endpoint will be: `https://formspree.io/f/xpznqwer`

3. **Update the code**
   - In `src/components/Contact.tsx`, line 43, replace `YOUR_FORM_ID` with your actual form ID:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

4. **Features included:**
   - ✅ Form validation
   - ✅ Loading states
   - ✅ Success/error messages
   - ✅ Form data collection
   - ✅ Email notifications
   - ✅ Spam protection

## Option 2: EmailJS (Alternative)

If you prefer EmailJS:

1. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

2. **Sign up at [EmailJS.com](https://www.emailjs.com/)**
   - Create an account
   - Set up email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

3. **Replace the form submission code**
   - Import EmailJS in the Contact component
   - Replace the fetch call with EmailJS send method

## Form Data Structure

The form collects:
- First Name (required)
- Last Name (required)
- Email (required)
- Phone (optional)
- Company (optional)
- Project Type (dropdown)
- Message (required)

## Testing

1. After setting up Formspree/EmailJS, test the form
2. Fill out all required fields
3. Submit the form
4. Check for success message
5. Verify email arrives at `ahmed.shekhani@trilents.com`

## Current Status

- ✅ Form UI is complete
- ✅ Form validation is implemented
- ✅ State management is working
- ✅ Loading and success/error states
- ⏳ **Need to setup Formspree account and replace YOUR_FORM_ID**

## Next Steps

1. Sign up for Formspree
2. Create a form targeting `ahmed.shekhani@trilents.com`
3. Replace `YOUR_FORM_ID` in the code
4. Test the form
5. Done! Emails will be sent automatically.
