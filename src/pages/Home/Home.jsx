import React, { useEffect, useState } from 'react';
import AppBarComponent from "../../Components/AppBar/AppBar";
import Footer from "../../Components/Footer/Footer";
import PartnerLogos from '../../Components/Footer/Partner/PartnerLogos';
import Promotion from './Promotion/Promotion';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Toolbar, useMediaQuery } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
  }, []);

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
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: isMobile ? '20px' : '25px', mb: 2 }}>
          Danh mục nổi bật
        </Typography>
        <Swiper
          modules={[ Pagination]} // Import Navigation + Pagination
          spaceBetween={isMobile ? 10 : 50}
          slidesPerView={isMobile ? 3 : 6}
          pagination={{ clickable: true }}
          style={{
            position: "relative",
            paddingBottom: "40px", 
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  backgroundColor: "#f4f6fa",
                  borderRadius: "10px",
                  padding: isMobile ? "4px" : "30px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: isMobile ? "100px" : "180px",
                  height: isMobile ? "100px" : "140px",
                }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  style={{
                    borderRadius: "100%",
                    width: isMobile ? "50px" : "90px",
                    height: isMobile ? "50px" : "90px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: isMobile ? "10px" : "16px",
                    mt: 1,
                  }}
                >
                  {category.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: isMobile ? "8px" : "12px",
                  }}
                >
                  {category.products} sản phẩm
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Promotion />
      <PartnerLogos />
      <Footer />
      <ChatAI />
    </div>
  );
};

export default Home;
