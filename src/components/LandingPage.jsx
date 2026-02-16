import React, { useState } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from './VideoBackground.jsx';
import PinwheelSelector from './PinwheelSelector.jsx';
import CenterButton from './CenterButton.jsx';

const LandingPage = ({ onProductSelect }) => {
  const [showPinwheel, setShowPinwheel] = useState(false);

  const handleButtonClick = () => {
    setShowPinwheel(true);
  };

  const handleProductSelect = (product) => {
    onProductSelect(product);
    setShowPinwheel(false); // Hide pinwheel when product is selected
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <VideoBackground />
      
      {/* Logo in top left corner */}
      <Box
        sx={{
          position: 'absolute',
          top: 24,
          left: 24,
          zIndex: 3,
        }}
      >
        <Box
          component="img"
          src="/logo.jpg"
          alt="Knowledge Pantry Logo"
          onError={(e) => {
            // Hide logo if image fails to load
            e.target.style.display = 'none';
          }}
          sx={{
            width: 350,
            height: 'auto',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
          }}
        />
      </Box>
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <AnimatePresence mode="wait">
          {!showPinwheel ? (
            <CenterButton onClick={handleButtonClick} />
          ) : (
            <PinwheelSelector onProductSelect={handleProductSelect} />
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default LandingPage;
