import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyPage.css';

const MyPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // 임시 사용자 데이터
  const userData = {
    name: '홍길동',
    email: 'hong@example.com',
    membershipLevel: 'GOLD',
    points: 2800,
    profileImage: '/assets/images/profile-default.jpg',
    joinDate: '2024-01-15'
  };

  // 임시 예약 데이터
  const reservations = [
    {
      id: 'RSV-2024-0321-001',
      date: '2024-03-21',
      time: '14:00',
      trainer: '김태훈',
      location: 'MaeZim Fitness 강남점',
      status: '예약 완료'
    },
    {
      id: 'RSV-2024-0318-002',
      date: '2024-03-18',
      time: '10:00',
      trainer: '이미영',
      location: 'MaeZim Fitness 홍대점',
      status: '완료'
    }
  ];

  // 임시 운동 기록 데이터
  const workoutHistory = [
    {
      date: '2024-03-18',
      type: '근력 운동',
      duration: '60분',
      trainer: '이미영',
      notes: '상체 운동 집중, 벤치프레스 PR 달성'
    }
  ];

  return (
    <main className="mypage container mx-auto p-4">
      {/* 프로필 헤더 */}
      <div className="profile-header">
        <div className="profile-image">
          <img src={userData.profileImage} alt={userData.name} />
          <button className="edit-profile-btn">수정</button>
        </div>
        <div className="profile-info">
          <h1>{userData.name}</h1>
          <p className="email">{userData.email}</p>
          <div className="membership-info">
            <span className="level">{userData.membershipLevel}</span>
            <span className="points">{userData.points} P</span>
          </div>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="tab-menu">
        <button
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          프로필
        </button>
        <button
          className={`tab-btn ${activeTab === 'reservations' ? 'active' : ''}`}
          onClick={() => setActiveTab('reservations')}
        >
          예약 내역
        </button>
        <button
          className={`tab-btn ${activeTab === 'workout' ? 'active' : ''}`}
          onClick={() => setActiveTab('workout')}
        >
          운동 기록
        </button>
        <button
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          설정
        </button>
      </div>

      {/* 탭 컨텐츠 */}
      <div className="tab-content">
        {activeTab === 'profile' && (
          <div className="profile-section">
            <h2>회원 정보</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="label">이름</span>
                <span className="value">{userData.name}</span>
              </div>
              <div className="info-item">
                <span className="label">이메일</span>
                <span className="value">{userData.email}</span>
              </div>
              <div className="info-item">
                <span className="label">가입일</span>
                <span className="value">{userData.joinDate}</span>
              </div>
              <div className="info-item">
                <span className="label">회원 등급</span>
                <span className="value">{userData.membershipLevel}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reservations' && (
          <div className="reservations-section">
            <h2>예약 내역</h2>
            <div className="reservations-list">
              {reservations.map(reservation => (
                <div key={reservation.id} className="reservation-item">
                  <div className="reservation-status">
                    <span className={`status-badge ${reservation.status.replace(' ', '-')}`}>
                      {reservation.status}
                    </span>
                  </div>
                  <div className="reservation-info">
                    <h3>{reservation.location}</h3>
                    <p>{reservation.date} {reservation.time}</p>
                    <p>트레이너: {reservation.trainer}</p>
                  </div>
                  <div className="reservation-actions">
                    <Link to={`/reservation-confirmation/${reservation.id}`}>
                      상세보기
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'workout' && (
          <div className="workout-section">
            <h2>운동 기록</h2>
            <div className="workout-list">
              {workoutHistory.map((workout, index) => (
                <div key={index} className="workout-item">
                  <div className="workout-date">{workout.date}</div>
                  <div className="workout-details">
                    <h3>{workout.type}</h3>
                    <p>시간: {workout.duration}</p>
                    <p>트레이너: {workout.trainer}</p>
                    <p className="workout-notes">{workout.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings-section">
            <h2>설정</h2>
            <div className="settings-list">
              <button className="settings-btn">개인정보 수정</button>
              <button className="settings-btn">비밀번호 변경</button>
              <button className="settings-btn">알림 설정</button>
              <button className="settings-btn danger">회원 탈퇴</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPage; 