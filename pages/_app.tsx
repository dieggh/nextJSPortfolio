import * as React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import { styled } from '@mui/styles';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme/theme';
import AppBar from '../src/components/AppBar';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}

        <Component {...pageProps} />

      </ThemeProvider>
    </>
  );
}
