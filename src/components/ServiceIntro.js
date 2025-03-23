import React from 'react';

const ServiceIntro = () => {
  const services = [
    {
      title: 'AI 맞춤 추천',
      description: '사용자의 운동 패턴과 목표를 분석하여 최적의 헬스클럽과 트레이너를 추천합니다.'
    },
    {
      title: '실시간 예약 시스템',
      description: '현재 예약 가능한 시간대를 실시간으로 확인하고 예약할 수 있습니다.'
    },
    {
      title: '스마트 매칭 & 후기',
      description: '추천 헬스클럽 카드와 이용자 후기를 통해 현명한 선택을 할 수 있습니다.'
    }
  ];

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">서비스 소개</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceIntro; 