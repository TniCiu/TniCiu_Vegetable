import React from 'react';
import AppBarComponent from '../../Components/AppBar/AppBar';
import Footer from '../../Components/Footer/Footer';
import AboutStore from './About/AboutStore';
import AboutText from './About/AboutText';
import AboutLabel from './About/AboutLabel';
import ChatAI from '../../Components/ChatAI/ChatAI';

const Introduce = () => {
  return (
    <>
      <AppBarComponent />
      <div style={styles.container}>
        {/* Section 1 */}
        <section style={styles.section}>
          <img
            src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/about2_banner.jpg?1716945232631"
            alt="Chất lượng và tươi xanh"
            style={styles.image}
          />
          <div style={styles.textBlock}>
            <h2 style={styles.title}>BEAN FARM</h2>
            <h3 style={styles.subtitle}>Chất lượng và tươi xanh</h3>
            <p style={styles.paragraph}>
              Thực phẩm sạch, hay còn gọi là thực phẩm hữu cơ (organic) đang được ưa chuộng tại các nước phát triển...
            </p>
          </div>
        </section>

        {/* Section 2 - Tầm Nhìn */}
        <div style={styles.reverseContainer}>
          <div style={styles.textBlock}>
            <h2 style={styles.title}>TẦM NHÌN</h2>
            <h1 style={styles.subtitle}>Tầm nhìn của chúng tôi</h1>
            <p style={styles.paragraph}>
              Hiểu được vấn đề ấy, chúng tôi đã thành lập công ty Bean Farm với mong muốn đưa nông sản hữu cơ chất lượng...
            </p>
          </div>
          <img
            src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/about4_banner.jpg?1716945232631"
            alt="Tầm nhìn"
            style={styles.image}
          />
        </div>

        {/* Section 3 - Mục Tiêu */}
        <section style={styles.section}>
          <img
            src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/about5_banner.jpg?1716945232631"
            alt="Mục tiêu"
            style={styles.image}
          />
          <div style={styles.textBlock}>
            <h2 style={styles.title}>MỤC TIÊU</h2>
            <h3 style={styles.subtitle}>Mục tiêu của chúng tôi</h3>
            <p style={styles.paragraph}>
              Chúng tôi đã kết nối với các đối tác lớn tại TP. Hồ Chí Minh và Hà Nội, hướng đến mở rộng trên toàn quốc...
            </p>
          </div>
        </section>

        <AboutStore />
        <AboutText />
        <AboutLabel />
      </div>

      <ChatAI />
      <Footer />
    </>
  );
};

// Định nghĩa styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px', // Giảm padding để thu hẹp khoảng cách
    backgroundColor: 'white',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1000px', // Giảm max-width để thu hẹp khoảng cách
    marginBottom: '30px', // Giảm khoảng cách giữa các section
  },
  reverseContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap-reverse',
    width: '100%',
    maxWidth: '1000px', // Giảm max-width để thu hẹp khoảng cách
    marginBottom: '30px', // Giảm khoảng cách giữa các section
  },
  image: {
    width: '48%', // Hình ảnh to hơn chút để gần nội dung
    borderRadius: '8px',
    maxWidth: '380px',
  },
  textBlock: {
    width: '50%',
    padding: '15px', // Giảm padding để thu hẹp khoảng cách
  },
  title: {
    color: '#f39c12',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom:'-10px'
  },
  subtitle: {
    color: '#27ae60',
    fontSize: '24px',
    marginBottom:'-20px',
    fontWeight: 'bold',
  },
  paragraph: {
    color: '#565656',
    fontSize: '15px',
    lineHeight: 1.4,
  },

  // Responsive cho mobile
  '@media (max-width: 768px)': {
    section: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    reverseContainer: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      textAlign: 'center',
    },
    image: {
      width: '100%', // Hình ảnh lớn hơn trên mobile
      maxWidth: '280px',
    },
    textBlock: {
      width: '90%',
      padding: '10px',
    },
    title: {
      fontSize: '18px',
    },
    subtitle: {
      fontSize: '20px',
    },
    paragraph: {
      fontSize: '14px',
    },
  },
};

export default Introduce;
