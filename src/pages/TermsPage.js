import React from 'react';
import '../styles/Terms.css';

const TermsPage = () => {
  return (
    <div className="terms-container">
      <header className="terms-header">
        <h1>이용약관</h1>
        <p>마지막 수정일: 2024년 3월 21일</p>
      </header>

      <section className="terms-section">
        <h2>제1조 (목적)</h2>
        <p>
          이 약관은 MaeZim(이하 "회사")이 제공하는 서비스의 이용조건 및 절차,
          회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
        <div className="highlight">
          <p>
            본 서비스는 헬스장 예약 및 운동 프로그램 관리 서비스를 제공합니다.
            이용자는 본 서비스를 통해 헬스장을 예약하고, 운동 프로그램을 선택하며,
            트레이너와 상담할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="terms-section">
        <h2>제2조 (정의)</h2>
        <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
        <ul>
          <li>"서비스"란 회사가 제공하는 모든 서비스를 의미합니다.</li>
          <li>"이용자"란 회사의 서비스를 이용하는 회원을 의미합니다.</li>
          <li>"예약"이란 이용자가 서비스를 통해 헬스장을 예약하는 것을 의미합니다.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>제3조 (약관의 효력 및 변경)</h2>
        <p>
          이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.
          회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 효력이 발생합니다.
        </p>
      </section>

      <section className="terms-section">
        <h2>제4조 (서비스 이용)</h2>
        <h3>1. 서비스 이용 계약</h3>
        <p>
          서비스 이용 계약은 이용자가 회원가입을 완료하고 회사가 이를 승낙함으로써 성립됩니다.
          회사는 다음 각 호에 해당하는 경우 회원가입을 승낙하지 않을 수 있습니다.
        </p>
        <ul>
          <li>실명이 아닌 경우</li>
          <li>다른 사람의 명의를 사용한 경우</li>
          <li>회원가입 시 필요한 정보를 허위로 기재한 경우</li>
        </ul>

        <h3>2. 서비스 이용</h3>
        <p>
          이용자는 서비스 이용에 필요한 정보를 제공하고, 서비스 이용에 따른 비용을 지불해야 합니다.
          회사는 이용자의 서비스 이용에 필요한 정보를 요구할 수 있습니다.
        </p>
      </section>

      <section className="terms-section">
        <h2>제5조 (회원의 의무)</h2>
        <p>회원은 다음 각 호의 행위를 하여서는 안 됩니다:</p>
        <ul>
          <li>서비스의 정상적인 운영을 방해하는 행위</li>
          <li>서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송 등의 방법으로 이용하는 행위</li>
          <li>다른 이용자의 개인정보를 수집, 저장, 공개하는 행위</li>
          <li>회사의 지식재산권을 침해하는 행위</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>제6조 (서비스 제공의 중단)</h2>
        <p>
          회사는 다음 각 호의 경우 서비스 제공을 중단할 수 있습니다:
        </p>
        <ul>
          <li>서비스용 설비의 보수 등 공사로 인한 부득이한 경우</li>
          <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중단했을 경우</li>
          <li>기타 불가항력적 사유가 있는 경우</li>
        </ul>
      </section>

      <footer className="terms-footer">
        <p>
          본 약관은 2024년 3월 21일부터 시행합니다.
          이전 약관과 본 약관이 상충하는 경우 본 약관의 내용이 우선합니다.
        </p>
      </footer>
    </div>
  );
};

export default TermsPage; 