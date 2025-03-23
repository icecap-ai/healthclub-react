import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TrainerRecommendation.css';

const TrainerRecommendation = () => {
  const navigate = useNavigate();
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // 임시 추천 트레이너 데이터
  const recommendedTrainers = [
    {
      id: 1,
      name: '김태훈',
      image: '/assets/images/trainer1.png',
      specialization: '체중 감량, 근력 강화',
      experience: '7년',
      rating: 4.8,
      reviews: 128,
      description: '체계적인 운동 프로그램과 영양 관리를 통해 목표 달성을 도와드립니다.',
      certifications: ['생활스포츠지도사 2급', 'NSCA-CPT', '기능해부학 전문가'],
      availableTime: '오전 9시 - 오후 6시'
    },
    {
      id: 2,
      name: '이미영',
      image: '/assets/images/trainer2.png',
      specialization: '재활 트레이닝, 자세 교정',
      experience: '5년',
      rating: 4.9,
      reviews: 96,
      description: '개인별 체형 분석을 통한 맞춤형 운동 프로그램을 제공합니다.',
      certifications: ['물리치료사', 'NASM-CPT', '재활운동 전문가'],
      availableTime: '오전 10시 - 오후 7시'
    },
    {
      id: 3,
      name: '박준호',
      image: '/assets/images/trainer3.png',
      specialization: '근력 강화, 보디빌딩',
      experience: '8년',
      rating: 4.7,
      reviews: 157,
      description: '과학적인 트레이닝 방법으로 근육량 증가와 체력 향상을 도와드립니다.',
      certifications: ['스포츠지도사 1급', 'CSCS', '영양학 전문가'],
      availableTime: '오후 1시 - 오후 10시'
    }
  ];

  const handleTrainerSelect = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleConfirmReservation = () => {
    if (!selectedTrainer) {
      alert('트레이너를 선택해주세요.');
      return;
    }
    // TODO: 예약 확정 로직 구현
    alert('예약이 확정되었습니다.');
    navigate('/reservation-confirmation');
  };

  return (
    <main className="trainer-recommendation container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI 트레이너 추천 결과</h1>
      
      <div className="recommendation-intro mb-8">
        <p className="text-lg text-gray-700">
          회원님의 운동 목적과 선호도를 분석하여 최적의 트레이너를 추천해드립니다.
        </p>
      </div>

      <div className="trainers-grid">
        {recommendedTrainers.map(trainer => (
          <div 
            key={trainer.id}
            className={`trainer-card ${selectedTrainer?.id === trainer.id ? 'selected' : ''}`}
            onClick={() => handleTrainerSelect(trainer)}
          >
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
            </div>
            <div className="trainer-info">
              <h3 className="trainer-name">{trainer.name} 트레이너</h3>
              <p className="trainer-specialization">{trainer.specialization}</p>
              <div className="trainer-rating">
                <span className="stars">{'★'.repeat(Math.floor(trainer.rating))}</span>
                <span className="rating-number">{trainer.rating}</span>
                <span className="reviews-count">({trainer.reviews}개의 리뷰)</span>
              </div>
              <div className="trainer-experience">경력: {trainer.experience}</div>
              <p className="trainer-description">{trainer.description}</p>
              <div className="trainer-certifications">
                <h4>자격증:</h4>
                <ul>
                  {trainer.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
              <div className="trainer-availability">
                가능 시간: {trainer.availableTime}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="recommendation-actions">
        <button
          onClick={handleConfirmReservation}
          className="confirm-button"
          disabled={!selectedTrainer}
        >
          예약 확정하기
        </button>
      </div>
    </main>
  );
};

export default TrainerRecommendation; 