import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StorefrontIcon from '@mui/icons-material/Storefront';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const products = [
  { 
    id: 1, 
    name: 'Foodservice Operations', 
    color: '#D94F1E', 
    icon: RestaurantMenuIcon,
    description: 'Manage food production and forecast food supply.',
    links: [
      { 
        name: 'Inventory Connect', 
        url: 'https://www.computrition.com/product-solutions/mobile-floor-stock-software/', 
        demo: 'https://share.vidyard.com/watch/QwPKa3mMQxgyBqoQq3jvyi', 
        specSheet: 'https://computrition.sharepoint.com/sites/Computrition/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FComputrition%2FShared%20Documents%2FComputrition%20Marketing%2FCollateral%2FSpec%20Sheets%2F2025%20Spec%20Sheets&viewid=060d3c71%2D8873%2D4e1b%2D9156%2D3f738e1ccee3&p=true', 
        blog: 'https://www.computrition.com/foodservice-inventory-management-5-benefits-to-consider/',
        documentation: [
          { name: 'User Manual', url: 'https://proddoc.computrition.com/ic/24.2/v/1/Inventory%20Connect%2024.2%20User%20Manual.pdf' },
          { name: 'Release Notes', url: 'https://proddoc.computrition.com/ic/24.2/v/1/Inventory%20Connect%2024.2%20Release%20Notes.pdf' },
          { name: 'CI Connect Installer Notes', url: 'https://proddoc.computrition.com/ic/24.2/v/1/CI%20Connect%20Installer%2024.2%20Release%20Notes.pdf' }
        ]
      },
      { name: 'Operations Connect', url: 'https://www.computrition.com/product-solutions/hospital-tray-tracking-software/', demo: 'https://share.vidyard.com/watch/dZXFQrq8JvrKoF1CTgNhwZ' },
      { name: 'Tray InMotion', url: 'https://www.computrition.com/product-solutions/hospital-tray-tracking-software/', demo: 'https://share.vidyard.com/watch/LuUz86tYJPuXyhvoVDwmmd' },
      { name: 'DataArc', url: 'https://www.computrition.com/product-solutions/foodservice-data-analytics/', demo: 'https://secure.vidyard.com/organizations/210393/players/yyMgg9Wbd7ATntNveMTi1i' },
    ]
  },
  { 
    id: 2, 
    name: 'Nutrition Care', 
    color: '#1B7A8A', 
    icon: LocalHospitalIcon,
    description: 'Serve meals that comply with diet orders and allergy conflicts.',
    links: [
      { name: 'Bedside / Room Service Connect', url: 'https://www.computrition.com/product-solutions/hospital-room-service-software/', demo: 'https://share.vidyard.com/watch/s3XouCUpatGpvTminxDLWU' },
      { name: 'TouchPoint Dining', url: 'https://www.computrition.com/product-solutions/patient-meal-ordering-software/' },
      { name: 'HS onTray', url: 'https://www.computrition.com/product-solutions/patient-self-ordering-software/', demo: 'https://share.vidyard.com/watch/LLjg6puhF8fwcSUMTUjiYd' },
      { name: 'HS HealthCORE', url: 'https://www.computrition.com/product-solutions/healthcore/' },
      { name: 'Label Elite / NFL', url: 'https://www.computrition.com/product-solutions/nutrition-labeling-software/' },
    ]
  },
  { 
    id: 3, 
    name: 'Retail', 
    color: '#E8A020', 
    icon: StorefrontIcon,
    description: 'Promote on-premises dining and streamline throughput.',
    links: [
      { name: 'SPOON', url: 'https://www.computrition.com/product-solutions/online-food-ordering-system/', demo: 'https://secure.vidyard.com/organizations/210393/players/mtisMh4LUR4rdtHCthENf9' },
      { name: 'SuitePoint! Point-of-Sale', url: 'https://www.computrition.com/product-solutions/hospital-point-of-sale-system/' },
      { name: 'SP Express!', url: 'https://www.computrition.com/self-checkout/' },
    ]
  },
  { 
    id: 4, 
    name: 'Data & Integration', 
    color: '#5B3A8C', 
    icon: IntegrationInstructionsIcon,
    description: 'Connect systems, streamline operations.',
    links: [
      { name: 'CI Integrate', url: 'https://www.computrition.com/product-solutions/integrated-technology-solutions/' },
      { name: 'Video Display Gateway', url: 'https://www.computrition.com/product-solutions/integrated-technology-solutions/' },
      { name: 'emPulse Interface', url: 'https://www.computrition.com/product-solutions/integrated-technology-solutions/' },
      { name: 'Learning Subscription Service', url: 'https://www.computrition.com/product-solutions/learning-subscription-service/' },
    ]
  },
];

const PinwheelSelector = ({ onProductSelect }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const totalProducts = products.length;
  const anglePerSection = 360 / totalProducts;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        duration: 0.8 
      }}
      style={{
        position: 'relative',
        width: 500,
        height: 500,
      }}
    >
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {[...products].sort((a, b) => {
          if (a.id === hoveredId) return 1;
          if (b.id === hoveredId) return -1;
          return 0;
        }).map((product) => {
          const index = products.indexOf(product);
          const startAngle = index * anglePerSection - 90;
          const endAngle = (index + 1) * anglePerSection - 90;
          const largeArcFlag = anglePerSection > 180 ? 1 : 0;

          const startRad = (startAngle * Math.PI) / 180;
          const endRad = (endAngle * Math.PI) / 180;

          const x1 = 250 + 225 * Math.cos(startRad);
          const y1 = 250 + 225 * Math.sin(startRad);
          const x2 = 250 + 225 * Math.cos(endRad);
          const y2 = 250 + 225 * Math.sin(endRad);

          const pathData = `
            M 250 250
            L ${x1} ${y1}
            A 225 225 0 ${largeArcFlag} 1 ${x2} ${y2}
            Z
          `;

          return (
            <motion.path
              key={product.id}
              d={pathData}
              fill={product.color}
              fillOpacity={0.85}
              stroke="white"
              strokeWidth="3"
              style={{ cursor: 'pointer' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                fillOpacity: 1,
                strokeWidth: 6,
                zIndex: 1
              }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onProductSelect(product)}
            />
          );
        })}
      </svg>

      {products.map((product, index) => {
        const angle = (index * anglePerSection + anglePerSection / 2 - 90) * (Math.PI / 180);
        // Adjust for larger pie size
        const centerRadius = 150;
        const x = 250 + centerRadius * Math.cos(angle);
        const y = 250 + centerRadius * Math.sin(angle);
        const Icon = product.icon;

        return (
          <motion.div
            key={`icon-${product.id}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            style={{
              position: 'absolute',
              left: x - 45,
              top: y - 40,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              width: 85,
              maxWidth: 85,
            }}
          >
            <Icon sx={{ fontSize: 36, color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
            <Typography
              variant="caption"
              sx={{
                color: 'white',
                fontWeight: 700,
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                fontSize: '0.8rem',
                lineHeight: 1.15,
                wordBreak: 'break-word',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {product.name}
            </Typography>
          </motion.div>
        );
      })}

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 700, color: '#FF6B35', textAlign: 'center' }}>
          Select
        </Typography>
      </Box>
    </motion.div>
  );
};

export default PinwheelSelector;
