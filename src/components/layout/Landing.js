import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { loginUser } from "../../actions/authActionCreators";
import "../../App.css";
import logo from "../../logo.svg";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/search");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/search");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ipNX TAC Tool</h1>
        </header>
        <p className="App-intro">
          To get started, <em>login</em> using your email and password.
        </p>
        <div className="form-div">
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Email Address"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              //error={errors.email}
            />

            <input
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              //error={errors.password}
            />
            <input type="submit" className="" />
          </form>
        </div>
      </fragment>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: bindActionCreators(loginUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
