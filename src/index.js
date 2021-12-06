import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBarApp from './components/app-bar';
import menus from './constants/menu';
import Copyright from './components/footer';
import Courses from './screen/courses';
import Post from './screen/posts';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const getTitleMenu = (menu) => {
  switch (menu) {
    case menus.COURSES:
      return 'Cursos';
    case menus.POSTS:
      return 'Posts';
    case menus.ABOUT:
      return 'Sobre';
    default:
      return 'Cursos';
  }
};

export default function App() {
  const classes = useStyles();
  const [menu, setMenu] = React.useState(menus.COURSES);

  const handleMenu = (menuSelected) => {
    setMenu(menuSelected);
  };

  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBarApp title={getTitleMenu(menu)} handleMenu={handleMenu} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        { menu === menus.COURSES
          && <Courses />}
        { menu === menus.POSTS
          && <Post />}
        { menu === menus.ABOUT
          && (
          <Container maxWidth="lg" className={classes.container}>
              Esse projeto visou suprir as necessidades apresentadas pela empresa Digibee, trazendo uma interface gráfica dinâmica, um visual agradável e funcional.
          </Container>
          )}

        <Box pt={4}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
