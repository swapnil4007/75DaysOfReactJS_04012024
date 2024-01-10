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
        sportsInterest: false,
        musicInterest: false,
        age: 18,
        birthdate: '',
        fullNameError: '',
        emailError: '',
        passwordError: '',
        birthdateError: '',
        submittedData: null,
      };
    }
  
    handleInputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
      };
    
  
    handleCheckboxChange = (e) => {
      this.setState({ [e.target.id]: e.target.checked });
    };
  
    handleSliderChange = (e) => {
      this.setState({ age: e.target.value });
    };
  
    handleDateChange = (e) => {
      this.setState({ birthdate: e.target.value });
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
  
      if (this.state.birthdate.trim() === '') {
        this.setState({ birthdateError: 'Birthdate is required' });
        isValid = false;
      } else {
        this.setState({ birthdateError: '' });
      }
  
      return isValid;
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
  
      if (this.validateForm()) {
        const submittedData = {
          fullName: this.state.fullName,
          email: this.state.email,
          password: this.state.password,
          gender: this.state.gender,
          sportsInterest: this.state.sportsInterest,
          musicInterest: this.state.musicInterest,
          age: this.state.age,
          birthdate: this.state.birthdate,
        };
  
        this.setState({ submittedData });
      }
    };
  
    render() {
      return (
        <div className="flex-container">
          <div className="registration-form">
            <h2>Registration Form</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  value={this.state.fullName}
                  onChange={this.handleInputChange}
                />
                <span className="error-message">{this.state.fullNameError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <span className="error-message">{this.state.emailError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <span className="error-message">{this.state.passwordError}</span>
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <div className="gender-radio">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={this.state.gender === 'male'}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={this.state.gender === 'female'}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="form-group">
                <label>Interests:</label>
                <div className="interest-checkbox">
                  <input
                    type="checkbox"
                    id="sportsInterest"
                    checked={this.state.sportsInterest}
                    onChange={this.handleCheckboxChange}
                  />
                  <label htmlFor="sportsInterest">SPORT</label>
                  <input
                    type="checkbox"
                    id="musicInterest"
                    checked={this.state.musicInterest}
                    onChange={this.handleCheckboxChange}
                  />
                  <label htmlFor="musicInterest">MUSIC</label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="range"
                  id="age"
                  min="18"
                  max="100"
                  value={this.state.age}
                  onChange={this.handleSliderChange}
                />
                <span>{this.state.age} years</span>
              </div>
              <div className="form-group">
                <label htmlFor="birthdate">Birthdate:</label>
                <input
                  type="date"
                  id="birthdate"
                  value={this.state.birthdate}
                  onChange={this.handleDateChange}
                />
                <span className="error-message">{this.state.birthdateError}</span>
              </div>
              <button type="submit" className="register-button">
                Register
              </button>
            </form>
          </div>
  
          {this.state.submittedData && (
            <div className="submitted-data">
              <h3>Submitted Data:</h3>
              <p>Full Name: {this.state.submittedData.fullName}</p>
              <p>Email: {this.state.submittedData.email}</p>
              <p>Password: {this.state.submittedData.password}</p>
              <p>Gender: {this.state.submittedData.gender}</p>
              <p>Sports Interest: {this.state.submittedData.sportsInterest ? 'Yes' : 'No'}</p>
              <p>Music Interest: {this.state.submittedData.musicInterest ? 'Yes' : 'No'}</p>
              <p>Age: {this.state.submittedData.age} years</p>
              <p>Birthdate: {this.state.submittedData.birthdate}</p>
            </div>
          )}
        </div>
      );
    }
  }
  
  export default RegistrationForm;


/*class RegistrationForm extends Component {
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
        submittedData: null,
      };
    }
  
    handleInputChange = (e) => {
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
  
    handleSubmit = (e) => {
      e.preventDefault();
  
      if (this.validateForm()) {
        const submittedData = {
          fullName: this.state.fullName,
          email: this.state.email,
          password: this.state.password,
          gender: this.state.gender,
        };
  
        this.setState({ submittedData });
      }
    };
  
    render() {
      return (
        <div className="flex-container">
          <div className="registration-form">
            <h2>Registration Form</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  value={this.state.fullName}
                  onChange={this.handleInputChange}
                />
                <span className="error-message">{this.state.fullNameError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <span className="error-message">{this.state.emailError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <span className="error-message">{this.state.passwordError}</span>
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select
                  id="gender"
                  value={this.state.gender}
                  onChange={this.handleInputChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <button type="submit" className="register-button">
                Register
              </button>
            </form>
          </div>
  
          {this.state.submittedData && (
            <div className="submitted-data">
              <h3>Submitted Data:</h3>
              <p>Full Name: {this.state.submittedData.fullName}</p>
              <p>Email: {this.state.submittedData.email}</p>
              <p>Password: {this.state.submittedData.password}</p>
              <p>Gender: {this.state.submittedData.gender}</p>
            </div>
          )}
        </div>
      );
    }
  }
  
  export default RegistrationForm;*/
  