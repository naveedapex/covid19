import React,  { useState, useEffect }from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Selector from './components/Selector';
import Records from './components/Records';
import Chart from './components/Chart';
import AppContext from './AppContext';



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


function App() {
  const classes = useStyles();
  let current={cases:0, deaths:0, active:0, recovered: 0}
  let countryData=[];
  const [data, setData]=useState({current, countryData});
  useEffect( () => {
    async function fetchData(){
      let response = await fetch('https://corona.lmao.ninja/v2/countries');
    let countryData = await response.json()
    console.log(countryData);
    let response2 = await fetch('https://corona.lmao.ninja/v2/all');
    let globalData= await response2.json();
    let {cases,deaths,recovered,active}=globalData;
    let current={cases,deaths,recovered,active};
    setData({current,globalData, countryData})
    }
    fetchData();
   }, [])
  
 
  return (
    <AppContext.Provider value={{ data, setData }}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Header />
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={4}>
          <Selector />
        </Grid>
       
        <Grid item xs={4}>
        
        </Grid>
        <Records/>
        <Grid item xs={3}>
        
        </Grid>
        <Grid item xs={6}>
         <Chart/>
        </Grid>
        <Grid item xs={3}>
         
        </Grid>
        <Grid item xs={3}>
         
        </Grid>
        <Grid item xs={3}>
        
        </Grid>
        <Grid item xs={3}>
          
        </Grid>
      </Grid>
    </div>
    </AppContext.Provider>
  );
}

export default App;
