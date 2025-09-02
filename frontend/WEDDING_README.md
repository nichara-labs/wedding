# 💒 Sarah & Michael's Wedding Website

A beautiful and comprehensive wedding website built with Next.js and Mantine UI components, featuring multiple sections including couple story, wedding details, photo gallery, and RSVP functionality.

## ✨ Features

- **Multi-Page Wedding Website**: Complete wedding site with navigation
- **Responsive Design**: Beautiful gradient backgrounds and card-based layouts
- **Mobile Navigation**: Hamburger menu for mobile devices
- **RSVP System**: Full form validation and backend API integration
- **Wedding Story**: Timeline of the couple's journey together
- **Wedding Details**: Comprehensive information about venue, schedule, and logistics
- **Photo Gallery**: Placeholder for engagement and wedding photos
- **Real-time Notifications**: Success and error notifications using Mantine
- **Thank You Page**: Dedicated page after RSVP submission

## 📑 Website Sections

### 🏠 Home Page

- Hero section with couple names and wedding date
- Quick wedding details (date, time, venue, dress code)
- Call-to-action buttons for RSVP and story

### 💕 Our Story Page

- Couple introduction with avatars
- Interactive timeline of relationship milestones
- Fun facts about the couple
- Personal touch with quotes and memories

### 📋 Wedding Details Page

- Complete schedule of wedding day events
- Venue information with map links
- Hotel accommodations with booking codes
- Dress code and what to expect
- Contact information for questions

### 📸 Gallery Page

- Placeholder for engagement photos
- Space for future wedding photos
- Photo sharing instructions for guests

### 📝 RSVP Page

The RSVP form includes:

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
- **UI Components**: Mantine 8.2.1 with Mantine Hooks
- **Icons**: Tabler Icons React 3.34.1
- **Language**: TypeScript
- **Styling**: CSS-in-JS with Mantine's styling system
- **Navigation**: App Shell with responsive navigation

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── api/rsvp/route.ts     # Backend API endpoint
│   │   ├── details/page.tsx      # Wedding details page
│   │   ├── gallery/page.tsx      # Photo gallery page
│   │   ├── our-story/page.tsx    # Couple's story page
│   │   ├── rsvp/page.tsx         # RSVP form page
│   │   ├── thank-you/page.tsx    # Thank you page
│   │   ├── layout.tsx            # Root layout with AppShell
│   │   └── page.tsx              # Home page
│   └── components/
│       ├── AppShellLayout.tsx    # Navigation and footer
│       └── RSVPForm.tsx          # RSVP form component
├── public/                       # Static assets
└── package.json                  # Dependencies and scripts
```

## 🎨 Design Features

### Color Scheme

- Primary: Pink/Rose (#e91e63)
- Background: Gradient from light pink to light purple
- Cards: White with subtle shadows
- Text: Dark gray with pink accents

### Layout

- App Shell with header navigation
- Footer with Nichara Labs attribution and GitHub link
- Responsive grid layouts
- Card-based content organization

### Navigation

- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with slide-out navigation
- Consistent branding with couple names and heart icons

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

## 📱 Responsive Design

The website is fully responsive and provides an optimal experience across:

- Desktop computers (full navigation bar)
- Tablets (responsive grid layouts)
- Mobile phones (hamburger menu navigation)

## 🎯 Customization

### Content Updates

- Update couple names in `AppShellLayout.tsx` and throughout pages
- Modify wedding date, venue, and details in relevant pages
- Add real photos to replace placeholder gallery items
- Update contact emails and phone numbers

### Styling

- Modify colors in gradient backgrounds and theme
- Update the Mantine theme in `layout.tsx`
- Customize card styles and spacing
- Add custom fonts or typography

### Form Fields

- Add additional RSVP fields (e.g., guest count, meal preferences)
- Modify existing field options (e.g., add more side options)
- Update validation rules as needed

## 🔒 Security Considerations

- Form validation on both client and server side
- Email format validation
- Input sanitization (extend as needed)
- CORS handling for API routes

## 🏗 Built by Nichara Labs

This wedding website was built with ❤️ by [Nichara Labs](https://nicharalabs.com).

**Source Code**: [github.com/nichara-labs/wedding](https://github.com/nichara-labs/wedding)

---

_Made with love for Sarah & Michael's special day! 💒_
