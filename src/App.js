import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import GroundOverlay from './components/GroundOverlay';
import SearchBox from './components/SearchBox';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/lab/Slider';

const styles = theme => ({
  paper: {
    padding: theme.spacing(1.5),
  },
  label: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

function App(props) {
  const [bounds, setBounds] = useState({});
  const [opacity, setOpacity] = useState(0.5);

  function handleChange(event, value) {
    setOpacity(value);
  }

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Map
              zoom={12}
              center={{ lat: 40.740, lng: -74.18 }}
              events={{ onBoundsChanged: arg => setBounds(arg) }}
            >
              <SearchBox />
              <GroundOverlay
                url='https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'
                bounds={{
                  north: 40.773941,
                  south: 40.712216,
                  east: -74.12544,
                  west: -74.22655
                }}
                opacity={opacity}/>
            </Map>
          </Grid>
          <Grid item xs={6}>
            <Paper className={props.classes.paper}>
              <Box flexDirection="column">
                <FormLabel className={props.classes.label}>Overlay Opacity</FormLabel>
                <Box mt={1} mx={1}>
                  <Slider
                    value={opacity}
                    min={0}
                    max={1}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(App);
