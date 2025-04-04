import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App.tsx';
import { system } from './theme.ts'; // Import hệ thống theme tùy chỉnh

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
