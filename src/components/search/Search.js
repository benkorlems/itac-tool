import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { searchUser } from "../../actions/searchActionCreators";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchType: "",
      searchResult: [],
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
    if (nextProps.searchResult.length !== 0) {
      this.setState({
        searchTerm: "",
        searchResult: nextProps.searchResult
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
  render() {
    return (
      <fragment>
        <div className="form-div">
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Search..."
              name="searchTerm"
              type="text"
              value={this.state.searchTerm}
              onChange={this.onChange}
              //error={errors.email}
            />
            <input type="submit" className="" />
          </form>
        </div>
        <div className="search-results">
          <h2>{this.state.searchTerm}</h2>
        </div>
      </fragment>
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
    search: bindActionCreators(searchUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
