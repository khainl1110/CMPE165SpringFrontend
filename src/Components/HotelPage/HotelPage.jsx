import * as React from 'react';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { cardClasses, InputLabel } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import LoggedInNavBar from '../../Components/NavBar/LoggedInNavBar.jsx';
import SearchBar from '../../Components/LandingPageSearchBar/SearchBar.jsx';
import HotelCard from '../../Components/HotelPage/HotelCard.jsx';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

var backend_url = "http://localhost:8080";
var num;

const theme = createTheme({

});

const styles = {
    paperContainer: {
        backgroundColor: `#E5E5E5`,
        position: 'static',
        width: '100vw',
        minHeight: '110vh',
    },
};

export default function HotelPage() {

    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let [sortBy, setSortBy] = useState('sort');
    let [hotels, setHotels] = useState([]);
    let [originalHotels, setOriginalHotels] = useState([]);
    let [propertyNames, setPropertyNames] = useState([]);
    let card = [];

    useEffect(() => {
        let email = localStorage.getItem('email');
        if (email !== '') {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        fetch(backend_url + "/room", { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                    setHotels(response);
                    setOriginalHotels(response);
                }, 1000);
            })
            .catch(e => {
                console.log('error' + e);
            })
    }, []);

    useEffect(() => {
        let hotelNames = [];
        hotels.map((room) => {
            console.log(room.hotelName);
            hotelNames.push(room.hotelName)
        })
        setPropertyNames(hotelNames);
    }, [hotels])

    const handleSort = (event) => {
        setSortBy(event.target.value);
        if (event.target.value === 'lohi') {
            hotels.sort(sortLoHi('price'));
        } else if (event.target.value === 'hilo') {
            hotels.sort(sortHiLo('price'));
        }
    };

    const sortHiLo = (price) => {
        return function (a, b) {
            if (a[price] < b[price])
                return 1;
            else if (a[price] > b[price])
                return -1;
            return 0
        }
    }

    const sortLoHi = (price) => {
        return function (a, b) {
            if (a[price] > b[price])
                return 1;
            else if (a[price] < b[price])
                return -1;
            return 0
        }
    }

    const filterByProperty = (selectedOption) => {
        if (selectedOption !== null) {
            let selectedHotels = [];
            hotels.map((room, event) => {
                if (room.hotelName === selectedOption) {
                    selectedHotels.push(room);
                }
            })
            setHotels(selectedHotels);
        } else if (selectedOption === null) {
            setHotels(originalHotels);
        }
    }

    for (let i = 0; i < hotels.length; i++) {
        num = i + 1;
        card.push(
            <Grid item xs={0}>
                <Box>
                    <HotelCard room={hotels[i]} />
                </Box>
            </Grid>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Paper style={styles.paperContainer} sx={{ boxShadow: 0 }}>
                <CssBaseline />
                {isLoggedIn &&
                    <LoggedInNavBar />
                }
                {!isLoggedIn &&
                    <NavBar />
                }
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ position: "relative", marginLeft: '-2%', }}>
                    <Grid item xs={0}>
                        <Box sx={{ marginTop: '8%' }}>
                            <SearchBar />
                        </Box>
                    </Grid>
                    <Grid item xs={0}>
                        <Box sx={{ marginTop: '41%', backgroundColor: "#F9FBF7" }}>
                            <Autocomplete
                                size="small"
                                disablePortal
                                id="combo-box-demo"
                                options={propertyNames}
                                sx={{ minWidth: 200 }}
                                onChange={(_event, selectedOption) => filterByProperty(selectedOption)}
                                renderInput={(params) => <TextField {...params} label="Filter By Property" />}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={0}>
                        <Box sx={{ marginTop: '45%', backgroundColor: "#F9FBF7" }}>
                            <Select
                                label="Sort By"
                                sx={{ width: 180 }}
                                value={sortBy}
                                size="small"
                                onChange={handleSort}
                            >
                                <MenuItem value={'sort'}>Sort By</MenuItem>
                                <MenuItem value={'lohi'}>Price: Low to High</MenuItem>
                                <MenuItem value={'hilo'}>Price: High to Low</MenuItem>
                            </Select>
                        </Box>
                    </Grid>

                    <Grid container direction="column" justifyContent="flex-end" alignItems="left" spacing={2} sx={{ position: "relative", marginTop: '1%', marginLeft: '25%', marginRight: '0%', }}>
                        <Grid item xs={0}>
                            <Box sx={{ marginTop: '0%' }}>
                                <Typography variant="h2" sx={{
                                    fontFamily: 'Baloo-Bhaina-2',
                                    fontWeight: 700,
                                    fontSize: '26px',
                                    color: '#424242'
                                }}>
                                    {hotels.length} Rooms Found
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={0}>
                            <Box sx={{ marginRight: '0%' }}>
                                {card}
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Paper>
        </ThemeProvider >
    )
}