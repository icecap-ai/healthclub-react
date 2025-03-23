import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const AboutPage = () => {
  const features = [
    {
      icon: process.env.PUBLIC_URL + '/assets/images/feature1.png',
      title: '편리한 예약 시스템',
      description: '24시간 언제든지 원하는 시간에 헬스장을 예약할 수 있습니다.'
    },
    {
      icon: process.env.PUBLIC_URL + '/assets/images/feature2.png',
      title: '다양한 운동 프로그램',
      description: '요가, 필라테스, 스피닝 등 다양한 운동 프로그램을 제공합니다.'
    },
    {
      icon: process.env.PUBLIC_URL + '/assets/images/feature3.png',
      title: '전문 트레이너 상담',
      description: '경험 많은 트레이너들이 맞춤형 운동 프로그램을 제안합니다.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: '회원가입',
      description: '간단한 회원가입으로 MaeZim의 모든 서비스를 이용할 수 있습니다.'
    },
    {
      number: 2,
      title: '프로그램 선택',
      description: '원하는 운동 프로그램을 선택하고 시간을 예약합니다.'
    },
    {
      number: 3,
      title: '운동 시작',
      description: '예약한 시간에 헬스장을 방문하여 운동을 시작합니다.'
    }
  ];

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>MaeZim과 함께 건강한 라이프스타일을 시작하세요</h1>
        <p>
          MaeZim은 당신의 건강한 삶을 위한 최고의 파트너입니다.
          편리한 예약 시스템과 전문적인 트레이너의 가이드로
          당신의 피트니스 목표 달성을 도와드립니다.
        </p>
      </section>

      <section className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="how-it-works">
        <h2>이용 방법</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>지금 바로 시작하세요</h2>
        <p>MaeZim과 함께 건강한 라이프스타일을 만들어보세요.</p>
        <Link to="/signup" className="cta-button">
          무료 회원가입
        </Link>
      </section>
    </div>
  );
};

export default AboutPage; 