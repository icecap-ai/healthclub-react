import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Reserve.css';

const ReservePage = () => {
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState({
    reservation_date: '',
    reservation_time: '',
    location: '',
    exercise_purpose: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'reservation_time') {
      // 시간 입력값을 10분 단위로 조정
      const [hours, minutes] = value.split(':');
      // 분 단위를 10분 단위로만 허용 (00, 10, 20, 30, 40, 50)
      const roundedMinutes = Math.floor(parseInt(minutes) / 10) * 10;
      const formattedMinutes = roundedMinutes.toString().padStart(2, '0');
      const formattedTime = `${hours}:${formattedMinutes}`;
      
      setReservationData(prev => ({
        ...prev,
        [name]: formattedTime
      }));
    } else {
      setReservationData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: API 연동 시 실제 예약 처리 로직 추가
      console.log('예약 데이터:', reservationData);
      
      // 트레이너 추천 페이지로 이동
      navigate('/trainer-recommendation', { 
        state: { 
          reservationData // 예약 정보를 트레이너 추천 페이지로 전달
        } 
      });
    } catch (error) {
      console.error('처리 중 오류 발생:', error);
      alert('처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <main className="flex-grow container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">예약 진행</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        {/* 예약 날짜 */}
        <div className="mb-4">
          <label htmlFor="reservation-date" className="block font-semibold mb-1">
            예약 날짜
          </label>
          <input
            type="date"
            id="reservation-date"
            name="reservation_date"
            value={reservationData.reservation_date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* 예약 시간 */}
        <div className="mb-4">
          <label htmlFor="reservation-time" className="block font-semibold mb-1">
            예약 시간
          </label>
          <input
            type="time"
            id="reservation-time"
            name="reservation_time"
            value={reservationData.reservation_time}
            onChange={handleChange}
            step="600" // 10분 단위 (600초 = 10분)
            min="09:00"
            max="22:00"
            list="time-options"
            className="w-full border p-2 rounded"
            required
          />
          <datalist id="time-options">
            {Array.from({ length: 24 }, (_, hour) => {
              return Array.from({ length: 6 }, (_, minIndex) => {
                const formattedHour = hour.toString().padStart(2, '0');
                const minutes = (minIndex * 10).toString().padStart(2, '0');
                return `${formattedHour}:${minutes}`;
              });
            }).flat().map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </datalist>
          <small className="text-gray-500 mt-1 block">
            운영 시간: 09:00 - 22:00 (10분 단위 예약)
          </small>
        </div>

        {/* 예약 위치 */}
        <div className="mb-4">
          <label htmlFor="location" className="block font-semibold mb-1">
            예약 위치
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={reservationData.location}
            onChange={handleChange}
            placeholder="예약 위치 입력"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* 운동 목적 */}
        <div className="mb-4">
          <label htmlFor="exercise-purpose" className="block font-semibold mb-1">
            운동 목적
          </label>
          <select
            id="exercise-purpose"
            name="exercise_purpose"
            value={reservationData.exercise_purpose}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">운동 목적 선택</option>
            <option value="weightloss">체중 감량</option>
            <option value="muscle">근력 강화</option>
            <option value="flexibility">유연성 증진</option>
            <option value="endurance">지구력 향상</option>
          </select>
        </div>

        {/* AI 추천 및 예약 버튼 - 스타일 통일 */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          AI 추천 및 예약
        </button>
      </form>

      {/* 예약 목록으로 돌아가기 링크 */}
      <div className="mt-4">
        <Link to="/search" className="text-blue-500 hover:underline">
          ← 예약 목록으로 돌아가기
        </Link>
      </div>
    </main>
  );
};

export default ReservePage; 