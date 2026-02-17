import { useState } from 'react';
import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
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
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}
      >
        <Box
          component="img"
          src={`${import.meta.env.BASE_URL}kp-logo.png`}
          alt="Knowledge Pantry Logo"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
          sx={{
            width: 280,
            height: 'auto',
            display: 'block',
            objectFit: 'fill',
            backgroundColor: 'rgba(255,255,255, .9)',
            padding: '20px 30px'
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
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '15vh',
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
