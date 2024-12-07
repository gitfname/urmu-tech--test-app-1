import { init } from "@telegram-apps/sdk"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

init()

createRoot(document.getElementById('root')!).render(
  <App />
)
