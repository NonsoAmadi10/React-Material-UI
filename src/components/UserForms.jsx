import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForms extends Component {
    state ={
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      occupation: '',
      city: '',
      bio: '',

    }
    // Change Component on each step change- Go next()

nextStep =() => {
  const { step } = this.state;
  this.setState({ step: step + 1 });
}

prevStep =() => {
  const { step } = this.state;
  this.setState({ step: step - 1 });
}

// Handle Field Change

handleChange = input => (e) => {
  this.setState({ [input]: e.target.value });
}


render() {
  const { step } = this.state;
  const {
    firstName, lastName, occupation, email, phone, city, bio,
  } = this.state;
  const values = {
    firstName, lastName, occupation, email, phone, city, bio,
  };
  switch (step) {
    case 3:
      return (
        <Confirm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      );

    case 4:
      return (
        <Success />
      );

    default:
      return (
        <FormUserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
  }
}
}

export default UserForms;
