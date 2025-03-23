import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    // TODO: 로그인 처리 로직 구현
    console.log('로그인 시도:', formData);
  };

  const handleSocialLogin = (provider) => {
    // TODO: 소셜 로그인 처리 로직 구현
    console.log(`${provider} 로그인 시도`);
  };

  return (
    <div className="login-container">
      <h1>MaeZim 로그인</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
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
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">로그인</button>
      </form>

      <div className="social-login">
        <h2>간편 로그인</h2>
        <button
          type="button"
          className="gmail-login"
          onClick={() => handleSocialLogin('google')}
        >
          <img
            src={process.env.PUBLIC_URL + '/assets/images/goggle.png'}
            alt="Google"
          />
          Google 로그인
        </button>
        <button
          type="button"
          className="kakao-login"
          onClick={() => handleSocialLogin('kakao')}
        >
          <img
            src={process.env.PUBLIC_URL + '/assets/images/kakao.png'}
            alt="Kakao"
          />
          카카오 로그인
        </button>
        <button
          type="button"
          className="naver-login"
          onClick={() => handleSocialLogin('naver')}
        >
          <img
            src={process.env.PUBLIC_URL + '/assets/images/naver.png'}
            alt="Naver"
          />
          네이버 로그인
        </button>
      </div>

      <div className="extra-links">
        <Link to="/find-password">비밀번호 찾기</Link> |
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default LoginPage; 