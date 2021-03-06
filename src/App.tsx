import * as React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/redirect" render={() => <Redirect to="/" />} />
      </Switch>
    );
  }
}

const About = () => (
  <div>
    About
    <Link to="/">-Home</Link>
    <Link to="/redirect">-Redirect</Link>
  </div>
);

class Home extends React.Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        💅
        {this.state.count}
        <a onClick={e => this.setState({count: this.state.count + 1})} href="#">
          Increment.
        </a>
        <Link to="/about"> +About</Link>
      </div>
    );
  }
}

export default App;
