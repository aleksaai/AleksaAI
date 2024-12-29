import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ToolsPage } from './pages/ToolsPage';
import { Nav } from './components/ui/Nav';
import { Footer } from './components/ui/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        {/* Only show Nav on desktop */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}