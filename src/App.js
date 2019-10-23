import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import RecentTweets from './containers/RecentTweets'

const borderStyle = {
  border: '2px solid red'
}

const App = ({ store }) => (
  <Provider store={store}>
    <div height='1em' width='100em' style={borderStyle}>
      Test Nav Bar
    </div>
    <Router>
      <Route path="/" component={RecentTweets}/>
      <Route path="/recenttweets" component={RecentTweets}/>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
