import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../routes/Layout';


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Layout/>}>
      <Route index={true} path="/" element={<App />} />
    </Route>
</Routes>
</BrowserRouter>
)
