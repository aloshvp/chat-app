import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvide } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <AuthContextProvide>
    <StrictMode>
      <App />
    </StrictMode>,
  </AuthContextProvide >,
)
