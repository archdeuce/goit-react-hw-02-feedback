import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <section>
    <ul className="FeedbackOptions__buttons">
      {options.map(({ id, name, value }, index) => (
        <li key={index} className="FeedbackOptions__buttons-item">
          <button
            key={id}
            className="FeedbackOptions__button"
            value={value}
            type="button"
            onClick={() => onLeaveFeedback(value)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  </section>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
