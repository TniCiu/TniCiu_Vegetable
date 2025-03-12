import React from 'react';

const brandImages = [
  'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_1.png?1716945232631',
  'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_2.png?1716945232631',
  'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_3.png?1716945232631',
  'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_4.png?1716945232631',
  'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_5.png?1716945232631',
  'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_6.png?1716945232631'
];

const PartnerLogos = () => {
  return (
    <div style={styles.container}>
      <h3 style={{...styles.heading, textAlign: 'left', fontSize: '30px'}}>Đối tác của chúng tôi</h3>
      <div style={styles.logoContainer}>
        {brandImages.map((src, index) => (
          <img key={index} src={src} alt={`Brand ${index + 1}`} style={styles.logo} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: '#f7f7f7',
    margin: '0 auto',
    boxSizing: 'border-box',
    overflow: 'hidden',
    maxWidth: '1200px',
    width: '100%'
  },
  heading: {
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1000px',
    flexWrap: 'wrap',
    cursor: 'pointer',
    gap: '10px'
  },
  logo: {
    margin: '10px',
    objectFit: 'contain',
    borderRadius: '8px',
    flexShrink: 0,
    height: '60px',
    transition: 'transform 0.3s ease-in-out',
  }
};

// Thêm CSS cho responsive
const styleSheet = `
  @media (max-width: 768px) {
    .logoContainer {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    .logoContainer img {
      height: 50px !important;
    }
  }

  @media (max-width: 480px) {
    .logoContainer {
      grid-template-columns: repeat(1, 1fr);
    }
    .logoContainer img {
      height: 45px !important;
    }
  }
`;

// Tạo thẻ style và chèn vào DOM
const styleTag = document.createElement('style');
styleTag.innerHTML = styleSheet;
document.head.appendChild(styleTag);

export default PartnerLogos;
