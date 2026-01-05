# Google Forms Integration Setup

To connect the contact form to Google Forms and store data in Google Sheets:

## Steps:

1. **Create a Google Form**:

   - Go to [Google Forms](https://forms.google.com)
   - Create a new form with these fields (in order):
     - First Name (Short answer)
     - Last Name (Short answer)
     - Email (Short answer)
     - Country (Short answer)
     - Job Title (Short answer)
     - Company Name (Short answer)
     - Message (Paragraph)

2. **Get the Form Action URL**:

   - Open your Google Form
   - Click "Send" button
   - Click the link icon to get the form URL
   - The URL will look like: `https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform`
   - Replace `/viewform` with `/formResponse` to get the action URL
   - Example: `https://docs.google.com/forms/d/e/1FAIpQLSd.../formResponse`

3. **Get Entry IDs**:

   - Open your Google Form in edit mode
   - Right-click on the form and select "Inspect" (or press F12)
   - In the Elements tab, find the `<form>` element
   - Look for `name` attributes on input fields (they look like `entry.123456789`)
   - Copy each entry ID for each field

4. **Update ContactForm.tsx**:
   - Open `components/ContactForm.tsx`
   - Replace `GOOGLE_FORM_ACTION` with your form action URL
   - Replace all `ENTRY_IDS` values with the actual entry IDs from your form

## Alternative: Use Google Apps Script (Recommended for better control)

For a more robust solution, you can create a Google Apps Script web app:

1. Create a new Google Apps Script project
2. Create a `doPost` function that receives form data
3. Write data directly to Google Sheets
4. Deploy as a web app
5. Use the web app URL as the form action

This approach gives you better error handling and data validation.
