import React, { useState, useEffect } from "react";
import {
    CssBaseline,
    Grid,
    TextField,
    Typography,
    Container,
    Paper,
    Box,
    Button
} from '@mui/material/';
import LoggedInNavBar from '../NavBar/LoggedInNavBar.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { backend_url } from "../../links";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DateRangePicker from '@mui/lab/DateRangePicker';
import { useLocation } from "react-router-dom";
import { Inbox } from "@mui/icons-material";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export default function EditReservation(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const [reservations, setReservations] = useState([]);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [dates, setDates] = useState([today, tomorrow]);

    const theme = createTheme();

    const styles = {
        paperContainer: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            minHeight: '100vh',
            width: '100%',
        },
        imageContainer: {
            backgroundSize: 'cover',
            position: 'relative',
            minHeight: '200px',
            minWidth: '300px',
        }
    };

    const email = localStorage.getItem('email');

    useEffect(() => {
        setRoomID(location.state.roomId);
        if (email !== '') {
            setIsLoggedIn(true);
        }
        else {
            window.location.replace('/');
        }
    }, [])

    const location = useLocation();

    const [room, setRoom] = useState([]);
    const [roomID, setRoomID] = useState(location.state.roomId);
    const [state, setState] = useState(location.state);
    console.log(state);

    useEffect(() => {
        setTimeout(() => {
            if(roomID == undefined) {
                setRoomID(location.state.roomId);
                fetch(backend_url + "/room/" + roomID, { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    setRoom(data);            
                })
                .catch(e => {
                    console.log('error' + e);
                })
            }
            else {
                fetch(backend_url + "/room/" + roomID, { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    setRoom(data);
                })
                .catch(e => {
                    console.log('error' + e);
                })
            }
            
        }, 100)  
    }, [])

    // will be edited
    const nextClick = () => {
        alert("You clicked NEXT button");
    };

    const cancleClick = () => {
        alert("You clicked CANCEL RESERVATION button");
    };

    const backClick = () => {
        window.location.replace("/myBookings");
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper style={styles.paperContainer}>
                <CssBaseline />
                {isLoggedIn &&
                <Container component="main" justify="flex-start">
                    <LoggedInNavBar />
                    <Grid container direction="row" justify="flex-start" alignItems="center" width="100%">
                        <ListItemButton onClick={backClick} sx={{
                            marginTop: '8%',
                            maxWidth: '40%'
                        }}>
                            <ListItemIcon>
                                <ArrowBackIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={{fontFamily: 'Baloo-Bhaina-2', fontWeight: 600}}>
                                    Back to My Bookings
                                </Typography>
                            </ListItemText>
                        </ListItemButton>

                        <List sx={{
                            width: '100%',
                            minWidth: '600px',
                            marginTop: '3%',
                            marginBottom: "10%",
                            alignItems: 'center',
                            justifyContent: "center",
                        }}>
                            <Box sx={{backgroundColor: "#eeeeee"}}>
                                <ListItem>
                                    <Typography sx={{
                                    fontSize: 26,
                                    fontWeight: 600,
                                    fontFamily: 'Baloo-Bhaina-2'
                                    }}> 
                                        Modify Your Reservation: 
                                    </Typography>
                                    <Typography sx={{
                                    fontSize: 26,
                                    fontWeight: 600,
                                    marginLeft: "1%",
                                    color: "#a7bd2a",
                                    textDecoration: 'underline',
                                    fontFamily: 'Baloo-Bhaina-2'
                                    }}> 
                                    {room.hotelName}
                                    </Typography>
                                </ListItem>
                            
                           
                            <List>
                                <ListItem>
                                    <Paper style={styles.imageContainer} sx={{ backgroundImage: `url(${room.image})`, }} />
                                    <ListItemText>
                                        <Typography sx={{
                                            marginLeft: "3%",
                                            fontFamily: 'Baloo-Bhaina-2'
                                        }}>
                                            {room.description}
                                        </Typography>
                                        <Typography sx={{
                                            marginLeft: "3%",
                                            fontFamily: 'Baloo-Bhaina-2'
                                        }}>
                                            {room.roomInfo} //Test
                                        </Typography>
                                        <Typography sx={{
                                            marginLeft: "3%",
                                            fontFamily: 'Baloo-Bhaina-2'
                                        }}>
                                            {room.amenities} //Test
                                        </Typography>
                                        <Box sx={{width: "75%", marginLeft: "10%"}}>
                                        <ListItem>
                                            <ListItemText>
                                                <ListItem>
                                                    <Typography sx={{fontFamily: 'Baloo-Bhaina-2'}}>
                                                        Check in
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography sx={{fontSize: 20, fontFamily: 'Baloo-Bhaina-2'}}>
                                                    {state.checkIn} //Test
                                                    </Typography>
                                                </ListItem>
                                            </ListItemText>
                                            <ListItemText>
                                            <ListItem>
                                                    <Typography sx={{fontFamily: 'Baloo-Bhaina-2'}}>
                                                        Check out
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography sx={{fontSize: 20, fontFamily: 'Baloo-Bhaina-2'}}>
                                                    {state.checkOut} //Test
                                                    </Typography>
                                                </ListItem>
                                            </ListItemText>
                                            <ListItemText>
                                            <ListItem>
                                                    <Typography sx={{fontFamily: 'Baloo-Bhaina-2'}}>
                                                        Guest
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <Typography sx={{fonSize: 20, fontFamily: 'Baloo-Bhaina-2'}}>
                                                    {room.numGuest}
                                                    </Typography>
                                                </ListItem>
                                                
                                            </ListItemText>  
                                        </ListItem>
                                        </Box>
                                            
                                    </ListItemText>
                                    
                                    <ListItemText>
                                        <Typography sx={{
                                            marginLeft: "10%",
                                            fontSize: 30,
                                            fontWeight: 600,
                                            color: "red",
                                            fontFamily: 'Baloo-Bhaina-2'
                                        }}>
                                            ${room.price}
                                        </Typography>
                                        
                                        <Typography sx={{
                                            
                                            fontWeight: 600,
                                            color: "red",
                                            fontFamily: 'Baloo-Bhaina-2'
                                        }}>
                                            for 1 nights 
                                        </Typography>
                                    </ListItemText>
                                    
                                </ListItem>
                                
                                
                            </List>
                            </Box>

                            <List sx={{
                                width: '100%',
                            }}>
                                <Box sx={{marginTop: "5%"}}>
                                    <Typography sx={{fontSize: 22,
                                        fontWeight: 600,
                                        fontFamily: 'Baloo-Bhaina-2',}}>
                                        Your Info
                                    </Typography>
                                    <ListItem>
                                        <ListItemText>
                                            <TextField
                                                required
                                                autoFocus
                                                id="firstName"
                                                name="firstName"
                                                label="First Name" 
                                                defaultValue={state.firstName}
                                                sx={{
                                                    width: "90%"
                                                }}
                                                />
                                        </ListItemText>
                                        <ListItemText>
                                            <TextField
                                            required
                                            autoFocus
                                            id="lastName"
                                            name="lastName"
                                            label="Last Name" 
                                            defaultValue={state.lastName}
                                            sx={{
                                                width: "90%"
                                            }}
                                            />
                                        </ListItemText>
                                        
                                    </ListItem>
                                    <ListItem sx={{marginTop: "1%"}}>
                                        <ListItemText>
                                                <TextField
                                                    required
                                                    autoFocus
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    label="Email" 
                                                    defaultValue={email}
                                                    sx={{
                                                        width: "45%"
                                                    }}
                                                    />
                                            </ListItemText>
                                            
                                    </ListItem>
                                </Box>

                                <Box sx={{marginTop: "5%"}}>
                                    <Typography sx={{fontSize: 22,
                                        fontWeight: 600,
                                        fontFamily: 'Baloo-Bhaina-2',}}>
                                        Booking Details
                                    </Typography>
                                    <ListItem>
                                    
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DateRangePicker
                                            startText="Check-in"
                                            endText="Check-out"
                                            value={dates}
                                            onChange={(newValue) => {
                                                setDates(newValue);
                                            }}
                                            renderInput={(startProps, endProps) => (
                                                <React.Fragment>
                                                    <TextField required autoFocus sx={{ }} value={dates[0]} {...startProps} />
                                                    <TextField required autoFocus sx={{ marginLeft: "10%" }} value={dates[1]} {...endProps} />
                                                </React.Fragment>
                                            )}
                                            />
                                        </LocalizationProvider>
                                        
                                        
                                    </ListItem>
                                    <ListItem sx={{display:'flex', justifyContent:'flex-right', marginTop: "5%", marginLeft: "3%"}}>
                                        <Typography sx={{fontFamily: 'Baloo-Bhaina-2', width: "80%"}}>
                                        Modifications to reservations that change the check-in or check-out date are dependent on your hotel’s availability for your chosen room type. We cannot guarantee that your room will be available for your new dates. Your reservation will not change if your new dates are unavailable.
                                        </Typography>
                                    </ListItem>
                                </Box>
                                
                                <Box  textAlign='center' sx={{marginTop: "5%"}}>
                                    <ListItemText>
                                        <Button onClick={nextClick} sx={{
                                            color: "white", 
                                            backgroundColor: "#9BB40D", 
                                            width: "100px",
                                            '&:hover': {
                                                backgroundColor: '#9BB40D',
                                                borderColor: '#0062cc',
                                                boxShadow: 'none',
                                              },
                                            '&:focus': {
                                            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                                            }
                                            }}>Next</Button>
                                        <Button onClick={cancleClick} sx={{color: "black", marginLeft: "10%"}}>Cancel Reservation</Button>
                                    </ListItemText>
                                </Box>
                                
                            </List>
                            

                            
                        </List>

                    </Grid>
                </Container>
                }
            </Paper>
        </ThemeProvider>
    )
}