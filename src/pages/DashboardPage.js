import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import '../styles/Dashboard.css';

const DashboardPage = () => {
  // 매출 차트 데이터
  const revenueData = {
    labels: ['3/1', '3/2', '3/3', '3/4', '3/5', '3/6', '3/7'],
    datasets: [
      {
        label: '일별 매출 (₩)',
        data: [1200000, 1400000, 1300000, 1500000, 1700000, 1600000, 1800000],
        backgroundColor: 'rgba(40, 167, 69, 0.5)',
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <main className="dashboard container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        헬스클럽 운영자 대시보드
      </h1>

      {/* 예약 현황 섹션 */}
      <section className="dashboard-section">
        <h2 className="text-2xl font-bold mb-4">예약 현황</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="text-lg font-semibold text-gray-600">총 예약</h3>
            <p className="text-3xl font-bold text-gray-800">120건</p>
          </div>
          <div className="stat-card">
            <h3 className="text-lg font-semibold text-gray-600">오늘 예약</h3>
            <p className="text-3xl font-bold text-gray-800">15건</p>
          </div>
          <div className="stat-card">
            <h3 className="text-lg font-semibold text-gray-600">취소 건수</h3>
            <p className="text-3xl font-bold text-gray-800">5건</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">시간대별 예약 현황</h3>
          <div className="overflow-x-auto">
            <table className="reservation-table">
              <thead>
                <tr>
                  <th>시간대</th>
                  <th>예약 건수</th>
                  <th>이용 가능 비율</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>06:00 - 08:00</td>
                  <td>10</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>08:00 - 10:00</td>
                  <td>8</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>18:00 - 20:00</td>
                  <td>25</td>
                  <td>90%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 매출 현황 섹션 */}
      <section className="dashboard-section">
        <h2 className="text-2xl font-bold mb-4">매출 현황 (일별 그래프)</h2>
        <div className="chart-container">
          <Bar data={revenueData} options={chartOptions} />
        </div>
      </section>

      {/* AI 분석 섹션 */}
      <section className="dashboard-section">
        <h2 className="text-2xl font-bold mb-4">
          AI 분석 - 혼잡 시간대 및 운영 전략
        </h2>
        <ul className="analysis-list">
          <li><strong>혼잡 시간대:</strong> 18:00 - 20:00</li>
          <li>
            <strong>비효율적인 시간대:</strong> 14:00 - 16:00 (이용률 20%)
          </li>
          <li>
            <strong>매출 증대 기회:</strong> 점심시간 (12:00 - 14:00) 단기 이용권 할인 이벤트 도입
          </li>
          <li>
            <strong>운영 전략:</strong> 혼잡 시간대 추가 트레이너 배치, 피크타임 예약 제한 적용
          </li>
          <li>
            <strong>시설 최적화:</strong> 비효율적인 시간대에 단체 클래스 유치
          </li>
        </ul>
      </section>
    </main>
  );
};

export default DashboardPage; 