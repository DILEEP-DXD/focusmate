import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StudyToolsPage from './pages/StudyToolsPage';
import BreakZonePage from './pages/BreakZonePage';
import DashboardPage from './pages/DashboardPage';
import AboutUsPage from './pages/AboutUsPage';
import AuthFormPopup from './components/AuthFormPopup';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  const location = useLocation();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // State to simulate login status for front-end design purposes
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  // Simulated login for front-end design
  const handleLogin = (email: string, password: string) => {
    console.log('App: handleLogin called with email:', email, 'and password:', password);
   
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
      closePopup();
    } else {
      alert('Simulated login failed. Use user@example.com and password'); // Simple feedback
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-[var(--background-start-rgb)] to-[var(--background-end-rgb)] text-[var(--text-color)]">
        <Navbar onGetStartedClick={openPopup} onLoginClick={openPopup} />
        
        <main className="pt-40">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/study-tools" element={<StudyToolsPage />} />
            <Route path="/break-zone" element={<BreakZonePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* <Route path="/mood-tracker" element={<MoodTrackerPage />} /> */}
            {/* Add more routes for other pages here */}
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
        <AuthFormPopup isVisible={isPopupVisible} onClose={closePopup} onLogin={handleLogin} />
      </div>
    </ThemeProvider>
  );
};

export default App; 