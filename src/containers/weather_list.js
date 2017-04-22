import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const {city, list} = cityData;
    const charts = [
      {
        type: 'temperature',
        data: list.map(weather => weather.main.temp - 273.15),
        color: 'orange',
        units: 'C'
      },
      {
        type: 'pressure',
        data: list.map(weather => weather.main.pressure),
        color: 'green',
        units: 'hPa'
      },
      {
        type: 'humidity',
        data: list.map(weather => weather.main.humidity),
        color: 'black',
        units: '%'
      }
    ];

    return (
      <tr key={city.id}>
        <td className="align-middle">{city.name}</td>
        {
          charts.map(chart => {
            return (
              <td className="align-middle" key={chart.type}>
                <Chart data={chart.data} color={chart.color} units={chart.units} />
              </td>
            );
          })
        }
      </tr>
    );
  }

  render() {
    if (!this.props.weather.length) {
      return <div></div>;
    }

    return (
      <table className="table table-hover table-bordered">
        <thead className="thead-inverse">
          <tr>
            <th className="font-weight-normal">City</th>
            <th className="font-weight-normal">Temperature (C)</th>
            <th className="font-weight-normal">Pressure (hPa)</th>
            <th className="font-weight-normal">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

WeatherList.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
