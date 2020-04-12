// Load Core React Modules + Cookies + CSS
import React, {useEffect} from 'react';

import { useHistory } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


//import Cookies from 'universal-cookie';
import './css/Landing.css';

// Load Core Material UI Elements
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Import Custom Components
import NavBar from '../Components/NavBar';
import NavBarMobile from '../Components/NavBarMobile';

// Import Resources
import LoremIpsum from '../Resources/LoremIpsum'
import ColorPalette from '../Resources/ColorPalette'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({

	body: {
			 backgroundImage: 'url("../../Resources/Artboard 2.png");',
			  backgroundSize: 'cover;'
	},

	landingTitle: {
		textAlign: 'left',
		[breakpoints.only('xs')]: {
	  		fontSize: '5em'
  		},
		//paddingRight: '50px'
	},
	landingBody: {
		textAlign: 'justify;',
  		textJustify: 'inter-word;',
  	 	//paddingRight: '50px'
	},
	button: {
	  [breakpoints.only('xs')]: {
	  	//marginLeft: '30vw'
  		},
	},

  footer: {
    textAlign: 'left',
    opacity: '0.4',
    //borderTop: 'solid 1px white',
    //borderBottom: 'solid 1px white',
    // fontWeight: '200',
    // bottom:'0',
    // zIndex: '9999;',
    // backgroundColor: 'rgba(0, 0, 0, 0.3);',
    padding:'20px'
  }


}));

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
        main: ColorPalette.white
      }
    }
  },
)

const BASE_URL = process.env.REACT_APP_BASE_URL

const Landing = () => {

	const history = useHistory();
	const styles = useStyles()

  			return (
  				  <div className={styles.body}>
  				  <div className="container justify-content-center">
  				   <Container>
  				    <BrowserView>
  				      <NavBar/>
  				    </BrowserView>
  				    <MobileView>
  				      <NavBarMobile />
  				    </MobileView>
    				    <MuiThemeProvider theme={theme}>
      				    <Grid
      				      container
      				      direction="column"
      					    justify="center"
      					    alignItems="flex-start"
      					    style={{minHeight: '80vh', maxWidth: '30vw'}}

      				    >
        				    <Grid item>
        				      <Typography 
        				        variant="h1"
        				        className={styles.landingTitle}
        				        gutterBottom

        				      >
        				        Optipyzer
        				      </Typography>
        				      <Typography 
        				        variant="body1"
        				        className={styles.landingBody}
        				      >
        				        A fast, effective, and flexible codon optimization tool. Built with Python, the algorithm can codon-optimize your g blocks for multiple species at once, giving preference to one or more espression systems at a time. The algorithm utilizes the most recent codon usage data available to dynamically generate an optimal sequence for you in seconds.
        				      </Typography>
        				    </Grid>
        				    <br></br>
        				      <Button
        				        variant="outlined"
        				        color="primary"
        				        onClick={() => {
        				        	history.push('./optimize')
        				        }}
        				        className={styles.button}
        				      >
        				        Lets Optimize
        				      </Button>
      				    </Grid>
    				    </MuiThemeProvider>
                <footer
                  className={styles.footer}
                >
                  <Box>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        Made with ❤ by Nathan LeRoy
                      </Grid>
                      <Grid item>
                        <a href="https://twitter.com/NathanJLeRoy" style={{color: 'white'}}>Twitter</a>
                      </Grid>
                      <Grid item>
                        <a href="https://github.com/NLeRoy917" style={{color: 'white'}}>GitHub</a>
                      </Grid>
                      <Grid item>
                        Thanks :)
                      </Grid>
                    </Grid>
                  </Box>
                </footer>
  				    </Container>
	  			  </div>
	  			  </div>
  				);
  }

  export default Landing
