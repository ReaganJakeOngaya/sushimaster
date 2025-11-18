# SushiKing - Japanese Restaurant Website
A modern, responsive Japanese restaurant website built with React, Vite, and Tailwind CSS, featuring a complete e-commerce experience for ordering authentic Japanese cuisine.

## Features
### Core Functionality
- **Complete Menu System**: Browse sushi, ramen, desserts, and drinks with category filtering
- **Shopping Cart**: Add, remove, and update item quantities with real-time calculations
- **Checkout Process**: Secure checkout with order confirmation and delivery estimates
- **Order Management**: Track order history and status
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)

### 🎨 User Experience
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging transitions
- **Interactive UI**: Framer Motion for fluid interactions
- **Visual Appeal**: High-quality food imagery and modern design
- **Search Functionality**: Find menu items quickly
- **Cart Persistence**: Maintains cart state across sessions

### ⚙️ Technical Features
- **Admin Dashboard**: Complete management system for orders and menu items
- **Real-time Analytics**: Revenue charts and popular items tracking
- **Form Validation**: Robust checkout and contact forms
- **Payment Integration Ready**: Structured for payment gateway implementation
- **SEO Optimized**: Clean structure and meta tags

## 🛠 Technology Stack

### Frontend
- **React 18.2.0** - Modern React with hooks and functional components
- **Vite 4.4.5** - Fast build tool and development server
- **React Router DOM 6.14.2** - Client-side routing
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **PostCSS 8.4.28** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

### UI & Animation
- **Framer Motion 10.16.4** - Production-ready motion library
- **AOS 2.3.4** - Animate On Scroll library
- **React Icons 4.10.1** - Comprehensive icon library
- **Recharts 3.0.2** - Composable charting library

### Development Tools
- **ESLint 9.29.0** - Code linting and formatting
- **TypeScript Definitions** - Enhanced development experience
- **Hot Module Replacement** - Fast development workflow

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation with search and cart
│   ├── Footer.jsx          # Site footer with links
│   ├── MenuItem.jsx        # Individual menu item component
│   └── CartItem.jsx        # Cart item management
├── pages/
│   ├── Home.jsx            # Landing page with hero and features
│   ├── Menu.jsx            # Complete menu with filtering
│   ├── Cart.jsx            # Shopping cart management
│   ├── Checkout.jsx        # Order completion process
│   ├── Profile.jsx         # User profile and order history
│   └── Admin/
│       ├── Dashboard.jsx   # Analytics and overview
│       ├── Orders.jsx      # Order management
│       └── MenuManagement.jsx # Menu item CRUD operations
├── context/
│   └── CartContext.jsx     # Global cart state management
├── assets/
│   └── images/             # Food and brand images
└── App.jsx                 # Main application component
```

## 🎯 Key Components

### Cart Context (`CartContext.jsx`)
- Global state management for shopping cart
- Persistent cart data
- Order history tracking
- Utility functions for cart operations

### Menu System (`Menu.jsx`)
- Category-based filtering (All, Sushi, Ramen, Desserts, Drinks)
- Search functionality
- Add to cart with visual feedback
- Detailed product information

### Admin Dashboard
- **Dashboard**: Revenue charts and key metrics
- **Orders Management**: Process and track customer orders
- **Menu Management**: Add, edit, and delete menu items

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Design System

### Typography
- Clean, modern font stack
- Responsive text sizing
- Japanese character accents for authenticity

### Layout
- Grid-based responsive design
- Consistent spacing using Tailwind utilities
- Mobile-first approach

## Pages Overview

### Home Page
- Hero section with call-to-action
- About us section
- Popular foods showcase
- Trending items
- Newsletter subscription

### Menu Page
- Interactive category filters
- Search functionality
- Product cards with images and details
- Integrated shopping cart
- Real-time price calculations

### Checkout Process
- Multi-step checkout flow
- Form validation
- Order summary
- Payment method selection
- Order confirmation

### Admin Panel
- Dashboard with analytics
- Order management system
- Menu item CRUD operations
- Revenue tracking

##  Customization

### Adding New Menu Items
Update the `menuItems` array in `Menu.jsx`:
```javascript
{
  id: 13,
  name: 'New Sushi Roll',
  price: 22.0,
  description: 'Description of new item',
  category: 'sushi',
  rating: 4.8,
  tags: ['New', 'Fresh'],
  image: sushiImage,
}
```

### Styling Modifications
- Modify Tailwind classes in components
- Update color scheme in `tailwind.config.js`
- Add custom CSS in `index.css`

### Adding New Routes
Update `App.jsx` with new route components:
```javascript
<Route path="/new-route" element={<NewComponent />} />
```

## Best Practices Implemented

### Code Quality
- ESLint configuration for consistent code style
- Component-based architecture
- Proper separation of concerns
- Reusable component patterns

### Performance
- Lazy loading ready structure
- Optimized images
- Efficient state management
- Minimal bundle size

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance

## Future Enhancements

### Planned Features
- User authentication system
- Payment gateway integration (Stripe/PayPal)
- Real-time order tracking
- Customer reviews and ratings
- Loyalty program integration
- Multi-language support
- PWA capabilities

### Technical Improvements
- Backend API integration
- Database implementation
- Caching strategies
- Advanced analytics
- SEO optimization

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




Developed with ❤️ by Jake


SushiKing - Experience authentic Japanese cuisine delivered to your doorstep with modern convenience and traditional flavors.
