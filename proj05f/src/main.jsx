import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Start from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Start />
  </StrictMode>,
)
