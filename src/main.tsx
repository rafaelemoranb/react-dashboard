import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerLicense } from '@syncfusion/ej2-base'
import './index.css'
import App from './App.tsx'

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpRGtGfV5yd0VBalhVTndXUj0eQnxTdEZiWH5fcX1RQmFUV0N3Ww==')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
