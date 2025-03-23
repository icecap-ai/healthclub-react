import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            매짐
          </Link>

          {/* 중앙 메뉴 */}
          <div className="flex items-center space-x-8">
            <Link to="/service-detail" className="hover:text-blue-600">
              서비스 소개
            </Link>
            <Link to="/search" className="hover:text-blue-600">
              헬스장 찾기
            </Link>
            <Link to="/trainers" className="hover:text-blue-600">
              트레이너
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              고객센터
            </Link>
            <Link to="/b2b" className="hover:text-blue-600">
              기업 고객
            </Link>
          </div>

          {/* 우측 계정 메뉴 */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hover:text-blue-600">
              로그인
            </Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              회원가입
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header; 