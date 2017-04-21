import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';
import Spinner from '../components/spinner';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      isFetching: false
    };
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.setState({isFetching: true});

    this.props
      .fetchWeather(this.state.term)
      .then(() => this.setState({term: '', isFetching: false}));
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
        <input
          type="text"
          className="form-control"
          placeholder="Get a five-day forecast for your favorite cities"
          required
          autoFocus
          value={this.state.term}
          onChange={this.onInputChange.bind(this)} />

        <span className="input-group-btn">
          <Spinner visible={this.state.isFetching} customClass='search-bar__spinner' />
          <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    );
  }
}

SearchBar.propTypes = {
  fetchWeather: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
