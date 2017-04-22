import React from 'react';
import PropTypes from 'prop-types';
import {Sparklines, SparklinesLine} from 'react-sparklines';

const Chart = props => {
  return (
    <div>
      <Sparklines with={180} height={120} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string
};

export default Chart;
