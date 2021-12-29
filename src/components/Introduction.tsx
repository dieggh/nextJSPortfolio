import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const aboutPage = 'diego-castro';

const Introduction = () => {
  const router = useRouter();

  const handleRedirection = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(aboutPage);
  };

  return (
    <Grid container>
      <Grid item xs={10}>
        <Typography variant="h2" textAlign="justify">
          Hola!
        </Typography>
        <Typography variant="h5" textAlign="justify">
          Soy Diego Humberto Castro!
          Desarrollador web, principalmente trabajo en javascript, node.js, react / native, next.js.
          <br />
          También tengo conocimiento en c# y php.
        </Typography>
        <Typography variant="h6" textAlign="justify">
          <Link href={aboutPage} onClick={handleRedirection}>Acerca de mí</Link>
        </Typography>
      </Grid>
      <Grid marginTop={3}>
        <Typography variant="h5" textAlign="justify">
          En este lugar público mis pensamientos y opiniones sobre diversos temas, desde música,
          pasando por videojuegos, anime y algo de desarrollo de software
        </Typography>
      </Grid>
    </Grid>

  );
};

export default Introduction;
