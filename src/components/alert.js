import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
  return (
    <div className={`alert alert-${props.type} ${!props.visible && 'd-none'}`} role="alert">
      <button type="button" className="close" onClick={() => props.onHideError()}>
        <span>&times;</span>
      </button>
      {props.message}
    </div>
  );
};

Alert.defaultProps = {
  type: 'info',
  message: '',
  visible: false,
  onHideError: function () {}
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  visible: PropTypes.bool,
  onHideError: PropTypes.func
};

export default Alert;
