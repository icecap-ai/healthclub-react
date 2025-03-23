import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "매찜 덕분에 원하는 시간에 헬스클럽 예약을 쉽게 할 수 있어서 정말 편리합니다!",
      author: "김철수"
    },
    {
      id: 2,
      text: "AI 맞춤 추천 기능이 제 운동 스타일에 딱 맞아 매번 만족스럽게 이용하고 있습니다.",
      author: "이영희"
    }
  ];

  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">이용 후기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="p-6 border rounded shadow">
              <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
              <p className="text-gray-900 font-bold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 text-center">
        <p className="text-gray-700 mb-4">
          더 자세한 서비스 정보를 원하시면 아래 링크를 확인하세요.
        </p>
        <div>
          <Link to="/signup" className="text-blue-500 hover:underline mr-4">
            회원가입
          </Link>
          <Link to="/login" className="text-blue-500 hover:underline mr-4">
            로그인
          </Link>
          <Link to="/service-detail" className="text-blue-500 hover:underline">
            상세 서비스 정보
          </Link>
        </div>
      </section>
    </>
  );
};

export default Testimonials; 