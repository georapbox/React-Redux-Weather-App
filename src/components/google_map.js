import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends Component {
  shouldComponentUpdate() {
    return false; // Do not re-render if new set of props received.
  }

  componentDidMount() {
    new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      <div ref="map" style={{width: '180px', height: '180px'}}></div>
    );
  }
}

GoogleMap.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number
};

export default GoogleMap;
