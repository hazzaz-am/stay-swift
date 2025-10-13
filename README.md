# Stay Swift

A modern hotel booking application built with Next.js, React, and TypeScript. Stay Swift allows users to search for hotels, view details, make reservations, and manage bookings across various destinations.

## Features

- **Hotel Search & Discovery**: Browse and search hotels across multiple destinations (Bali, Cox's Bazar, Sylhet, Saint Martin, and more)
- **Advanced Filtering**: Filter hotels by price range, star rating, and amenities
- **Hotel Details**: View comprehensive information about each hotel including images, ratings, and reviews
- **Booking System**: Complete booking flow with check-in/check-out date selection
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Fully responsive UI that works on all device sizes
- **Payment Integration**: Dedicated payment page for completing reservations

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: ESLint with Next.js configuration

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hazzaz-am/stay-swift
cd stay-swift
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint to check code quality

## Project Structure

```
stay-swift/
  - app/
    - (auth)/
      - login/              # Login page
      - registration/       # Registration page
    - bookings/             # Bookings management page
    - hotels/
      - [hotelId]/          # Dynamic hotel details page
      - page.tsx            # Hotels listing page
    - payment/              # Payment page
    - layout.tsx            # Root layout
    - page.tsx              # Home page
    - globals.css           # Global styles
  - public/
    - hero-bg.jpg           # Hero background image
    - images/               # Static images
  - package.json
  - tailwind.config.js
  - tsconfig.json
  - README.md
```

## Key Pages

- **Home (`/`)**: Landing page with hero section and search functionality
- **Hotels Listing (`/hotels`)**: Browse all available hotels with filtering options
- **Hotel Details (`/hotels/[hotelId]`)**: Detailed view of a specific hotel
- **Bookings (`/bookings`)**: Manage user bookings
- **Payment (`/payment`)**: Complete payment for reservations
- **Login (`/login`)**: User authentication
- **Registration (`/registration`)**: New user signup

## Features in Detail

### Search & Filter
- Search by destination
- Date range selection (check-in/check-out)
- Sort by price (high to low, low to high)
- Filter by price range ($13 - $182+)
- Filter by star rating (1-5 stars)
- Filter by amenities (Wi-Fi, Swimming Pool)

### Hotel Information
- Hotel images
- Location information
- Rating scores and reviews count
- Price per night
- Room availability

## Support

For support, please open an issue in the repository.
