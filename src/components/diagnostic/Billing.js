import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getBillingInfo } from "../../actions/billingActionCreators";
//import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

      componentDidMount() {
          this.props.getBillingInfo
      } 
  componentWillReceiveProps(nextProps) {
    if (nextProps.billingInfo.billingData !== "") {
      this.setState({
        billingInfo: nextProps.billingInfo.
      });
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleClick() {
    this.props.getBillingInfo();
  }
  render() {
    const result = this.props.search.searchResult;
    return (
      <div className="billing">
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

Search.propTypes = {
  billingInfo: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    billingInfo: state.billingInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBillingInfo: bindActionCreators(searchUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
