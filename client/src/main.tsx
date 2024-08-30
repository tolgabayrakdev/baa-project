import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import Loading from './components/Loading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <HelmetProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={routes} />
        </Suspense>
      </HelmetProvider>
    </ChakraProvider>
  </StrictMode>,
)
