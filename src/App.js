import { Component } from 'react';
import './App.css';
import Section from './components/Section/';
import Statistics from './components/Statistics/';
import FeedbackOptions from './components/FeedbackOptions/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackChanged = newState => {
    this.setState({ newState });
  };

  onLeaveFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let { good, neutral, bad } = this.state;

    return (good / (good + neutral + bad)) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage().toFixed(
      0,
    );

    const options = [
      { id: 'id-1', name: 'Good', value: 'good' },
      { id: 'id-2', name: 'Neutral', value: 'neutral' },
      { id: 'id-3', name: 'Bad', value: 'bad' },
    ];

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
            onChanged={this.feedbackChanged}
          />
        </Section>
      </div>
    );
  }
}

export default App;
