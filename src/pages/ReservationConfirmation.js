import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/ReservationConfirmation.css';

const ReservationConfirmation = () => {
  // 실제 구현 시에는 API로 예약 정보를 받아올 것입니다
  const reservation = {
    id: 'RSV-2024-0321-001',
    status: '예약 완료',
    date: '2024-03-21',
    time: '14:00',
    location: 'MaeZim Fitness 강남점',
    trainer: {
      name: '김태훈',
      image: '/assets/images/trainer1.png',
      phone: '010-1234-5678',
      specialization: '체중 감량, 근력 강화'
    },
    preparationItems: [
      '운동복 및 실내용 운동화',
      '세면도구',
      '수건',
      '물통'
    ],
    precautions: [
      '운동 시작 30분 전 도착 권장',
      '식사는 운동 2시간 전에 완료',
      '운동 전 충분한 수분 섭취',
      '컨디션이 좋지 않을 경우 트레이너와 상담'
    ]
  };

  return (
    <main className="reservation-confirmation container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">예약 확인</h1>

      {/* 예약 상태 배지 */}
      <div className="status-badge">
        <span className={`status ${reservation.status === '예약 완료' ? 'completed' : ''}`}>
          {reservation.status}
        </span>
      </div>

      {/* 예약 정보 카드 */}
      <div className="reservation-card">
        <div className="reservation-header">
          <h2>예약 번호: {reservation.id}</h2>
          <div className="reservation-actions">
            <button className="btn-modify">예약 변경</button>
            <button className="btn-cancel">예약 취소</button>
            <button className="btn-calendar">캘린더에 추가</button>
          </div>
        </div>

        <div className="reservation-details">
          <div className="detail-item">
            <span className="label">날짜</span>
            <span className="value">{reservation.date}</span>
          </div>
          <div className="detail-item">
            <span className="label">시간</span>
            <span className="value">{reservation.time}</span>
          </div>
          <div className="detail-item">
            <span className="label">위치</span>
            <span className="value">{reservation.location}</span>
          </div>
        </div>

        {/* 트레이너 정보 */}
        <div className="trainer-section">
          <h3>담당 트레이너</h3>
          <div className="trainer-info">
            <img src={reservation.trainer.image} alt={reservation.trainer.name} />
            <div className="trainer-details">
              <h4>{reservation.trainer.name} 트레이너</h4>
              <p>{reservation.trainer.specialization}</p>
              <p>연락처: {reservation.trainer.phone}</p>
            </div>
          </div>
        </div>

        {/* 준비물 및 주의사항 */}
        <div className="preparation-section">
          <div className="preparation-items">
            <h3>준비물</h3>
            <ul>
              {reservation.preparationItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="precautions">
            <h3>주의사항</h3>
            <ul>
              {reservation.precautions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <div className="bottom-navigation">
        <Link to="/mypage" className="btn-mypage">
          예약 내역 전체보기
        </Link>
      </div>
    </main>
  );
};

export default ReservationConfirmation; 