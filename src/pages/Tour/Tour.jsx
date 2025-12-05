import React, {useState} from 'react';
import './tour.scss';
import {MdCalendarToday, MdAccessTime} from 'react-icons/md';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';

// --- HÀM TIỆN ÍCH: TRÍCH XUẤT SỐ ĐÊM ---
const extractNights = (durationStr) => {
    const match = durationStr.match(/(\d+)\s+Nights/i);
    // Nếu không tìm thấy, trả về 1 đêm mặc định
    return match ? parseInt(match[1], 10) : 1; 
};
// thêm đêm trong duration 
const MAX_NIGHTS = 15;
 const toursData = [
    {
      id: 1,
      location: 'Bali, Indonesia',
      activityType: 'Leisure', 
      city: 'Los Angeles',
      title: "Bali, Indonesia",
      themes: ['Relaxation', 'Nature'],
      description: "Bali is a fascinating blend of natural beauty, rich culture, and spiritual depth. Here's a snapshot of what makes Bali so special.",
      image: 'https://ibooking.superghs.com/images/ibcrm/covers/_320x160@2/5a17afb3f1a81.jpg', // Thay bằng ảnh thật
      price: 59,
      minTravelers: 1,
      departureDate: '2025-12-01',
      duration: "8 days, 3 Nights",
      rating: 4.8,
      reviews: 25,
    },
    {
      id: 2,
      location: "New Zealand",
      activityType: 'Adventure', 
      city: 'New York',
      title: "New Zealand",
      themes: ['Adventure', 'Nature'],
      description: "Experience the breathtaking landscapes of New Zealand, from the mountains to the fjords. A true adventure awaits.",
      image: 'https://images2.thanhnien.vn/528068263637045248/2024/8/30/h4-17250302399151728299557.jpg', // Thay bằng ảnh thật
      price: 89,
      minTravelers: 2,
      departureDate: '2025-11-28',
      duration: "8 days, 3 Nights",
      rating: 4.9,
      reviews: 18,
    },
    {
      id: 3,
      location: "Paris, France",
      activityType: 'Cultural', 
      city: 'Paris',
      title: "Paris City Tour",
      themes: ['Cultural'],
      description: "Explore the magic of the City of Lights.",
      image: 'https://www.visa.com.vn/dam/VCOM/regional/ap/images/travel-with-visa/paris/marquee-travel-paris-800x450.jpg', // Thay bằng ảnh thật
      price: 75,
      minTravelers: 1, 
      departureDate: '2025-12-15', 
      duration: "4 days, 3 Nights",
      rating: 4.5,
      reviews: 30,
    },
  {
        id: 4, 
        location: "Amazon Rainforest", 
        activityType: 'Wild life', 
        city: 'Miami', 
        title: "Amazon Nature Trek", 
        themes: ['Nature', 'Adventure'], 
        description: "Explore the biodiversity of the Amazon jungle.",
        image: 'https://res.cloudinary.com/enchanting/q_70,f_auto,c_lfill,g_auto/exodus-web/2021/12/39955.jpg',
        price: 150, 
        minTravelers: 2, 
        departureDate: '2026-01-20', 
        duration: "12 days, 11 Nights", // Đã thêm
        rating: 4.7, 
        reviews: 45, // Đã thêm
    },
    {
        id: 5, 
        location: "Maldives", 
        activityType: 'Relaxing', 
        city: 'Chicago', 
        title: "Maldives Relaxation Getaway", 
        themes: ['Relaxation', 'Culture'], 
        description: "Relax on pristine beaches and clear blue waters.",
        image: 'https://assets.airtrfx.com/media-em/tk/city-images/Male.jpg?height=170&quality=80&fit=crop&format=auto&opt=true',
        price: 99, 
        minTravelers: 1, 
        departureDate: '2025-12-25', 
        duration: "7 days, 6 Nights", // Đã thêm
        rating: 4.9, 
        reviews: 60, // Đã thêm
    },
    {
        id: 6, 
        location: "Serengeti, Tanzania", 
        activityType: 'Leisure', 
        city: 'Phoenix', 
        title: "Serengeti Safari", 
        themes: ['Wild life', 'Adventure'], 
        description: "Witness the Great Migration and the majestic Big Five.",
        image: 'https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/serengeti.jpg',
        price: 120, 
        minTravelers: 2, 
        departureDate: '2026-03-10', 
        duration: "9 days, 8 Nights", // Đã thêm
        rating: 4.6, 
        reviews: 38, // Đã thêm
    },
    {
        id: 7, 
        location: "Dubai, UAE", 
        activityType: 'Leisure', 
        city: 'Dallas', 
        title: "Dubai Desert Expedition", 
        themes: ['Desert', 'Leisure'], 
        description: "Experience the vast Arabian desert dunes.",
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/2b/13.jpg',
        price: 65, 
        minTravelers: 1, 
        departureDate: '2026-04-01', 
        duration: "3 days, 2 Nights", // Đã thêm
        rating: 4.4, 
        reviews: 12, // Đã thêm
    },
    {
        id: 8, 
        location: "Hanoi, Vietnam", 
        activityType: 'Leisure', 
        city: 'San Jose', 
        title: "Hanoi Old Quarter", 
        themes: ['Cultural'], 
        description: "A quick cultural trip to the heart of Vietnam.",
        image: 'https://duongsrestaurant.com/wp-content/uploads/2019/12/Things-to-know-when-visit-to-Hanoi-Old-Quarter-1.jpg',
        price: 30, 
        minTravelers: 1, 
        departureDate: '2026-05-05', 
        duration: "2 days, 1 Night", // Đã thêm
        rating: 4.2, 
        reviews: 50, // Đã thêm
    },
  ];


