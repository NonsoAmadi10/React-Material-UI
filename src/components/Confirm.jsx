import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem'
import RaisedButton from 'material-ui/RaisedButton';


class Confirm extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    render() {
      const {
        values: {
          firstName, email, lastName, occupation, city, bio, phone,
        },
      } = this.props;

      return (
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Confirm Data" />
            <List>
              <ListItem
                primaryText="Firstname"
                secondaryText={firstName}
              />
              <ListItem
                primaryText="Lastname"
                secondaryText={lastName}
              />
              <ListItem
                primaryText="Email"
                secondaryText={email}
              />
              <ListItem
                primaryText="Occupation"
                secondaryText={occupation}
              />
              <ListItem
                primaryText="City"
                secondaryText={city}
              />
              <ListItem
                primaryText="Phone"
                secondaryText={phone}
              />

              <ListItem
                primaryText="Bio"
                secondaryText={bio}
              />


            </List>
            <RaisedButton
              label="Continue"
              primary
              style={styles.button}
              onClick={this.continue}
            />

          </React.Fragment>
        </MuiThemeProvider>

      );
    }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Confirm;
