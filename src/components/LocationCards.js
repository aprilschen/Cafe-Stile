import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { locations as cardLocations } from 'data/mock-data';
import CarouselCard from './CarouselCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

function LocationCards() {
  const URL = "http://127.0.0.1:8000/api/listings";
  const [cards] = useState(cardLocations);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        try {
          const response = await axios.get(URL)
            .then((res) => {
              setData(res.data.data)
            })
        } catch(error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      })();
    }, []);

    if (loading===true) {
      return (
        <div>Loading...</div>
      );
    }
    console.log(data[0])
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {data.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
