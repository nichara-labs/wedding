# 💒 Wedding RSVP Website

A beautiful and responsive wedding RSVP website rebuilt with Next.js 15, Tailwind CSS, and shadcn/ui primitives.

## ✨ Features

- **Elegant Design**: Beautiful gradient background and card-based layout
- **Responsive Form**: Works perfectly on desktop and mobile devices
- **Form Validation**: Client-side validation for required fields and email format
- **Real-time Notifications**: Delightful toasts for success and error states with shadcn/ui
- **API Integration**: Backend API endpoint for handling RSVP submissions

## 📋 RSVP Form Fields

The form includes the following fields:

- **Full Name** (Required): Guest's complete name
- **Email Address** (Required): Valid email address for confirmation
- **Goodwill Message** (Optional): Space for:
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
- **UI Components**: shadcn/ui built on Radix primitives
- **Icons**: Tabler Icons React 3.34.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS with design tokens tuned for the wedding palette

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with Tailwind + font setup
│   │   └── page.tsx              # Main page with slideshow and modal form
│   └── components/
│       ├── Slideshow.tsx         # Hero slideshow + RSVP modal
│       ├── RSVPForm.tsx          # Shadcn-based RSVP form
│       ├── slides.tsx            # Animated slide content
│       └── ui/                   # Reusable shadcn/ui primitives
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind theme tokens
├── postcss.config.mjs            # PostCSS pipeline
└── package.json                  # Dependencies and scripts
```

## 🔧 Backend Integration

The front-end posts RSVP submissions to the URL defined in `NEXT_PUBLIC_RSVP_API_URL`. In this repository the infrastructure stack provisions an AWS API Gateway + Lambda handler that forwards records into DynamoDB and emails guests through SES. Update the environment variable (in `.env.local` for development or your hosting provider's dashboard) to point at the deployed endpoint.

## 🎨 Customization

### Styling

- Tweak gradient colours and component tokens in `src/app/globals.css`
- Adjust shared utility classes in `tailwind.config.ts`
- Refine form styling directly in `RSVPForm.tsx`

### Content

- Update wedding contact information in the form copy
- Modify form validation messages
- Customize success/error notification text
- Add wedding date, venue, or other details

### Form Fields

- Add additional fields (e.g., guest count, meal preferences)
- Modify existing field options (e.g., collect dietary preferences)
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
