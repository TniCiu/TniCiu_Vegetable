import React, { useState } from 'react';
import { Box, IconButton, TextField, Button, Typography, Avatar, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { sendMessageAPI } from '../../apis';

const ChatAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isBotResponding, setIsBotResponding] = useState(false);

  // Xác định kích thước màn hình
  const isMobile = useMediaQuery('(max-width:600px)'); 

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput('');
      setIsBotResponding(true);

      try {
        const userQuery = {
          conversation_id: "123",
          bot_id: "7448579052958793745",
          user: "29032201862555",
          query: input,
          stream: false
        };

        const botResponse = await sendMessageAPI(userQuery);

        if (botResponse.answer) {
          const botAnswerMessage = { sender: 'bot', text: botResponse.answer };
          setMessages(prevMessages => [...prevMessages, botAnswerMessage]);
        }

      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setIsBotResponding(false);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div>
      <IconButton
        onClick={toggleChat}
        sx={{
          position: 'fixed',
          bottom: isMobile ? '15px' : '20px',
          right: isMobile ? '15px' : '20px',
          zIndex: 1000,
          bgcolor: 'transparent',
          color: 'white',
          width: isMobile ? 65 : 80, 
          height: isMobile ? 65 : 80,
          borderRadius: '50%',
          backgroundImage: 'url("https://res.cloudinary.com/ddmsl3meg/image/upload/v1718897959/pg2j4gn5tjt46fjsljph.png")',
          backgroundSize: 'contain',
          '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
        }}
      >
        {!isOpen && <div style={{ width: '100%', height: '100%' }} />}
      </IconButton>

      {isOpen && (
        <Box
          sx={{
            position: 'fixed',
            bottom: isMobile ? '0px' : '80px',
            right: isMobile ? '0px' : '20px',
            width: isMobile ? '100%' : '350px',
            height: isMobile ? '95vh' : '500px',
            bgcolor: 'white',
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            borderRadius: isMobile ? '0' : '16px',
          }}
        >
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#4caf50', color: 'white', p: 1, borderRadius: isMobile ? '0' : '16px 16px 0 0' }}>
            <IconButton sx={{ color: 'white' }} onClick={toggleChat}>
              <ArrowBackIcon />
            </IconButton>
            <Avatar
              alt="ChatBot"
              src="https://res.cloudinary.com/ddmsl3meg/image/upload/v1718897959/pg2j4gn5tjt46fjsljph.png"
              sx={{ width: 50, height: 50 }}
            />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 1 }}>
              <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Trợ lý của Bean</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 8, height: 8, bgcolor: '#9bd529', borderRadius: '50%' }} />
                <Typography variant="caption" sx={{ ml: 0.5 }}>Online</Typography>
              </Box>
            </Box>
            <IconButton sx={{ color: 'white' }}>
              <MoreVertIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }} onClick={toggleChat}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box sx={{ flex: 1, p: 2, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  p: 1,
                  m: 1,
                  borderRadius: '12px',
                  bgcolor: message.sender === 'user' ? '#e0f7fa' : '#f1f8e9',
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  wordWrap: 'break-word',
                }}
              >
                <Typography variant="body1">{message.text}</Typography>
              </Box>
            ))}
            {isBotResponding && (
              <Box sx={{ p: 1, m: 1, borderRadius: '12px', bgcolor: '#f1f8e9', alignSelf: 'flex-start' }}>
                <Typography variant="body2" sx={{ color: '#777', fontStyle: 'italic' }}>Đang phản hồi...</Typography>
              </Box>
            )}
          </Box>

          {/* Input */}
          <Box sx={{ display: 'flex', p: 1, borderTop: '1px solid #ddd' }}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              sx={{ borderRadius: '12px' }}
            />
            <Button
              variant="contained"
              onClick={handleSend}
              endIcon={<SendIcon sx={{ color: 'white' }} />}
              sx={{ ml: 0.5, borderRadius: '12px', color: 'white', fontSize: '13px' }}
            />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default ChatAI;
