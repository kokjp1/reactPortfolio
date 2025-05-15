/* -------------------------------------------------------------------------- */
/*                              import statements                             */
/* -------------------------------------------------------------------------- */

// ─── React ───────────────────────────────────────────

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';

// ─── Styling ─────────────────────────────────────────

import './css/input.css'
import './css/tailwindOutput.css'


// ─── Pages ───────────────────────────────────────────

import App from './App.tsx'

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                     app                                    */
/* -------------------------------------------------------------------------- */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
