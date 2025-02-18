import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Maily } from './core/components/Maily'

import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode><Maily config={{ data: { components: {} }, ui: {} }} />  </StrictMode>,
)
