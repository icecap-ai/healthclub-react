import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Search.css';

const SearchPage = () => {
  const [filters, setFilters] = useState({
    city: '',
    district: '',
    neighborhood: '',
    features: [],
    date: '',
    time: ''
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  // 네이버 지도 초기화
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
        zoom: 11
      };
      const newMap = new window.naver.maps.Map('map', mapOptions);
      setMap(newMap);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // 지역별 좌표 데이터
  const locationCoordinates = {
    '서울특별시': {
      center: { lat: 37.5665, lng: 126.9780 },
      zoom: 11,
      districts: {
        '강남구': { center: { lat: 37.5085, lng: 127.0613 }, zoom: 13 },
        '마포구': { center: { lat: 37.5665, lng: 126.9019 }, zoom: 13 },
        '종로구': { center: { lat: 37.5728, lng: 126.9792 }, zoom: 13 }
      }
    },
    '부산광역시': {
      center: { lat: 35.1796, lng: 129.0756 },
      zoom: 11,
      districts: {
        '해운대구': { center: { lat: 35.1587, lng: 129.1608 }, zoom: 13 },
        '수영구': { center: { lat: 35.1458, lng: 129.1132 }, zoom: 13 },
        '부산진구': { center: { lat: 35.1629, lng: 129.0532 }, zoom: 13 }
      }
    }
  };

  // 지역 선택에 따른 지도 이동
  useEffect(() => {
    if (map) {
      if (filters.district && locationCoordinates[filters.city]?.districts[filters.district]) {
        const district = locationCoordinates[filters.city].districts[filters.district];
        map.setCenter(new window.naver.maps.LatLng(district.center.lat, district.center.lng));
        map.setZoom(district.zoom);
      } else if (filters.city && locationCoordinates[filters.city]) {
        const city = locationCoordinates[filters.city];
        map.setCenter(new window.naver.maps.LatLng(city.center.lat, city.center.lng));
        map.setZoom(city.zoom);
      } else {
        // 기본 서울 중심 좌표
        map.setCenter(new window.naver.maps.LatLng(37.5665, 126.9780));
        map.setZoom(11);
      }
    }
  }, [filters.city, filters.district, map]);

  // 검색 결과에 따라 지도 마커 업데이트
  useEffect(() => {
    if (map && searchResults.length > 0) {
      // 기존 마커 제거
      markers.forEach(marker => marker.setMap(null));
      markers.length = 0;

      // 검색 결과의 좌표로 마커 생성
      const bounds = new window.naver.maps.LatLngBounds();
      
      searchResults.forEach(gym => {
        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(gym.coordinates.lat, gym.coordinates.lng),
          map: map
        });

        // 인포윈도우 생성
        const infoWindow = new window.naver.maps.InfoWindow({
          content: `
            <div style="padding: 10px;">
              <h3 style="margin: 0 0 5px 0;">${gym.name}</h3>
              <p style="margin: 0;">${gym.address}</p>
            </div>
          `
        });

        // 마커 클릭 이벤트
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
          map.setCenter(marker.getPosition());
          map.setZoom(15);
        });

        markers.push(marker);
        bounds.extend(new window.naver.maps.LatLng(gym.coordinates.lat, gym.coordinates.lng));
      });

      // 모든 마커가 보이도록 지도 범위 조정
      map.fitBounds(bounds, {
        top: 50,    // 상단 여백
        right: 50,  // 우측 여백
        bottom: 50, // 하단 여백
        left: 50    // 좌측 여백
      });
    }
  }, [searchResults, map]);

  // 임시 지역 데이터
  const locations = {
    '서울특별시': {
      '강남구': ['개포동', '논현동', '대치동', '도곡동', '삼성동', '세곡동', '수서동', '신사동', '압구정동', '역삼동', '일원동', '청담동'],
      '마포구': ['공덕동', '노고산동', '대흥동', '도화동', '망원동', '상암동', '서교동', '성산동', '신수동', '연남동', '합정동', '홍대입구'],
      '종로구': ['가회동', '견지동', '경운동', '계동', '광화문', '교남동', '무악동', '사직동', '삼청동', '세종로', '숭인동', '창신동']
    },
    '부산광역시': {
      '해운대구': ['우동', '중동', '좌동', '송정동', '반여동', '반송동', '재송동'],
      '수영구': ['남천동', '수영동', '망미동', '광안동', '민락동'],
      '부산진구': ['전포동', '범전동', '범천동', '개금동', '당감동', '가야동']
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFilters(prevState => ({
      ...prevState,
      features: prevState.features.includes(feature)
        ? prevState.features.filter(f => f !== feature)
        : [...prevState.features, feature]
    }));
  };

  const handleSearch = () => {
    // 임시 검색 로직
    let filteredGyms = [...gyms];

    // 지역 필터링
    if (filters.city) {
      filteredGyms = filteredGyms.filter(gym => 
        gym.location.includes(filters.city)
      );
    }
    if (filters.district) {
      filteredGyms = filteredGyms.filter(gym => 
        gym.location.includes(filters.district)
      );
    }
    if (filters.neighborhood) {
      filteredGyms = filteredGyms.filter(gym => 
        gym.location.includes(filters.neighborhood)
      );
    }

    // 편의시설 필터링
    if (filters.features.length > 0) {
      filteredGyms = filteredGyms.filter(gym =>
        filters.features.every(feature => gym.features.includes(feature))
      );
    }

    // 날짜와 시간 필터링 (실제 구현 시에는 서버에서 처리)
    if (filters.date && filters.time) {
      // 여기에 날짜/시간 기반 필터링 로직 추가
    }

    setSearchResults(filteredGyms);
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  };

  // 시간 옵션 생성 (10분 단위)
  const timeOptions = Array.from({ length: 24 * 6 }, (_, i) => {
    const hour = Math.floor(i / 6);
    const minute = (i % 6) * 10;
    const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    return timeString;
  });

  // 임시 데이터
  const gyms = [
    {
      id: 1,
      name: 'MaeZim Fitness 강남점',
      image: '/assets/images/maezim-fitness-gangnam.jpg',
      mapImage: '/assets/images/gym1.jpg',
      location: '서울특별시 강남구 테헤란로 231',
      address: '서울특별시 강남구 테헤란로 231 센터필드 빌딩 23층',
      price: '월 89,000원',
      features: ['주차', '샤워실', '수영장', '요가'],
      description: '최신식 운동기구와 전문 트레이너가 함께하는 프리미엄 피트니스 센터',
      coordinates: { lat: 37.5085, lng: 127.0613 }
    },
    {
      id: 2,
      name: 'MaeZim Fitness 홍대점',
      image: '/assets/images/maezim-fitness-hongdae.jpg',
      mapImage: '/assets/images/gym2.jpg',
      location: '서울특별시 마포구 홍대로 123',
      address: '서울특별시 마포구 홍대로 123 홍대입구역 프라자 4층',
      price: '월 79,000원',
      features: ['주차', '샤워실', '요가', '필라테스'],
      description: '편리한 위치와 친근한 분위기의 피트니스 센터',
      coordinates: { lat: 37.5575, lng: 126.9242 }
    },
    {
      id: 3,
      name: 'MaeZim Fitness 해운대점',
      image: '/assets/images/maezim-fitness-haeundae.jpg',
      mapImage: '/assets/images/gym3.jpg',
      location: '부산광역시 해운대구 해운대로 456',
      address: '부산광역시 해운대구 해운대로 456 해운대 센텀리더스마크 15층',
      price: '월 75,000원',
      features: ['주차', '샤워실', '수영장', '요가', '사우나'],
      description: '해운대 바다가 보이는 프리미엄 피트니스 센터',
      coordinates: { lat: 35.1587, lng: 129.1608 }
    }
  ];

  const features = [
    '주차', '샤워실', '수영장', '요가', '필라테스',
    '사우나', '골프연습장', '테니스장', '스크린골프'
  ];

  return (
    <div className="search-container">
      <header className="search-header">
        <h1>헬스장 검색</h1>
        <p>
          MaeZim의 다양한 헬스장을 검색하고 예약하세요.
          원하는 조건에 맞는 최적의 헬스장을 찾아보세요.
        </p>
      </header>

      <div className="search-filters">
        <div className="filter-group">
          <label htmlFor="city">시/도</label>
          <select
            id="city"
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
          >
            <option value="">전체</option>
            {Object.keys(locations).map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="district">구/군</label>
          <select
            id="district"
            name="district"
            value={filters.district}
            onChange={handleFilterChange}
            disabled={!filters.city}
          >
            <option value="">전체</option>
            {filters.city && Object.keys(locations[filters.city]).map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="neighborhood">동/읍/면</label>
          <select
            id="neighborhood"
            name="neighborhood"
            value={filters.neighborhood}
            onChange={handleFilterChange}
            disabled={!filters.district}
          >
            <option value="">전체</option>
            {filters.district && locations[filters.city][filters.district].map(neighborhood => (
              <option key={neighborhood} value={neighborhood}>{neighborhood}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>편의시설</label>
          <div className="gym-features">
            {features.map(feature => (
              <button
                key={feature}
                className={`feature-tag ${filters.features.includes(feature) ? 'active' : ''}`}
                onClick={() => handleFeatureToggle(feature)}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="date">예약 날짜</label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="time">예약 시간</label>
          <select
            id="time"
            name="time"
            value={filters.time}
            onChange={handleFilterChange}
          >
            <option value="">시간 선택</option>
            {timeOptions.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="filter-group search-button-group">
          <button className="search-button" onClick={handleSearch}>
            검색하기
          </button>
        </div>
      </div>

      <div className="search-content">
        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map(gym => (
              <div key={gym.id} className="gym-card">
                <img
                  src={gym.image}
                  alt={gym.name}
                  className="gym-image"
                  onError={(e) => {
                    e.target.src = '/assets/images/maezim-fitness-gangnam.jpg'; // 기본 이미지
                  }}
                />
                <div className="gym-info">
                  <h3>{gym.name}</h3>
                  <p>{gym.address}</p>
                  <p>{gym.description}</p>
                  <div className="gym-features">
                    {gym.features.map(feature => (
                      <span key={feature} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="gym-price">{gym.price}</div>
                  <div className="gym-map-image">
                    <img
                      src={gym.mapImage}
                      alt={`${gym.name} 위치`}
                      className="map-image"
                      onError={(e) => {
                        e.target.src = '/assets/images/gym1.jpg'; // 기본 지도 이미지
                      }}
                    />
                  </div>
                  <Link to={`/reserve/${gym.id}`} className="reserve-button">
                    예약하기
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>검색 결과가 없습니다</h3>
              <p>다른 검색 조건을 시도해보세요.</p>
            </div>
          )}
        </div>

        <div id="map" className="search-map"></div>
      </div>

      {searchResults.length > 0 && (
        <div className="pagination">
          <button
            className={`page-button ${currentPage === 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button
            className={`page-button ${currentPage === 2 ? 'active' : ''}`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <button
            className={`page-button ${currentPage === 3 ? 'active' : ''}`}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage; 