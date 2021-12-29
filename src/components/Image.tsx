import React from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
import { styled } from '@mui/styles';
import BreakPoint from '../interfaces/breakPoint';

interface Props {
  breakPoints: BreakPoint;
  src: string | StaticImageData
}

const StyledImage = styled(Image)(() => ({
  borderRadius: '15px',
}));

const ImageComponent = (props: Props) => {
  const { breakPoints: { xs, md, sm }, src } = props;
  return (
    <Grid item xs={xs} {...md && { md }} {...sm && { sm }}>
      <StyledImage
        src={src}
        alt="FrontEnd"
      />
    </Grid>
  );
};

export default ImageComponent;
