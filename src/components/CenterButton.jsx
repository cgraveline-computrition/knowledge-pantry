import React from 'react';
import { Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const CenterButton = ({ onClick }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20,
        duration: 0.6 
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={onClick}
          variant="contained"
          sx={{ 
            px: 6,
            py: 3,
            borderRadius: '50px',
            background: '#14C7E0',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'row',
            gap: 1.5,
            '&:hover': {
              background: '#14C7E0',
              boxShadow: '0 15px 50px rgba(0,0,0, .8)',
            },
          }}
        >
          <RestaurantIcon sx={{ fontSize: 36, color: '#0d6cfaff' }} />
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              fontWeight: 700,
              textTransform: 'none',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
            }}
          >
            Explore Products
          </Typography>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CenterButton;
