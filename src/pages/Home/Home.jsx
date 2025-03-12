import React, { useEffect, useState } from 'react';
import AppBarComponent from "../../Components/AppBar/AppBar";
import Footer from "../../Components/Footer/Footer";
import PartnerLogos from '../../Components/Footer/Partner/PartnerLogos';
import Promotion from './Promotion/Promotion';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Toolbar, useMediaQuery } from '@mui/material';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import ChatAI from '../../Components/ChatAI/ChatAI';
import { fetchCountCategoriesAPI } from '../../apis';

const Home = () => {
  const [categories, setCategories] = useState([
    { title: 'Rau củ quả', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_1.png?1716945232631', products: 0 },
    { title: 'Trái cây', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_2.png?1716945232631', products: 0 },
    { title: 'Thịt', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_3.png?1716945232631', products: 0 },
    { title: 'Trứng', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_4.png?1716945232631', products: 0 },
    { title: 'Đồ uống', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_5.png?1716945232631', products: 0 },
    { title: 'Bánh và sữa', image: 'https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/danhmuc_6.png?1716945232631', products: 0 },
  ]);

  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const fetchCategoryCounts = async () => {
      const data = await fetchCountCategoriesAPI();
      const updatedCategories = categories.map((category) => {
        const matchingCategory = data.find((item) => item.categoryName === category.title);
        return {
          ...category,
          products: matchingCategory ? matchingCategory.productCount : 0,
        };
      });
      setCategories(updatedCategories);
    };

    fetchCategoryCounts();

    new Swiper('.swiper-container', {
      slidesPerView: isMobile ? 2 : 6, // 2 slide trên mobile, 6 trên PC
      spaceBetween: isMobile ? 10 : 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, [isMobile]);

  return (
    <div>
      <AppBarComponent />
      
      {/* Banner quảng cáo */}
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card style={{ position: 'relative' }}>
              <CardMedia
                component="img"
                alt="Promotion"
                height={isMobile ? "145" : "450"} // Điều chỉnh chiều cao theo màn hình
                image="https://res.cloudinary.com/ddmsl3meg/image/upload/v1720427645/z5613427940386_f1d0800928234e9ab5ed630b9ef1bdbf_qc04x3.jpg"
                title="Rau Tươi Giảm Giá Lớn"
              />
              <CardContent
                style={{
                  position: 'absolute',
                  top: '20%',
                  left: isMobile ? '5%' : '10%',
                  color: 'white',
                }}
              >
                <Toolbar />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Danh mục sản phẩm */}
      <Box p={3}>
        <Typography variant="h5" component="div" style={{ fontWeight: 'bold', fontSize: isMobile ? '20px' : '25px' }}>
          Danh mục nổi bật
        </Typography>
        <div className="swiper-container">
  <div className="swiper-wrapper">
    {categories.map((category, index) => (
      <div
        key={index}
        className="swiper-slide"
        style={{
          backgroundColor: '#f4f6fa',
          borderRadius: '10px',
          padding: isMobile ? '3px' : '5px', // Giảm padding trên mobile
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Căn giữa nội dung
          width: isMobile ? '90px' : '120px', // Giảm kích thước trên mobile
          height: isMobile ? '110px' : '150px', // Giảm chiều cao trên mobile
        }}
      >
        <div className="item-cate">
          <img
            src={category.image}
            alt={category.title}
            style={{
              borderRadius: '100%',
              width: isMobile ? '60px' : '100px', // Giảm kích thước ảnh trên mobile
              height: isMobile ? '60px' : '100px',
            }}
          />
          <Typography
            variant="h6"
            component="div"
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: isMobile ? '12px' : '16px', // Giảm font-size trên mobile
              marginTop: '4px',
            }}
          >
            {category.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: isMobile ? '10px' : '12px', // Giảm font-size số lượng sản phẩm
            }}
          >
            {category.products} sản phẩm
          </Typography>
        </div>
      </div>
    ))}
  </div>
</div>

      </Box>

      <Promotion />
      <PartnerLogos />
      <Footer />
      <ChatAI />
    </div>
  );
};

export default Home;
