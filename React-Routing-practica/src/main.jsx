import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Favoritest from './context/Favoritest'
import { HelmetProvider } from 'react-helmet-async';
import BasketProvider from './context/Basket'
createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <BasketProvider>
        <Favoritest>
          <App />
        </Favoritest>
      </BasketProvider>
    </BrowserRouter>
  </HelmetProvider>,
)
