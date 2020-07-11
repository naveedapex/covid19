
import  React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
      alignItems: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function Header(){
const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          
          <Typography variant="h6"  className={classes.title}>
            COVID19 App
          </Typography>
         
        </Toolbar>
      </AppBar>
    )

}

export default Header;