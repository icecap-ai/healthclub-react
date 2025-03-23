import React from 'react';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <section
      className="bg-cover bg-center h-80"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/gym-banner.jpg)`
      }}
    >
      <div className="bg-black bg-opacity-60 h-full flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-4">
          AI 기반 헬스클럽 공유 플랫폼
        </h1>
        <p className="text-white text-xl mb-6">
          실시간 예약 & 스마트 매칭, 지금 바로 경험하세요!
        </p>
        <div>
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            지금 시작하기
          </Link>
          <Link
            to="/free-trial"
            className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded"
          >
            무료 체험
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainBanner; 