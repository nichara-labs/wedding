# 💒 Wedding RSVP Website

A beautiful and responsive wedding RSVP website built with Next.js and Mantine UI components.

## ✨ Features

- **Elegant Design**: Beautiful gradient background and card-based layout
- **Responsive Form**: Works perfectly on desktop and mobile devices
- **Form Validation**: Client-side validation for required fields and email format
- **Real-time Notifications**: Success and error notifications using Mantine notifications
- **API Integration**: Backend API endpoint for handling RSVP submissions
- **Thank You Page**: Dedicated page shown after successful submission

## 📋 RSVP Form Fields

The form includes the following fields:

- **Full Name** (Required): Guest's complete name
- **Email Address** (Required): Valid email address for confirmation
- **Wedding Side** (Required): Bride's side or Groom's side
- **Additional Notes** (Optional): Space for:
  - Food allergies and dietary restrictions
  - Accessibility needs
  - Well wishes for the couple
  - Any other special requests

## 🚀 Getting Started

### Prerequisites

- Node.js 22.18+
- pnpm package manager

### Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠 Technology Stack

- **Frontend Framework**: Next.js 15.5.2 with Turbopack
- **UI Components**: Mantine 8.2.1
- **Icons**: Tabler Icons React 3.34.1
- **Language**: TypeScript
- **Styling**: CSS-in-JS with Mantine's styling system

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── api/rsvp/route.ts     # Backend API endpoint
│   │   ├── thank-you/page.tsx    # Thank you page
│   │   ├── layout.tsx            # Root layout with Mantine providers
│   │   └── page.tsx              # Main page with RSVP form
│   └── components/
│       └── RSVPForm.tsx          # Main RSVP form component
├── public/                       # Static assets
└── package.json                  # Dependencies and scripts
```

## 🔧 Backend Integration

The project includes a placeholder API endpoint at `/api/rsvp` that:

- Validates form data (required fields, email format)
- Logs submissions to console
- Returns success/error responses
- Includes TODO comments for database integration

### Customizing the Backend

To integrate with your preferred backend solution, update the `/api/rsvp/route.ts` file to:

1. **Database Integration**: Save submissions to your database (PostgreSQL, MongoDB, etc.)
2. **Email Notifications**: Send confirmation emails to guests and notifications to the wedding couple
3. **Analytics**: Track RSVP statistics and guest preferences
4. **External Services**: Integrate with wedding planning tools or CRM systems

Example database integration:

```typescript
// Add to your API route
import { db } from "@/lib/database";

const rsvp = await db.rsvp.create({
  data: {
    fullName,
    email,
    side,
    notes,
    submittedAt: new Date(),
  },
});
```

## 🎨 Customization

### Styling

- Modify colors in the gradient backgrounds and button styles
- Update the Mantine theme in `layout.tsx`
- Customize form field styling in `RSVPForm.tsx`

### Content

- Update wedding contact email in form and thank you page
- Modify form validation messages
- Customize success/error notification text
- Add wedding date, venue, or other details

### Form Fields

- Add additional fields (e.g., guest count, meal preferences)
- Modify existing field options (e.g., add more side options)
- Update validation rules as needed

## 📱 Responsive Design

The website is fully responsive and provides an optimal experience across:

- Desktop computers
- Tablets
- Mobile phones

## 🔒 Security Considerations

- Form validation on both client and server side
- Email format validation
- Input sanitization (extend as needed)
- CORS handling for API routes

## 📧 Contact

For questions about the wedding, contact: wedding@example.com

---

Made with ❤️ for your special day!
