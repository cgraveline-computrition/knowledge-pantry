import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './components/LandingPage.jsx';
import ProductOverlay from './components/ProductOverlay.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B35',
    },
    secondary: {
      main: '#F7931E',
    },
    background: {
      default: '#FFF8F0',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage onProductSelect={setSelectedProduct} />
      <ProductOverlay 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </ThemeProvider>
  );
}

export default App;
