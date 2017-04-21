import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({tern: ''});
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
        <input
          type="text"
          className="form-control"
          placeholder="Get a five-day forecast for your favorite cities"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)} />

        <span className="input-group-btn">
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