const Tour = () => {
  // --- 1. STATE ---
  const [travelers, setTravelers] = useState(1);
  // Đặt mặc định là 'All' để hiển thị TẤT CẢ tour khi tải trang
  const [location, setLocation] = useState('All'); 
  const [activityType, setActivityType] = useState('All');
  const [date, setDate] = useState('');
  // Sửa giá trị mặc định cho Time thành chuỗi rỗng để không áp dụng lọc mặc định
  const [time, setTime] = useState(''); 

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [showAllCities, setShowAllCities] = useState(false);
  const [duration, setDuration] = useState(10);
  const [selectedThemes, setSelectedThemes] = useState([]);
const availableCities = [
  'Los Angeles',   // Bali, Indonesia
  'New York',      // New Zealand
  'Paris',         // Paris City Tour
  'Miami',         // Amazon Nature Trek
  'Chicago',       // Maldives Relaxation Getaway
  'Phoenix',       // Serengeti Safari
  'Dallas',        // Dubai Desert Expedition
  'San Jose'       // Hanoi Old Quarter
];

//  thêm cities
const availableThemes = [ 
      'Adventure', 'Cultural', 'Nature', 'Relaxation', 'Wild life', 'Desert'
  ];
  // --- 2. HÀM XỬ LÝ (Handlers) ---
// Ví dụ hàm xử lý trong component React của bạn
const handleTravelerChange = (type) => {
    // Giới hạn tối thiểu
    if (type === 'dec' && travelers > 1) {
        setTravelers(prevTravelers => prevTravelers - 1);
    } 
    // Giới hạn tối đa (giả sử tối đa là 10)
    else if (type === 'inc' && travelers < 10) { 
        setTravelers(prevTravelers => prevTravelers + 1);
    }
};
  const handleCityChange = (city) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

const handleThemeChange = (theme) => { // Lỗi 299
  setSelectedThemes(prev =>
      prev.includes(theme) ? prev.filter(t => t !== theme) : [...prev, theme]
  );
};
  const handleSearch = () => {
    // Hiện tại, lọc là tức thời (xảy ra ngay khi state thay đổi). 
    // Hàm này chỉ để log hoặc có thể dùng để kích hoạt fetch API sau này.
    console.log('Search criteria:', { location, activityType, date, time, travelers, selectedCities });
  };


  // --- 3. LOGIC LỌC (Filters) ---

  // Lọc Cities cho hiển thị Sidebar
  const filteredCities = availableCities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayCities = showAllCities ? filteredCities : filteredCities.slice(0, 5);
  
  // Lọc danh sách Tours
  const filteredTours = toursData.filter(tour => {
    // Lấy giá trị chữ thường của location và activity type
    const tourLocationLower = tour.location ? tour.location.toLowerCase() : '';
    const tourActivityLower = tour.activityType ? tour.activityType.toLowerCase() : '';
    const tourCityLower = tour.city ? tour.city.toLowerCase() : '';
    const filterLocationLower = location.toLowerCase();
    const filterActivityLower = activityType.toLowerCase();
    const tourNights = extractNights(tour.duration); // <--- ĐÃ THÊM: Lấy số đêm
    const maxNightsFilter = parseInt(duration, 10); // <--- ĐÃ THÊM: Lấy giá trị slider
    // 1. LỌC THEO LOCATION
    let matchesLocation = (filterLocationLower === 'all') || tourLocationLower.includes(filterLocationLower);

    // 2. LỌC THEO ACTIVITY TYPE
    let matchesActivity = (filterActivityLower === 'all') || (tourActivityLower === filterActivityLower);
    
    // 3. LỌC THEO CITIES
    let matchesCities = true;
    if (selectedCities && selectedCities.length > 0) {
      matchesCities = selectedCities.some(city => 
          tourCityLower === city.toLowerCase()
      );
    }

    // 4. LỌC THEO TRAVELERS (Kiểm tra minTravelers)
    let matchesTravelers = true;
    if (travelers > 0) {
        // Chỉ lọc nếu tour có định nghĩa minTravelers
        matchesTravelers = !tour.minTravelers || tour.minTravelers <= travelers;
    }

    // 5. LỌC THEO DATE (So sánh chuỗi ngày YYYY-MM-DD)
    let matchesDate = true;
    if (date && date.trim() !== '') { // Nếu có chọn ngày
        matchesDate = tour.departureDate === date;
    }
    
// 6. LỌC THEO TYPE OF THEME (Checkbox list MỚI)
        let matchesThemes = true; 
        if (selectedThemes && selectedThemes.length > 0) {
            // <--- LOGIC LỌC THEME ĐÃ SỬA: SỬ DỤNG TRƯỜNG 'themes' MỚI
            // Kiểm tra xem tour có ít nhất một theme trùng với các theme được chọn không.
            matchesThemes = tour.themes && tour.themes.some(theme => 
                 selectedThemes.includes(theme)
            );
        }

        // 7. LỌC THEO DURATION (in Nights) - Slider
        let matchesDuration = true; // <--- ĐÃ THÊM LOGIC LỌC DURATION
        if (maxNightsFilter >= 1 && maxNightsFilter <= 10) { 
            matchesDuration = tourNights <= maxNightsFilter;
        }
    // LƯU Ý: Lọc theo Time không được áp dụng vì không có dữ liệu time trong toursData, 
    // nhưng state time vẫn được giữ lại để sử dụng cho mục đích khác.
    
    // Tour phải thỏa mãn tất cả các điều kiện lọc
  return matchesLocation 
              && matchesActivity 
              && matchesCities 
              && matchesThemes // <--- ĐIỀU KIỆN LỌC THEME
              && matchesDuration // <--- ĐIỀU KIỆN LỌC DURATION
              && matchesTravelers 
              && matchesDate;
      });


  // --- 4. JSX RETURN ---
  return (
    <div className="tour-page-container">
      <div className="tour-layout">

        {/* Sidebar Filter */}
        <aside className="sidebar-filter">
        <div className="filter-group">
          <label>Location</label>
          <div className="input-wrapper">
            <select 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              className="input-field"
            >
                  {/* thêm location */}
              <option value="All">All Locations</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Paris">Paris</option>
              <option value="Bali">Bali</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Amazon Rainforest">Amazon Rainforest</option>

            </select>
          </div>
        </div>

          <div className="filter-group">
          <label>Activity Type</label>
          <div className="input-wrapper">
            <select 
              value={activityType} 
              onChange={(e) => setActivityType(e.target.value)} 
              className="input-field"
            >
                {/* thêm activity, menu trong activity type */}
              <option value="All">All Activities</option>
              <option value="Adventure">Adventure</option>
              <option value="Leisure">Leisure</option>
              <option value="Cultural">Cultural</option>
              <option value="Relaxing">Relaxing</option>
              <option value="Wilfe life">Wild life</option>

            </select>
          </div>
        </div>
          <div className="filter-group">
            <label>Date</label>
            <div className="input-wrapper">
              <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
              />
              {/* Icon tùy chỉnh */}
              <span className="icon-right"><MdCalendarToday style={{ fontSize: 20 }} /></span>
            </div>
            
          </div>

          <div className="filter-group">
            <label>Time</label>
            <div className="input-wrapper">
              <input 
                type="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
              />
              <span className="icon-right"><MdAccessTime style={{ fontSize: 20 }} /></span>
            </div>
          </div>

          <div className="filter-group">
            <label>Traveler</label>
            <div className="traveler-counter">
              <span className="count-display">{travelers}</span>
              <div className="counter-controls">
                <button onClick={() => handleTravelerChange('dec')} aria-label="Decrease travelers">
                  <AiOutlineMinus fontSize="150" />
                </button>
                <button onClick={() => handleTravelerChange('inc')} aria-label="Increase travelers">
                  <AiOutlinePlus fontSize="150" />
                </button>
              </div>
            </div>
          </div>

          <button className="search-btn" onClick={handleSearch}>Search</button>

          {/* Cities Filter Group */}
          <div className="custom-checkbox-filter">
            <label className="filter-label-header">Cities</label>
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="search-icon"><FiSearch /></span>
            </div>

            <div className="checkbox-list">
              {displayCities.map(city => (
                <div key={city} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={`city-${city}`}
                    checked={selectedCities.includes(city)}
                    onChange={() => handleCityChange(city)}
                  />
                  <label htmlFor={`city-${city}`}>{city}</label>
                </div>
              ))}
              {filteredCities.length > 5 && (
                <button 
                  className="show-more-btn" 
                  onClick={() => setShowAllCities(!showAllCities)}
                >
                  {showAllCities ? 'Show Less...' : 'Show More...'}
                </button>
              )}
            </div>
          </div>
                {/* Duration */}
                {/* thêm đêm */}
      <div className="filter-group">
          <label>Duration (in Nights)</label>
              <div className="range-container">
              {/* Thanh trượt */}
              <input 
              type="range" 
              min="1" 
              max="15" // Tối đa 10 đêm
              value={duration} 
              onChange={(e) => setDuration(e.target.value)} 
              className="custom-slider"
              />
              {/* Hiển thị giá trị */}
              <div className="range-labels">
          <span>1 Night</span>
          <span>{duration}Nights</span> {/* Thay thế 1.28 bằng state duration */}
          </div>
          </div>
      </div>
            {/* Type of Theme */}
      <div className="custom-checkbox-filter">
            <label className="filter-label-header">Type of Theme</label>
            <div className="checkbox-list">
              {availableThemes.map(theme => (
                <div key={theme} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={`theme-${theme}`}
                    checked={selectedThemes.includes(theme)}
                    onChange={() => handleThemeChange(theme)}
                  />
                  <label htmlFor={`theme-${theme}`}>{theme}</label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Tour List - SỬ DỤNG filteredTours */}
        <section className="tour-list">
          {filteredTours.length > 0 ? (
                filteredTours.map((tour) => (
                    <div key={tour.id} className="tour-card">
                        <div className="card-image">
                            <img src={tour.image} alt={tour.title} />
                            <div className="duration-badge">
                                <MdCalendarToday style={{ fontSize: 14 }} /> {tour.duration}
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="card-price">
                                <span className="amount">${tour.price}</span>
                                <span className="period">Per Day</span>
                            </div>

                            <h2 className="card-title">{tour.title}</h2>
                            <p className="card-desc">{tour.description}</p>

                            <div className="card-footer">
                                <button className="book-btn">Book Now</button>
                                <div className="rating">
                                    <span className="rating-score">({tour.rating} Review)</span>
                                    <div className="stars">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <span key={i} className={`star ${i < Math.round(tour.rating) ? 'filled' : ''}`}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
             <p className="no-results-message" style={{ padding: '20px', color: '#666' }}>
                Không tìm thấy tour nào phù hợp với các tiêu chí lọc.
             </p>
          )}
        </section>

      </div>
    </div>
  );
};

export default Tour;