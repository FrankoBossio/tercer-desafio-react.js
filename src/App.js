
import React, {Fragment} from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import {ThemeProvider } from 'react-bootstrap'
import Navbar from './components/Navbar'
import theme from './temaConfig'
import ItemListContainer from './components/ItemListContainer'


const useStyles = makeStyles

const App = () => {
 
  return (
    <ThemeProvider theme={theme}>
      

      <Navbar />

      <ItemListContainer usuario = "Daniel"/>
      <ItemListContainer usuario = "Alejandro"/>
      {/* <Button  color="primary" variant="contained" size="large" >
        franco
      </Button>
      <Button  color="secondary" variant="contained"
      size="large" >
        bossio
      </Button>  */}


     
    </ThemeProvider>
   );
  };


export default App;
