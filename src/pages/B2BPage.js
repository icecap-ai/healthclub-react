import React, { useState } from 'react';

function B2BPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출된 데이터:', formData);
    alert('문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">기업 고객 전용 페이지</h1>

        {/* 기업 멤버십 소개 섹션 */}
        <section className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-2xl font-bold mb-4">기업 멤버십 프로그램 소개</h2>
          <p className="text-gray-700 mb-4">
            매짐의 기업 멤버십 프로그램은 기업 직원들의 건강 증진과 복지 향상을 위해 설계되었습니다. 
            다양한 헬스클럽 이용 옵션과 맞춤형 예약 서비스를 제공하며, 기업의 효율적인 건강관리 솔루션을 지원합니다.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>기업 맞춤형 단체 할인 및 멤버십 옵션 제공</li>
            <li>직원 건강 데이터를 기반으로 한 맞춤 추천 서비스</li>
            <li>예약 시스템 통합 및 실시간 헬스클럽 현황 제공</li>
            <li>전담 상담 및 고객 지원 서비스</li>
          </ul>
        </section>

        {/* 상담/문의 폼 섹션 */}
        <section className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-2xl font-bold mb-4">상담 및 문의</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block font-semibold mb-1">
                기업명
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="기업명 입력"
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block font-semibold mb-1">
                담당자명
              </label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="담당자명 입력"
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일 입력"
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                연락처
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="연락처 입력"
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                문의 내용
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="문의 내용을 입력하세요"
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded font-semibold hover:bg-blue-600"
            >
              문의하기
            </button>
          </form>
        </section>

        {/* 추가 정보 섹션 */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">추가 정보</h2>
          <p className="text-gray-700">
            문의 접수 후, 담당자가 1-2영업일 이내에 연락드립니다.
          </p>
        </section>
      </main>
    </div>
  );
}

export default B2BPage; 