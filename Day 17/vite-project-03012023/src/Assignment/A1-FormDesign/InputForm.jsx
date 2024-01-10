import { Component } from 'react';
import './RegForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      gender: 'male',
      fullNameError: '',
      emailError: '',
      passwordError: '',
    };
  }

  dataInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  validateForm = () => {
    let isValid = true;

    if (this.state.fullName.trim() === '') {
      this.setState({ fullNameError: 'Full Name is required' });
      isValid = false;
    } else {
      this.setState({ fullNameError: '' });
    }

    if (this.state.email.trim() === '') {
      this.setState({ emailError: 'Email is required' });
      isValid = false;
    } else {
      this.setState({ emailError: '' });
    }

    if (this.state.password.trim() === '') {
      this.setState({ passwordError: 'Password is required' });
      isValid = false;
    } else {
      this.setState({ passwordError: '' });
    }

    return isValid;
  };

  dataSubmit = (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      
      console.log('Form submitted successfully!');
    }
  };

  render() {
    return (
      <div className="flex-container">
        <div className="registration-form">
          <h2>Registration Form</h2>
          <form onSubmit={this.dataSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                value={this.state.fullName}
                onChange={this.dataInput}
              />
              <span className="error-message">{this.state.fullNameError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.dataInput}
              />
              <span className="error-message">{this.state.emailError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.dataInput}
              />
              <span className="error-message">{this.state.passwordError}</span>
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select id="gender" value={this.state.gender} onChange={this.dataInput}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;