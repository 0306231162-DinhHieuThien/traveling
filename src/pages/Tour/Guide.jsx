import React, { useState } from 'react';
import Booking from '../../Components/Booking/Booking';
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// Màu sắc
const COLORS = {
  primary: '#0E8B8B',
  secondary: '#E0F2F2',
  accent: '#FCA311',
  textDark: '#1A1A1A',
  textGrey: '#666666',
  bgBody: '#F5FCFC',
  white: '#ffffff',
};

// 1. Thêm lại dữ liệu BookingSteps tại đây
const bookingSteps = [
  {
    id: 1,
    number: '01',
    title: 'Choose Destination',
    desc: 'All you have to do is, first select your preferred destination and proceed.',
    icon: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
    path: '/destinations' // Link chuyển trang
  },
  {
    id: 2,
    number: '02',
    title: 'Make Payment',
    desc: 'You are important to us. We pay attention to the quality of every service we provide to you.',
    icon: 'https://cdn-icons-png.flaticon.com/512/633/633611.png',
    path: '/payment'
  },
  {
    id: 3,
    number: '03',
    title: 'Ready For Travelling',
    desc: 'We have seen that you have fulfilled all the requirements, now you are ready to travel.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3159/3159066.png',
    path: '/tours'
  }
];

const GUIDES_PER_PAGE = 4;

const tourGuides = [
  { 
    name: 'Murphy', 
    profession: 'Tourist Guide', 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
  { 
    name: 'Alexis Cox', 
    profession: 'Tourist Guide', 
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
  { 
    name: 'Murray', 
    profession: 'Tourist Guide', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
  { 
    name: 'Crawford', 
    profession: 'Tourist Guide', 
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
  { 
    name: 'David Lee', 
    profession: 'Adventure Guide', 
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
  { 
    name: 'Sarah Ken', 
    profession: 'Cultural Guide', 
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
  { 
    name: 'Tom Hidd', 
    profession: 'Mountain Guide', 
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488058?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
  { 
    name: 'Lisa Ann', 
    profession: 'City Guide', 
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
  { 
    name: 'Mike John', 
    profession: 'Tourist Guide', 
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
  { 
    name: 'Jenny Kim', 
    profession: 'Tourist Guide', 
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    socials: {
      X: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      pinterest: 'https://pinterest.com'
    }
  },
];
const socialIcons = { 
  X: <FaXTwitter />, 
  facebook: <FaFacebookF />, 
  instagram: <FaInstagram />, 
  pinterest: <FaPinterestP /> 
};
const socialIconsList = ['X', 'facebook', 'instagram', 'pinterest'];

function TourGuideCard({ guide }) {
  // Hàm lấy link an toàn (nếu dữ liệu chưa có link thì trả về #)
  const getSocialLink = (network) => {
    return guide.socials && guide.socials[network] ? guide.socials[network] : '#';
  };
  return (
    <div style={{ borderRadius: 20, boxShadow: '0 5px 20px rgba(0,0,0,0.05)', textAlign: 'center', height: '100%', backgroundColor: '#fff', transition: 'transform 0.3s', cursor: 'default', marginBottom: 20 }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ padding: 16, paddingBottom: 0 }}>
        <img src={guide.image} alt={guide.name} style={{ borderRadius: 20, height: 280, width: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 12, marginTop: -22 }}>
          {socialIconsList.map(iconName => (
          <a 
                key={iconName} 
                href={getSocialLink(iconName)} // Gọi hàm lấy link
                target="_blank" // Mở tab mới
                rel="noopener noreferrer" // Bảo mật
                style={{
                // --- BẮT ĐẦU PHẦN STYLE GIỐNG HÌNH 2 ---
                backgroundColor: '#025859', // Màu xanh đậm (Dark Teal)
                border: `3px solid ${COLORS.accent}`, // Viền màu cam (#FCA311)
                color: 'white', // Icon màu trắng
                
                borderRadius: '50%', 
                width: 42, // Tăng kích thước
                height: 42, 
                cursor: 'pointer', 
                fontSize: 16, // Tăng kích thước icon/chữ
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s', 
                zIndex: 2, 
                position: 'relative'
                
            }}
              // Hiệu ứng Hover: Đổi màu nền thành Cam, viền thành Xanh (hoặc giữ nguyên tùy ý)
              onMouseEnter={e => { 
                  e.currentTarget.style.backgroundColor = COLORS.accent; 
                  e.currentTarget.style.borderColor = '#025859';
              }}
              onMouseLeave={e => { 
                  e.currentTarget.style.backgroundColor = '#025859'; 
                  e.currentTarget.style.borderColor = COLORS.accent;
              }}
            >
              {socialIcons[iconName]}
            </a>
          ))}
        </div>
        <h3 style={{ margin: '0 0 8px', color: COLORS.textDark }}>{guide.name}</h3>
        <p style={{ margin: 0, color: COLORS.textGrey, fontSize: 14 }}>{guide.profession}</p>
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalPages, onChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);
  return (
    <div style={{ textAlign: 'center', marginTop: 40, marginBottom: 60 }}>
      <button disabled={currentPage === 1} onClick={() => onChange(currentPage - 1)} style={{ marginRight: 10, padding: '8px 16px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', backgroundColor: currentPage === 1 ? '#ccc' : '#e0e0e0', color: '#333', border: 'none', borderRadius: 4, fontWeight: 600 }}>Prev</button>
      {pages.map(page => (
        <button key={page} onClick={() => onChange(page)} style={{ margin: '0 5px', padding: '8px 16px', cursor: 'pointer', backgroundColor: page === currentPage ? COLORS.primary : '#eee', color: page === currentPage ? 'white' : COLORS.textDark, border: 'none', borderRadius: 4, fontWeight: 'bold' }}>{page}</button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => onChange(currentPage + 1)} style={{ marginLeft: 10, padding: '8px 16px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', backgroundColor: currentPage === totalPages ? '#ccc' : COLORS.primary, color: 'white', border: 'none', borderRadius: 4, fontWeight: 600 }}>Next</button>
    </div>
  );
}

export default function Guide() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(tourGuides.length / GUIDES_PER_PAGE);
  const handlePageChange = (newPage) => {
    setPage(newPage);
    const element = document.getElementById('guides-section');
    if (element) window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
  };
  const startIndex = (page - 1) * GUIDES_PER_PAGE;
  const currentGuides = tourGuides.slice(startIndex, startIndex + GUIDES_PER_PAGE);

  return (
    <div style={{ backgroundColor: COLORS.bgBody, minHeight: '100vh', paddingBottom: 0 }}>
      <section style={{ backgroundColor: '#E6F4F1', paddingTop: 80, paddingBottom: 40, textAlign: 'center', marginBottom: 64 }}>
        <h1 style={{ fontWeight: 800, fontSize: 48, color: COLORS.textDark }}>Tour Guide</h1>
        <p style={{ color: COLORS.textGrey }}>Home - Tour Guide</p>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 15px' }}>
        <section id="guides-section" style={{ marginBottom: 40 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8 }}>Meet With <span style={{ color: COLORS.primary }}>Tour Guide</span></h2>
            <p style={{ color: COLORS.textGrey }}>Destinations worth exploring! Here are a few popular spots.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 24 }}>
            {currentGuides.map(guide => (<TourGuideCard key={guide.name} guide={guide} />))}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} onChange={handlePageChange} />
        </section>
      </div>

      {/* 2. Truyền bookingSteps vào Component Booking */}
      <Booking steps={bookingSteps} />
      
    </div>
  );
}