import React, { Component } from 'react';
import './Notification.css';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return (
      <div className="Notification__container">
        <h3 className="Notification__title">{this.props.message}</h3>
      </div>
    );
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
