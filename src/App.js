import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';
import ReservePage from './pages/ReservePage';
import TrainerRecommendation from './pages/TrainerRecommendation';
import ReservationConfirmation from './pages/ReservationConfirmation';
import MyPage from './pages/MyPage';
import TrainersPage from './pages/TrainersPage';
import DashboardPage from './pages/DashboardPage';
import FreeTrialPage from './pages/FreeTrialPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import B2BPage from './pages/B2BPage';
import './App.css';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/profile" element={<div>마이 페이지</div>} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/b2b" element={<B2BPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/trainer-recommendation" element={<TrainerRecommendation />} />
          <Route path="/reservation-confirmation" element={<ReservationConfirmation />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/free-trial" element={<FreeTrialPage />} />
          <Route path="/service-detail" element={<ServiceDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 