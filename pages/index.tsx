import type { NextPage } from 'next';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import globalStyles from '../src/theme/global';
import ImageComponent from '../src/components/Image';
import mainPic from '../public/code-g4eb800820_1920.jpg';
import AppBar from '../src/components/AppBar';
import Introduction from '../src/components/Introduction';
/* import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; */
/* const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); */

const StyledBox = styled(Box)(({ theme }) => ({
  ...globalStyles,
  padding: theme.spacing(1),
  flexGrow: 1,
}));

const StyledMainImage = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row-reverse',
}));

const Home: NextPage = () => {
  return (
    <>
      <AppBar />
      <StyledBox sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <StyledMainImage>
                <ImageComponent
                  src={mainPic}
                  breakPoints={{ xs: 10 }}
                />
              </StyledMainImage>
            </Grid>
            <Grid item xs={6}>
              <Introduction />
            </Grid>
          </Grid>
        </Grid>
      </StyledBox>
    </>
  );
};
export default Home;
