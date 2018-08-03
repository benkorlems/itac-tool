import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { searchUser } from "../../actions/searchActionCreators";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchType: "",
      searchResult: null,
      searching: false,
      errors: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
      componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/");
        }
      }  */

  componentWillReceiveProps(nextProps) {
    if (nextProps.search.searchResult !== "") {
      this.setState({
        searchTerm: "",
        searchResult: nextProps.search.searchResult
      });
    }

    if (nextProps.errors) {
      this.setState({
        searchTerm: "",
        errors: nextProps.errors
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const query = this.state.searchTerm;
    this.props.searchUser(query);
  }

  onChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  result(res, index) {
    return <div key={index}>{res}</div>;
  }
  render() {
    const result = this.props.search.searchResult;
    return (
      <div className="diagnostic">
        <Billing />
        <Fibre />
      </div>
    );
  }
}

Search.propTypes = {
  searchResult: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchUser: bindActionCreators(searchUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
