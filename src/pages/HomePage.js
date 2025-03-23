import React from 'react';
import MainBanner from '../components/MainBanner';
import ServiceIntro from '../components/ServiceIntro';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="flex-grow container mx-auto p-4">
      <MainBanner />
      <ServiceIntro />
      <Partners />
      <Testimonials />
      <Link to="/service-detail" className="...">
        상세 서비스 정보
      </Link>
    </main>
  );
};

export default HomePage; 