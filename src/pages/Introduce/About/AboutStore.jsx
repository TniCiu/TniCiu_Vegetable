/* eslint-disable no-unused-vars */
import React from 'react';

function AboutStore() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3e8e41',
    padding: '30px 10px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '8px',
    flexWrap: 'wrap', // Đảm bảo nội dung không bị tràn khi màn hình nhỏ
  };

  const itemStyle = {
    textAlign: 'center',
    color: '#f1c40f',
    flex: '1',
    minWidth: '120px', // Đảm bảo mỗi item có kích thước tối thiểu trên mobile
    margin: '10px',
  };

  const numberStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    margin: 0,
  };

  const textStyle = {
    fontSize: '16px',
    color: 'white',
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <p style={numberStyle}>2</p>
        <p style={textStyle}>Năm Kinh Nghiệm</p>
      </div>
      <div style={itemStyle}>
        <p style={numberStyle}>200</p>
        <p style={textStyle}>Nhân Viên</p>
      </div>
      <div style={itemStyle}>
        <p style={numberStyle}>3000+</p>
        <p style={textStyle}>Khách Hàng</p>
      </div>
      <div style={itemStyle}>
        <p style={numberStyle}>8</p>
        <p style={textStyle}>Cửa Hàng</p>
      </div>
    </div>
  );
}

export default AboutStore;
