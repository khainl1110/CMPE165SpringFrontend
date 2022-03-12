import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export default function SearchBar() {

  const [value, setValue] = React.useState([null, null]);
  return (
    <Box sx={{
      flexGrow: 0,
      width: "100%",
      height: "100%",
      position: "relative",
    }}>
      <Paper position="relative" sx={{ borderRadius: 10, padding: 0.5, backgroundColor: "#F9FBF7" }}>
        <Toolbar variant="regular" >
          <TextField id="Location" label="Location" variant="outlined" />
          <Box sx={{ mx: 0 }}></Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ mx: 1 }}></Box>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 1 }}></Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <Box sx={{ mx: 1 }}></Box>
          <TextField id="Guests" label="Guests" variant="outlined" />
          <Box sx={{ mx: 1 }}></Box>
          <IconButton edge="start" color="inherit" aria-label="menu" component={Link} to='/hotelTest' sx={{ marginLeft: "auto", backgroundColor: "#9BB40D", color: "#FFFFFF" }}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Paper>
    </Box>
  );
}
/*add onClick={()=>{}} to button above to pass search info and link to search page */