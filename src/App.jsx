import * as React from 'react';

class App extends React.Component {
  state = {
    count: 1
  }

  render() {
    return (
      <div>
        💅
        { this.state.count }
        <a onClick={ e => this.setState({ count: this.state.count + 1 }) } href="#">
          Increment.
        </a>
      </div>
    )
  }
}

export default App;
