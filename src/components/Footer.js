import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 매찜. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/about" className="text-sm hover:underline">서비스 소개</Link>
          <Link to="/terms" className="text-sm hover:underline">이용약관</Link>
          <Link to="/privacy" className="text-sm hover:underline">개인정보처리방침</Link>
          <Link to="/contact" className="text-sm hover:underline">고객센터</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 