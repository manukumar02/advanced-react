import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 123
  }
  render() {
    return (
      <h2>Hello Class Component -- {this.state.answer}</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);