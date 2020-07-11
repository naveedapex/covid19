import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AppContext from './../AppContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Selector() {
    const classes = useStyles();
  const [age, setAge] = React.useState('');
  const { data, setData } = useContext(AppContext);
  let {current,countryData, globalData}=data;
  
  
  const handleChange = (event) => {
      if (event.target.value === '') {
          current = globalData;
      } else {
          const country = countryData.filter((record) => { return record.country === event.target.value });
          current = country[0];
      }

     setData({current, countryData, globalData});
     setAge(event.target.value);
  };
  const counstriesList=countryData.map(function(country, i){
      return   <MenuItem value={country.country}  key={i}>{country.country}</MenuItem>
  })
  return ( 
  <div>
     <FormControl className={classes.formControl}>  
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
         Countries
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value=""  >Global</MenuItem> 
          {counstriesList}
        </Select>
      
      </FormControl>
      </div>
  );
}

export default Selector;
