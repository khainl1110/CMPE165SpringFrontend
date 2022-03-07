import React from 'react';
import { Link } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import SearchBar from '../Components/LandingPageSearchBar/SearchBar.jsx';
import NavBar from '../Components/NavBar/NavBar.jsx';
/*images*/
import bg from "../assets/landingPage/landing_bg.jpg"
import aspen from "../assets/landingPage/aspen.png"
import orlando from "../assets/landingPage/orlando.png"
import miami from "../assets/landingPage/miami.png"
import bangkok from "../assets/landingPage/bangkok.png"


const theme = createTheme({
});

const styles = {
  paperContainer: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
      backgroundImage: `url(${bg})`,
      position: 'static',
  },
  bottomPage: {
      height: '45%',
      width: '100%',
      backgroundColor: '#8E8A86',
      position: 'static',
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper style={styles.paperContainer}>
        <Container component="main" justifyContent="center" position="absolute">
          <CssBaseline />
          <NavBar/>
          <Grid container direction="column" justifyContent="flex-start"  alignItems="center">
            <Grid item xs={0}>
            <Box sx={{
                position: "relative",
                marginTop: '62.5%',
                alignItems: 'left',
            }}
            >
              <Typography variant="h2" sx={{
                    fontFamily: 'Baloo-Bhaina-2',
                    fontWeight: 600,
                    fontSize: '75px',
                    color: '#FFFFFF'
                }}>
                  Welcome home.
              </Typography>
            </Box>
            <Grid item xs={0}>
              <Box sx={{
                position: "relative",
                marginTop: '9%',
                marginLeft: '25%',
                alignItems: 'center',
                mb: "10%",
              }}
              >
              <Typography variant="h5" sx={{
                    fontFamily: 'Baloo-Bhaina-2',
                    fontWeight: 500,
                    fontSize: '25px',
                    color: '#FFFFFF'
                }}>
                  Start Searching
              </Typography>
              </Box>
            </Grid>
            </Grid>
            <Grid item xs={0}>
              <SearchBar />
            </Grid>
            <Grid item xs={0}>
              <Box sx={{
                  position: "relative",
                  alignItems: 'left',
                  mb: "560%"
              }}
              >
                <Link to = "/signup">Returning Users</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper style={styles.bottomPage}>
            <Grid container direction="row" justifyContent="center"  alignItems="center">
            <Grid item xs={0}>
                    <Box sx={{
                    position: "relative",
                    marginTop: '5%',
                    marginLeft: '0%',
                    alignItems: 'left',
                    }}>
                    <Typography variant="h4" sx={{
                        fontFamily: 'Baloo-Bhaina-2',
                        fontweight: 600,
                        fontsize: '50px',
                        color: '#FFFFFF'
                    }}>
                        Ideas for your next trip:
                    </Typography>
                    </Box>
                    <Grid container item spacing={9} marginBottom={"5%"}>
                      <Grid item xs={3}>
                      <Box sx={{
                          position: "relative",
                          marginTop: '5%',
                          marginLeft: '0%',
                          alignItems: 'left',
                      }}>
                      <Card sx={{ minWidth: "130%", background: "#F9FBF7"}}>
                          <CardMedia
                          style={{height: "100%", width: "100%", paddingTop: '56.25%'}}
                          image={aspen}
                          title="Getaway"
                          />
                          <CardContent sx={{backgroundColor: "none", color: "none"}}>
                          <Typography variant="subtitle2" align="right" sx={{
                          fontFamily: 'Baloo-Bhaina-2',
                          fontweight: 700,
                          fontsize: '25px',
                          color: '#000000'
                          }}>
                          Romantic Anniversary Getaway in Aspen
                          </Typography>
                          </CardContent>
                          <CardActions>
                          <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>

                      </Box>
                      </Grid>

                      <Grid item xs={3}>
                      <Box sx={{
                          position: "relative",
                          marginTop: '5%',
                          marginLeft: '0%',
                          alignItems: 'left',
                      }}>
                      <Card sx={{ minWidth: "130%", background: "#F9FBF7" }}>
                          <CardMedia
                          style={{height: "100%", width: "100%", paddingTop: '56.25%'}}
                          image={orlando}
                          title="Family Vacation"
                          />
                          <CardContent sx={{backgroundColor: "none", color: "none"}}>
                          <Typography variant="subtitle2" align="right" sx={{
                          fontFamily: 'Baloo-Bhaina-2',
                          fontweight: 700,
                          fontsize: '25px',
                          color: '#000000'
                          }}>
                          Family-Friendly Vacation in Orlando
                          </Typography>
                          </CardContent>
                          <CardActions>
                          <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>
                      </Box>
                      </Grid>

                      <Grid item xs={3}>
                      <Box sx={{
                          position: "relative",
                          marginTop: '5%',
                          marginLeft: '0%',
                          alignItems: 'left',
                      }}>
                      <Card sx={{ minWidth: "130%", background: "#F9FBF7"}}>
                          <CardMedia
                          style={{height: "100%", width: "100%", paddingTop: '56.25%'}}
                          image={miami}
                          title="Spring Break"
                          />
                          <CardContent sx={{backgroundColor: "none", color: "none"}}>
                          <Typography variant="subtitle2" align="right" sx={{
                          fontFamily: 'Baloo-Bhaina-2',
                          fontweight: 700,
                          fontsize: '25px',
                          color: '#000000'
                          }}>
                          Spring Break in Miami
                          </Typography>
                          </CardContent>
                          <CardActions>
                          <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>

                      </Box>
                      </Grid>

                      <Grid item xs={3}>
                      <Box sx={{
                          position: "relative",
                          marginTop: '5%',
                          marginLeft: '0%',
                          alignItems: 'left',
                      }}>
                      <Card sx={{ minWidth: "130%", background: "#F9FBF7" }}>
                          <CardMedia
                          style={{height: "100%", width: "100%", paddingTop: '56.25%'}}
                          image={bangkok}
                          title="Bangkok"
                          />
                          <CardContent sx={{backgroundColor: "none", color: "none"}}>
                          <Typography variant="subtitle2" align="right" sx={{
                          fontFamily: 'Baloo-Bhaina-2',
                          fontweight: 700,
                          fontsize: '25px',
                          color: '#000000'
                          }}>
                          Just Because in Bangkok
                          </Typography>
                          </CardContent>
                          <CardActions>
                          <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>

                      </Box>
                    </Grid>
                    </Grid>
            </Grid>
            </Grid>
        </Paper>
    </ThemeProvider>
  );
}