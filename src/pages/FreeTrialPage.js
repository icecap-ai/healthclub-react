import React, { useState } from 'react';

function FreeTrialPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: ''
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
    alert('무료체험 신청이 완료되었습니다.');
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  };

  const benefitBoxStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '30px'
  };

  const benefitItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px'
  };

  const checkMarkStyle = {
    color: '#007bff',
    marginRight: '10px',
    fontSize: '20px'
  };

  return (
    <div style={containerStyle}>
      {/* 혜택 섹션 */}
      <div style={benefitBoxStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#333' }}>
          무료체험 혜택
        </h2>
        
        <div style={{ marginBottom: '30px' }}>
          <div style={benefitItemStyle}>
            <span style={checkMarkStyle}>✓</span>
            <div>
              <h3 style={{ margin: '0', fontSize: '18px' }}>1:1 맞춤 트레이닝</h3>
              <p style={{ margin: '5px 0 0 0', color: '#666' }}>전문 트레이너의 체계적인 1:1 맞춤 프로그램 체험</p>
            </div>
          </div>

          <div style={benefitItemStyle}>
            <span style={checkMarkStyle}>✓</span>
            <div>
              <h3 style={{ margin: '0', fontSize: '18px' }}>체성분 분석</h3>
              <p style={{ margin: '5px 0 0 0', color: '#666' }}>정확한 체성분 측정 및 전문가 분석 제공</p>
            </div>
          </div>

          <div style={benefitItemStyle}>
            <span style={checkMarkStyle}>✓</span>
            <div>
              <h3 style={{ margin: '0', fontSize: '18px' }}>운동 목표 상담</h3>
              <p style={{ margin: '5px 0 0 0', color: '#666' }}>개인별 목표 설정 및 맞춤형 운동 계획 수립</p>
            </div>
          </div>

          <div style={benefitItemStyle}>
            <span style={checkMarkStyle}>✓</span>
            <div>
              <h3 style={{ margin: '0', fontSize: '18px' }}>시설 이용 안내</h3>
              <p style={{ margin: '5px 0 0 0', color: '#666' }}>최신 운동 시설 및 편의시설 이용 방법 안내</p>
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', color: '#007bff', fontWeight: 'bold', margin: '0' }}>
          지금 신청하고 특별한 혜택을 경험해보세요!
        </p>
      </div>

      {/* 신청 폼 섹션 */}
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>무료체험 신청</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>이름 *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>연락처 *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label htmlFor="preferredDate" style={{ display: 'block', marginBottom: '5px' }}>희망 날짜 *</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label htmlFor="preferredTime" style={{ display: 'block', marginBottom: '5px' }}>희망 시간 *</label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          >
            <option value="">시간을 선택해주세요</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>
        </div>

        <button 
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          무료체험 신청하기
        </button>
      </form>
    </div>
  );
}

export default FreeTrialPage; 