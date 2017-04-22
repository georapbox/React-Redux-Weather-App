import React from 'react';
import PropTypes from 'prop-types';
import {round, sum} from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const average = data => round(sum(data) / data.length);

const Chart = props => {
  return (
    <div>
      <Sparklines with={180} height={120} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: {average(props.data)} {props.units}</div>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
  units: PropTypes.string
};

export default Chart;
