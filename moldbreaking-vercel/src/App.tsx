import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BrainWaveBackground from './components/BrainWaveBackground';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Brands from './pages/Brands';
import Creators from './pages/Creators';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark overflow-x-hidden">
        {/* Brain Wave Background */}
        <BrainWaveBackground />
        
        {/* Custom Cursor (Desktop Only) */}
        <CustomCursor />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/ai" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* 事業ページ */}
            <Route path="/brands" element={<Brands />} />
            <Route path="/creators" element={<Creators />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
