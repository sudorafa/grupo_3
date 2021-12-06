import React from 'react';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

export default function Home() {
  const classes = useStyles();
  return (
    
    <Container maxWidth="lg" className={classes.container}>
      POST
    </Container>
  );
}
