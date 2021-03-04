import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';

const FormSuccess = () => {
  return (
    <Fade bottom duration={1000} delay={800} distance="30px">
      <Grid >
        <Typography fontColor='light'>Merci ! Je vous contacte dès que possible 😉</Typography>
      </Grid>
    </Fade>
  );
};

export default FormSuccess;
