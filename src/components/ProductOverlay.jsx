import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductOverlay = ({ product, onClose }) => {
  if (!product) return null;

  const Icon = product.icon;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={onClose}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
            }}
          />

          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              zIndex: 1001,
            }}
          >
            <Box
              sx={{
                background: 'white',
                borderRadius: 4,
                padding: 6,
                maxWidth: 600,
                width: '90vw',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                position: 'relative',
              }}
            >
              <IconButton
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: 'grey.600',
                }}
              >
                <CloseIcon />
              </IconButton>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: product.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: product.color }}>
                  {product.name}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, color: 'grey.700', lineHeight: 1.8 }}>
                {product.description}
              </Typography>

              {product.links && product.links.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'grey.800' }}>
                    Products & Resources
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {product.links.map((link, index) => (
                      <Box 
                        key={index}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 2,
                          p: 3,
                          borderRadius: 3,
                          background: 'rgba(0, 0, 0, 0.02)',
                          border: '1px solid rgba(0, 0, 0, 0.06)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            background: 'rgba(0, 0, 0, 0.04)',
                            borderColor: 'rgba(0, 0, 0, 0.1)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                          }
                        }}
                      >
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 500, 
                            color: 'grey.700',
                            flex: 1,
                            fontSize: '0.95rem',
                          }}
                        >
                          {link.name}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                          {link.url && (
                            <Button
                              size="small"
                              variant="outlined"
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                borderColor: `${product.color}60`,
                                color: product.color,
                                textTransform: 'none',
                                fontSize: '0.75rem',
                                minWidth: 'auto',
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                                '&:hover': {
                                  borderColor: product.color,
                                  background: `${product.color}08`,
                                },
                              }}
                            >
                              Info
                            </Button>
                          )}
                          {link.demo && (
                            <Button
                              size="small"
                              variant="contained"
                              href={link.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                background: `${product.color}dd`,
                                textTransform: 'none',
                                fontSize: '0.75rem',
                                minWidth: 'auto',
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                                boxShadow: 'none',
                                '&:hover': {
                                  background: product.color,
                                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                },
                              }}
                            >
                              Demo
                            </Button>
                          )}
                          {link.specSheet && (
                            <Button
                              size="small"
                              variant="outlined"
                              href={link.specSheet}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                borderColor: `${product.color}60`,
                                color: product.color,
                                textTransform: 'none',
                                fontSize: '0.75rem',
                                minWidth: 'auto',
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                                '&:hover': {
                                  borderColor: product.color,
                                  background: `${product.color}08`,
                                },
                              }}
                            >
                              Spec Sheet
                            </Button>
                          )}
                          {link.caseStudy && (
                            <Button
                              size="small"
                              variant="outlined"
                              href={link.caseStudy}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                borderColor: `${product.color}60`,
                                color: product.color,
                                textTransform: 'none',
                                fontSize: '0.75rem',
                                minWidth: 'auto',
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                                '&:hover': {
                                  borderColor: product.color,
                                  background: `${product.color}08`,
                                },
                              }}
                            >
                              Case Study
                            </Button>
                          )}
                          {link.blog && (
                            <Button
                              size="small"
                              variant="outlined"
                              href={link.blog}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                borderColor: `${product.color}60`,
                                color: product.color,
                                textTransform: 'none',
                                fontSize: '0.75rem',
                                minWidth: 'auto',
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                                '&:hover': {
                                  borderColor: product.color,
                                  background: `${product.color}08`,
                                },
                              }}
                            >
                              Blog
                            </Button>
                          )}
                        </Box>
                      </Box>
                    ))}
                    
                    {/* Display documentation links if available */}
                    {product.links.some(link => link.documentation) && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'grey.700', fontSize: '0.85rem' }}>
                          Documentation
                        </Typography>
                        {product.links.filter(link => link.documentation).map((link, linkIndex) => 
                          link.documentation.map((doc, docIndex) => (
                            <Box 
                              key={`${linkIndex}-${docIndex}`}
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: 2,
                                p: 2,
                                mb: 1,
                                borderRadius: 2,
                                background: 'rgba(0, 0, 0, 0.02)',
                                border: '1px solid rgba(0, 0, 0, 0.06)',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  background: 'rgba(0, 0, 0, 0.04)',
                                  borderColor: 'rgba(0, 0, 0, 0.1)',
                                  transform: 'translateY(-1px)',
                                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                },
                              }}
                            >
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  fontWeight: 500, 
                                  color: 'grey.700',
                                  flex: 1,
                                  fontSize: '0.9rem',
                                }}
                              >
                                {doc.name}
                              </Typography>
                              <Button
                                size="small"
                                variant="outlined"
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  borderColor: `${product.color}60`,
                                  color: product.color,
                                  textTransform: 'none',
                                  fontSize: '0.75rem',
                                  minWidth: 'auto',
                                  px: 2,
                                  py: 0.5,
                                  borderRadius: 2,
                                  '&:hover': {
                                    borderColor: product.color,
                                    background: `${product.color}08`,
                                  },
                                }}
                              >
                                Download PDF
                              </Button>
                            </Box>
                          ))
                        )}
                      </Box>
                    )}
                  </Box>
                </Box>
              )}

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="outlined"
                  onClick={onClose}
                  sx={{
                    borderColor: product.color,
                    color: product.color,
                    '&:hover': {
                      borderColor: product.color,
                      background: `${product.color}10`,
                    },
                    textTransform: 'none',
                    px: 3,
                    py: 1.5,
                  }}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductOverlay;
