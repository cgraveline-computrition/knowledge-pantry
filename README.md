# Food Service Products App

A single-page React application with MUI featuring an animated pinwheel product selector.

## Features

- Autoplay background video
- Animated center button that transforms into a pinwheel/pie chart
- 4 product categories with smooth transitions
- Product overlay with detailed information
- Framer Motion animations throughout

## Getting Started

```bash
npm install
npm start
```

The app will open at http://localhost:3000

## Structure

- `src/App.js` - Main app component with theme
- `src/components/LandingPage.js` - Main landing page container
- `src/components/VideoBackground.js` - Autoplay video background
- `src/components/CenterButton.js` - Initial "Explore Products" button
- `src/components/PinwheelSelector.js` - Animated pie chart selector
- `src/components/ProductOverlay.js` - Product detail overlay

## Customization

- Edit product data in `PinwheelSelector.js`
- Change colors in the theme (App.js)
- Replace video URL in `VideoBackground.js`
