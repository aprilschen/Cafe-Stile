import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// react icons
import { FaCookieBite } from 'react-icons/fa';
import { flexCenter } from 'themes/commonStyles';
import { pink } from '@mui/material/colors';

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaCookieBite size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
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
