import React from 'react';
import './Statistics.css';
import Notification from '../Notification/';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics__container">
      <h2>Statistics</h2>

      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <ul className="Statistics__list">
          <li className="Statistics__list-item">
            <span className="Statistics__list-item-title">Good:</span>
            <span className="Statistics__list-item-value">{good}</span>
          </li>
          <li className="Statistics__list-item">
            <span className="Statistics__list-item-title">Neutral:</span>
            <span className="Statistics__list-item-value">{neutral}</span>
          </li>
          <li className="Statistics__list-item">
            <span className="Statistics__list-item-title">Bad:</span>
            <span className="Statistics__list-item-value">{bad}</span>
          </li>
          <li className="Statistics__list-item">
            <span className="Statistics__list-item-title">Total:</span>
            <span className="Statistics__list-item-value">{total}</span>
          </li>
          <li className="Statistics__list-item">
            <span className="Statistics__list-item-title">
              Positive feedback:
            </span>
            <span className="Statistics__list-item-value">
              {positivePercentage} %
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
