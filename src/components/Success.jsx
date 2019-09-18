import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import AppBar from 'material-ui/AppBar';
class Success extends Component {
  render() {
    return (
            <MuiThemeProvider>
                <AppBar title="success"/>
                <br/>
              <Card>
              className={ useStyles.className }
              <CardHeader 
              title='Thank you for filling this Out!!'
              />
              </Card>
            </MuiThemeProvider>
    )
  }
}


const useStyles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};
export default Success;
