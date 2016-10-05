import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here */'
    }
    this.update = this.update.bind(this);
  }

  update(e) {
      let code = e.target.value;
      try {
        this.setState({output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      })
    }
    catch(err) {
      this.setState({err: err.message})
    }
  }

  render() {
    return(
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            className="input"
            onChange={this.update}
            defaultValue={this.state.input}>
          </textarea>
          <div className="output">
            <pre>
              {this.state.output}
            </pre>
          </div>
        </div>
      </div>
    )
  }
}

export default App
