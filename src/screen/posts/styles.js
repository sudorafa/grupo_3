import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  modal:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  paper: {
    position: 'absolute',
    width: '80%',
    height: '80%',
    overflow: 'scroll',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    
  }
}));
