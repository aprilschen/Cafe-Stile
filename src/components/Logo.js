import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// react icons
import { FaCookieBite } from 'react-icons/fa';
import { flexCenter } from 'themes/commonStyles';
import { amber } from '@mui/material/colors';

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaCookieBite size={40} color={amber[700]} />
      <Typography
        sx={{
          ml: 1,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
        Café Stile
      </Typography>
    </Box>
  );
};

export default Logo;
