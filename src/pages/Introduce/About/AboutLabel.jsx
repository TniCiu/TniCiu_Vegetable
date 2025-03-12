/* eslint-disable no-unused-vars */
import React from 'react';

const AboutLabel = () => {
  const sectionStyle = {
    textAlign: 'center',
    padding: '50px 0',
    width: '100%',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '40px',
    color: '#f1c40f',
    margin: 0,
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: 'grey',
    marginTop: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // Giúp các card tự xuống dòng khi màn hình nhỏ
    marginTop: '50px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '20px',
    margin: '10px',
    flex: '1 1 calc(33.333% - 20px)', // Mỗi card chiếm 1/3 trên PC, sẽ tự điều chỉnh trên mobile
    boxSizing: 'border-box',
    minWidth: '250px', // Đảm bảo không quá nhỏ trên mobile
  };

  const cardHeadingStyle = {
    fontSize: '24px',
    color: '#333',
    margin: '20px 0 10px 0',
  };

  const cardParagraphStyle = {
    fontSize: '16px',
    color: '#666',
    margin: '10px 0 0 0',
  };

  const icon = {
    width: '50px',
    height: '50px',
    margin: '0 5px',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Về Chúng Tôi</h2>
      <p style={paragraphStyle}>
        Bean Farm cam kết cung cấp sản phẩm hữu cơ chất lượng cao từ các nhà cung cấp uy tín trên thế giới.
      </p>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <img src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_1.png?1716945232631" alt="Phân phối" style={icon} />
          <h3 style={cardHeadingStyle}>PHÂN PHỐI</h3>
          <p style={cardParagraphStyle}>
            Bean Farm luôn hướng đến xây dựng chuỗi cung ứng nông sản hàng đầu tại Việt Nam.
          </p>
        </div>
        <div style={cardStyle}>
          <img src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_2.png?1716945232631" alt="Sản phẩm" style={icon} />
          <h3 style={cardHeadingStyle}>SẢN PHẨM</h3>
          <p style={cardParagraphStyle}>
            Bean Farm luôn tìm kiếm và nhập sản phẩm hữu cơ chất lượng từ thị trường Châu Âu, Mỹ.
          </p>
        </div>
        <div style={cardStyle}>
          <img src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_3.png?1716945232631" alt="Chất lượng" style={icon} />
          <h3 style={cardHeadingStyle}>CHẤT LƯỢNG</h3>
          <p style={cardParagraphStyle}>
            Chỉ phân phối nông sản được chứng nhận uy tín: Demeter, EU Organic, USDA, AIAB, Vegan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutLabel;
