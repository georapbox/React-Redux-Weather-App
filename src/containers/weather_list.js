import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const {city, list} = cityData;
    // const temperatures = list.map(weather => weather.main.temp);
    // const pressures = list.map(weather => weather.main.pressure);
    // const humidities = list.map(weather => weather.main.humidity);

    const charts = [
      {
        type: 'temperature',
        data: list.map(weather => weather.main.temp),
        color: 'red'
      },
      {
        type: 'pressure',
        data: list.map(weather => weather.main.pressure),
        color: 'green'
      },
      {
        type: 'humidity',
        data: list.map(weather => weather.main.humidity),
        color: 'blue'
      }
    ];

    return (
      <tr key={city.id}>
        <td>{city.name}</td>
        {
          charts.map(chart => {
            return (
              <td key={chart.type}>
                <Chart data={chart.data} color={chart.color} />
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
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
