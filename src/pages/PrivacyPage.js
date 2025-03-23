import React from 'react';
import '../styles/Terms.css';

const PrivacyPage = () => {
  return (
    <div className="terms-container">
      <header className="terms-header">
        <h1>개인정보처리방침</h1>
        <p>마지막 수정일: 2024년 3월 21일</p>
      </header>

      <section className="terms-section">
        <h2>1. 개인정보의 처리 목적</h2>
        <p>
          MaeZim(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리합니다.
          처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
          이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등
          필요한 조치를 이행할 예정입니다.
        </p>
        <div className="highlight">
          <p>
            회사는 헬스장 예약 및 운동 프로그램 관리 서비스 제공을 위해
            다음과 같은 개인정보를 수집 및 처리합니다:
          </p>
          <ul>
            <li>회원가입 및 서비스 이용 계약의 이행</li>
            <li>헬스장 예약 및 운동 프로그램 관리</li>
            <li>트레이너 상담 및 맞춤형 운동 프로그램 제공</li>
            <li>서비스 이용에 따른 본인확인, 연령확인, 불만처리 등 민원처리</li>
          </ul>
        </div>
      </section>

      <section className="terms-section">
        <h2>2. 수집하는 개인정보 항목</h2>
        <p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:</p>
        <ul>
          <li>필수항목: 이메일, 비밀번호, 이름, 전화번호</li>
          <li>선택항목: 생년월일, 성별, 주소</li>
          <li>자동수집항목: IP 주소, 쿠키, 서비스 이용 기록, 접속 로그</li>
          <li>운동 관련 정보: 운동 목표, 운동 경력, 건강 상태</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>3. 개인정보의 보유 및 이용기간</h2>
        <p>
          회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
          단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한
          일정한 기간 동안 회원정보를 보관합니다.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. 개인정보의 파기</h2>
        <p>
          회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
          지체없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 기술적 방법을 사용하여
          복구 및 재생이 불가능한 방법으로 영구 삭제합니다.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. 이용자 권리와 행사방법</h2>
        <p>이용자는 다음과 같은 권리를 행사할 수 있습니다:</p>
        <ul>
          <li>개인정보 열람요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제요구</li>
          <li>처리정지 요구</li>
          <li>동의철회</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>6. 개인정보의 안전성 확보조치</h2>
        <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
        <ul>
          <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
          <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화</li>
          <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>7. 개인정보 보호책임자</h2>
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
          정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
          지정하고 있습니다.
        </p>
        <div className="highlight">
          <p>개인정보 보호책임자</p>
          <p>이름: 홍길동</p>
          <p>직책: 개인정보보호팀장</p>
          <p>연락처: 02-1234-5678</p>
          <p>이메일: privacy@maezim.com</p>
        </div>
      </section>

      <footer className="terms-footer">
        <p>
          본 개인정보처리방침은 2024년 3월 21일부터 시행합니다.
          이전 개인정보처리방침과 본 개인정보처리방침이 상충하는 경우 본 개인정보처리방침의 내용이 우선합니다.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPage; 