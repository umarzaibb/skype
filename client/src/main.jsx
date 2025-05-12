import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import LandingPage from './components/landingPage/landingPage';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
)
