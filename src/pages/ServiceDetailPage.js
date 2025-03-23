import React from 'react';
import { Link } from 'react-router-dom';

function ServiceDetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4">
        {/* 서비스 소개 헤더 */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">매짐 서비스 소개</h1>
          <p className="text-xl text-gray-600">
            언제 어디서나, 당신의 운동을 더 스마트하게
          </p>
        </section>

        {/* 주요 서비스 특징 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">주요 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">스마트한 헬스장 검색</h3>
              <p className="text-gray-600">
                위치, 가격, 시설을 고려한 맞춤형 헬스장 추천 시스템으로 최적의 운동 공간을 찾아보세요.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">간편한 예약 시스템</h3>
              <p className="text-gray-600">
                복잡한 절차 없이 원하는 시간에 편리하게 예약하고 이용하실 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">전문 트레이너 매칭</h3>
              <p className="text-gray-600">
                검증된 전문 트레이너와의 1:1 매칭으로 효과적인 운동을 시작하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 이용 방법 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">이용 방법</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-500 mb-2">01</div>
              <h3 className="font-bold mb-2">회원가입</h3>
              <p className="text-gray-600">간단한 정보 입력으로 시작하세요</p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-500 mb-2">02</div>
              <h3 className="font-bold mb-2">헬스장 검색</h3>
              <p className="text-gray-600">원하는 조건의 헬스장을 찾아보세요</p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-500 mb-2">03</div>
              <h3 className="font-bold mb-2">예약하기</h3>
              <p className="text-gray-600">원하는 시간에 예약하세요</p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-500 mb-2">04</div>
              <h3 className="font-bold mb-2">이용하기</h3>
              <p className="text-gray-600">편리하게 운동을 즐기세요</p>
            </div>
          </div>
        </section>

        {/* 서비스 혜택 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">서비스 혜택</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                <span>다양한 제휴 헬스장 할인 혜택</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                <span>첫 이용 시 무료 PT 체험권 제공</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                <span>정기 이용자 대상 추가 할인 혜택</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                <span>월별 다양한 이벤트 및 프로모션</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 시작하기 버튼 */}
        <div className="text-center">
          <Link
            to="/signup"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
          >
            지금 시작하기
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ServiceDetailPage; 