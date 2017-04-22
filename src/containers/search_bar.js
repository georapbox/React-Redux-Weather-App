import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';
import Spinner from '../components/spinner';
import Alert from '../components/alert';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      isFetching: false,
      error: false
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
      .then(response => {
        if (response.error) {
          this.setState({isFetching: false, error: true});
          console.error(response.payload);
          return response;
        }
        this.setState({term: '', isFetching: false, error: false});
      });
  }

  onHideError() {
    this.setState({error: false});
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <label htmlFor="">Get a five-day forecast for your favorite cities</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control search-bar__input"
              placeholder="Search..."
              required
              autoFocus
              value={this.state.term}
              onChange={this.onInputChange.bind(this)} />

            <span className="input-group-btn">
              <Spinner visible={this.state.isFetching} customClass='search-bar__spinner' />
              <button className="btn btn-secondary" type="submit" role="button">Search</button>
            </span>
          </div>
        </form>

        <Alert
          type="danger"
          message="Ooooops!!! Something went terribly wrong!"
          visible={this.state.error}
          onHideError={this.onHideError.bind(this)} />
      </div>
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
