import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import Layout from '../routes/Layout';
import DetailView from '../routes/DetailView';
import NotFound from '../routes/NotFound';
import './index.css'



createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Layout/>}>
      <Route index={true} path="/" element={<App />} />
      <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
    </Route>
    <Route
      path="*"
      element={ <NotFound /> }
    />
</Routes>
</BrowserRouter>
)
