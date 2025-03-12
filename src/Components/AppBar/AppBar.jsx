import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Components/Account/AuthContext';
import { AppBar, Toolbar, IconButton, InputBase, Button, Badge, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Profiles from './Menus/Profiles';
import { fetchCartItemsAPI } from '../../apis';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  borderRadius: theme.shape.borderRadius,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '45ch',
    },
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  maxHeight: '40px',
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    maxHeight: '50px',
  },
}));

const AppBarComponent = ({ updateCartItems }) => {
  const { isAuthenticated } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await fetchCartItemsAPI(localStorage.getItem('id'));
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, [updateCartItems]);

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: '#f2f3f4' }} elevation={0}>
        <Toolbar>
          {/* Hiển thị menu trên mobile */}
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <LogoImage src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/logo.png?1718181939137" alt="Logo" />

          {/* Tìm kiếm (ẩn trên mobile) */}
          {!isMobile && (
            <Search sx={{ backgroundColor: 'white' }}>
              <SearchIconWrapper sx={{ backgroundColor: 'white' }}>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Bạn muốn tìm gì?"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          )}

          <div style={{ flexGrow: 1 }} />

          {/* Hiển thị các nút điều hướng trên PC */}
          {!isMobile ? (
            <>
              <Button color="inherit" href="/">Trang chủ</Button>
              <Button color="inherit" href="/Introduce">Giới thiệu</Button>
              <Button color="inherit" href="/Customer/Product">Sản phẩm</Button>
              <Button color="inherit" href="/Customer/Voucher">Khuyến mãi</Button>
              <Button color="inherit" href="/News">Tin tức</Button>
              <Button color="inherit" href="/ContactPage">Liên hệ</Button>
            </>
          ) : null}

          {/* Icon yêu thích */}
          <IconButton color="inherit">
            <Badge badgeContent={0} color="success">
              <FavoriteBorderOutlinedIcon />
            </Badge>
          </IconButton>

          {/* Giỏ hàng */}
          <IconButton color="inherit" href="/customer/ShoppingCart">
            <Badge badgeContent={cartItems.length} color="success">
              <ShoppingBagOutlinedIcon />
            </Badge>
          </IconButton>

          {/* Thông báo */}
          <IconButton color="inherit">
            <Badge badgeContent={0} color="success">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          {/* Tài khoản */}
          {isAuthenticated ? (
            <Profiles />
          ) : (
            <IconButton color="inherit" href="/account/login">
              <AccountCircleOutlinedIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer cho mobile */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItemButton component="a" href="/">Trang chủ</ListItemButton>
          <ListItemButton component="a" href="/Introduce">Giới thiệu</ListItemButton>
          <ListItemButton component="a" href="/Customer/Product">Sản phẩm</ListItemButton>
          <ListItemButton component="a" href="/Customer/Voucher">Khuyến mãi</ListItemButton>
          <ListItemButton component="a" href="/News">Tin tức</ListItemButton>
          <ListItemButton component="a" href="/ContactPage">Liên hệ</ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default AppBarComponent;
