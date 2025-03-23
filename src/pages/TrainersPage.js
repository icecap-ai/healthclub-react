import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Trainers.css';

const TrainersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  // 임시 트레이너 데이터
  const trainers = [
    {
      id: 1,
      name: '김태훈',
      image: '/assets/images/trainer1.png',
      specialty: ['체중 감량', '근력 강화'],
      experience: '7년',
      rating: 4.8,
      reviews: 128,
      description: '체계적인 운동 프로그램과 영양 관리를 통해 목표 달성을 도와드립니다.',
      certifications: ['생활스포츠지도사 2급', 'NSCA-CPT', '기능해부학 전문가'],
      schedule: '오전 9시 - 오후 6시'
    },
    {
      id: 2,
      name: '이미영',
      image: '/assets/images/trainer2.png',
      specialty: ['재활 트레이닝', '자세 교정'],
      experience: '5년',
      rating: 4.9,
      reviews: 96,
      description: '개인별 체형 분석을 통한 맞춤형 운동 프로그램을 제공합니다.',
      certifications: ['물리치료사', 'NASM-CPT', '재활운동 전문가'],
      schedule: '오전 10시 - 오후 7시'
    },
    {
      id: 3,
      name: '박준호',
      image: '/assets/images/trainer3.png',
      specialty: ['근력 강화', '보디빌딩'],
      experience: '8년',
      rating: 4.7,
      reviews: 157,
      description: '과학적인 트레이닝 방법으로 근육량 증가와 체력 향상을 도와드립니다.',
      certifications: ['스포츠지도사 1급', 'CSCS', '영양학 전문가'],
      schedule: '오후 1시 - 오후 10시'
    }
  ];

  // 전문 분야 필터링 옵션
  const specialties = [
    { value: 'all', label: '전체' },
    { value: 'weight-loss', label: '체중 감량' },
    { value: 'strength', label: '근력 강화' },
    { value: 'rehabilitation', label: '재활 트레이닝' },
    { value: 'posture', label: '자세 교정' },
    { value: 'bodybuilding', label: '보디빌딩' }
  ];

  // 트레이너 필터링
  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            trainer.specialty.some(s => s.toLowerCase().includes(selectedSpecialty));
    return matchesSearch && matchesSpecialty;
  });

  return (
    <main className="trainers-page container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">트레이너 소개</h1>

      {/* 검색 및 필터 섹션 */}
      <div className="search-filter-section">
        <input
          type="text"
          placeholder="트레이너 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="specialty-select"
        >
          <option value="all">전체</option>
          {specialties.map(specialty => (
            <option key={specialty.value} value={specialty.value}>
              {specialty.label}
            </option>
          ))}
        </select>
      </div>

      {/* 트레이너 목록 */}
      <div className="trainers-grid">
        {filteredTrainers.map(trainer => (
          <div key={trainer.id} className="trainer-card">
            <img 
              src={trainer.image} 
              alt={trainer.name} 
              className="trainer-image"
            />
            <div className="trainer-content">
              <div className="trainer-header">
                <h3 className="trainer-name">{trainer.name} 트레이너</h3>
                <div className="trainer-rating">
                  <span className="stars">{'★'.repeat(Math.floor(trainer.rating))}</span>
                  <span className="rating-score">{trainer.rating}</span>
                  <span className="review-count">({trainer.reviews}개의 리뷰)</span>
                </div>
              </div>

              <div className="trainer-badges">
                <span className="badge badge-experience">경력 {trainer.experience}</span>
                {trainer.certifications.map((cert, index) => (
                  <span key={index} className="badge badge-cert">{cert}</span>
                ))}
              </div>

              <div className="trainer-schedule">
                상담 가능 시간: {trainer.schedule}
              </div>

              <p className="trainer-description">{trainer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TrainersPage; 