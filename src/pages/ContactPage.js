import React, { useState } from 'react';
import '../styles/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 문의하기 처리 로직 구현
    console.log('문의하기 제출:', formData);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: '회원가입은 어떻게 하나요?',
      answer: '홈페이지 상단의 "회원가입" 버튼을 클릭하여 이메일, 비밀번호, 이름, 전화번호를 입력하시면 됩니다.'
    },
    {
      question: '헬스장 예약은 어떻게 하나요?',
      answer: '로그인 후 "예약하기" 메뉴에서 원하는 날짜와 시간을 선택하여 예약하실 수 있습니다.'
    },
    {
      question: '예약 취소는 언제까지 가능한가요?',
      answer: '예약 시간 24시간 전까지는 무료로 취소가 가능합니다. 24시간 이내에는 취소 수수료가 발생할 수 있습니다.'
    },
    {
      question: '트레이너 상담은 어떻게 받을 수 있나요?',
      answer: '마이페이지의 "트레이너 상담" 메뉴에서 원하는 트레이너를 선택하고 상담 예약을 할 수 있습니다.'
    },
    {
      question: '결제 방법은 어떤 것이 있나요?',
      answer: '신용카드, 계좌이체, 모바일 결제 등 다양한 결제 방법을 지원합니다.'
    }
  ];

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>고객센터</h1>
        <p>
          MaeZim 고객센터에 오신 것을 환영합니다.
          문의사항이나 불만사항이 있으시면 언제든지 연락해 주세요.
        </p>
      </header>

      <div className="contact-info">
        <div className="info-card">
          <i className="fas fa-phone"></i>
          <h3>전화 상담</h3>
          <p>1544-0000</p>
          <p>평일 09:00 - 18:00</p>
        </div>
        <div className="info-card">
          <i className="fas fa-envelope"></i>
          <h3>이메일</h3>
          <p>support@maezim.com</p>
          <p>24시간 접수 가능</p>
        </div>
        <div className="info-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>주소</h3>
          <p>서울특별시 강남구 테헤란로 123</p>
          <p>MaeZim 빌딩 15층</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>문의하기</h2>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">제목</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">문의내용</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          문의하기
        </button>
      </form>

      <section className="faq-section">
        <h2>자주 묻는 질문</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeFaq === index ? 'active' : ''}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 