import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import { FaCookieBite } from 'react-icons/fa';
import { Typography } from '@mui/material';
import { amber } from '@mui/material/colors';
import { Box } from '@mui/system';
const MobileSearch = () => {
  return (
      <Box sx={{display: 'flex'}}>
        <Box sx={{display: 'flex', mr: 2, mt: 1.4}}>
          <FaCookieBite size={30} color={amber[700]} />
          <Typography
            sx={{
              ml: 1,
              fontSize: '18px',
              fontWeight: 'bold',
            }}
            component="h3"
          >
            Café Stile
          </Typography>
        </Box>

        <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
          border: '1px solid #ccc',
          borderRadius: 20,
        }}
      >
        <IconButton sx={{ p: '10px' }}>
          <FaSearch />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="What services are you looking for?" />
        <IconButton type="submit" sx={{ p: '10px' }}>
          <VscSettings />
        </IconButton>
      </Paper>
      </Box>
  );
};

export default MobileSearch;
