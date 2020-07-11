import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

import AppContext from './../AppContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardContent: {
    alignItems: 'center'
  },
  cardContainer: {
      paddingLeft: 25,
      paddingRight: 25

  }
}));

export default function Records() {
  const classes = useStyles(); 
  const { data } = useContext(AppContext); 
  const {current} =data;

  return (
    <Grid container spacing={3} justify="center" className={classes.cardContainer}>
    <Grid item xs={3}>
   <Card className={classes.root+ ' infected'}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            C
          </Avatar>
        }
       
        title="Confirmed Cases"
        
      />
      
      <CardContent className={classes.cardContent}>
                                        
        <Typography variant="h5" component="h2" align="center">
        <CountUp start={0} end={current.cases} duration={2.75} separator="," />
       
        </Typography>
        <Typography color="textSecondary" align="center">
              {new Date().toDateString()}
            </Typography>
      </CardContent>      
    </Card>
  </Grid>
  <Grid item xs={3}>
    <Card className={classes.root+ ' active'}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           A
          </Avatar>        }
       
        title="Active Cases"        
      />      
      <CardContent className={classes.cardContent}>                                        
        <Typography variant="h5" component="h2" align="center">
        <CountUp start={0} end= {current.active} duration={2.75} separator="," />
    
        </Typography>
        <Typography color="textSecondary" align="center">
              {new Date().toDateString()}
            </Typography>
      </CardContent>      
    </Card>
  </Grid>
  <Grid item xs={3}>
  <Card className={classes.root+ ' recovered'}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>        }
       
        title="Recovered Cases"        
      />      
      <CardContent className={classes.cardContent}>                                        
        <Typography variant="h5" component="h2" align="center">
        <CountUp start={0} end= {current.recovered} duration={2.75} separator="," />
   
        </Typography>
        <Typography color="textSecondary" align="center">
              {new Date().toDateString()}
            </Typography>
      </CardContent>      
    </Card>
  </Grid>
  <Grid item xs={3}>
   <Card className={classes.root+ ' deaths'}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           D
          </Avatar>        }
       
        title="Death Cases"        
      />      
      <CardContent className={classes.cardContent}>                                        
        <Typography variant="h5" component="h2" align="center">
        <CountUp start={0} end= {current.deaths} duration={2.75} separator="," />
    
        </Typography>
        <Typography color="textSecondary" align="center">
              {new Date().toDateString()}
            </Typography>
      </CardContent>      
    </Card>
  </Grid>    
  </Grid>
  );
}
