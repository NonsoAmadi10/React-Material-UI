import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class FormPersonalDetails extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    back=(e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    render() {
      const { values, handleChange } = this.props;

      return (
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Enter User Details" />
            <TextField
              hintText="Occupation"
              floatingLabelText="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
            />
            <br />

            <TextField
              hintText="Bio"
              floatingLabelText="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
            />
            <br />
            <TextField
              hintText="Enter your city"
              floatingLabelText="city"
              onChange={handleChange('city')}
              defaultValue={values.city}
            />
            <br />
            <TextField
              hintText="Enter your Phone number"
              floatingLabelText="Phone"
              onChange={handleChange('phone')}
              defaultValue={values.phone}
            />
            <br />

            <RaisedButton
              label="Back"
              secondary
              style={styles.button}
              onClick={this.back}
            />
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

export default FormPersonalDetails;
