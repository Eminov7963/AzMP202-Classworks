import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoritesProvider from './context/Favoritest'
import ThemaProvider from './context/Team/index.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemaProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ThemaProvider>
  </BrowserRouter>
);
