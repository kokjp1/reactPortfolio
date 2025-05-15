import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/input.css'
import './css/tailwindOutput.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
