import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <HelmetProvider>
        <RouterProvider router={routes} />
      </HelmetProvider>
    </ChakraProvider>
  </StrictMode>,
)
