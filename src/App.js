import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css'

class App extends Component {
  state = {
    inputValue1: '',
    inputValue2: ''
  }

  inputChange = event => {
    let name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  render() {

    return (
      <div className="App">
        <input
          onChange={this.inputChange}
          type="text"
          name="inputValue1"
          value={this.inputValue1}
        />

        <input
          onChange={this.inputChange}
          type="text"
          name='inputValue2'
          value={this.inputValue2}
        />

        <button>
          Somar
        </button>
      </div>
    )
  }
}

const mapStateProps = store => ({
  newValue: store.clickState.newValue
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateProps, mapDispatchToProps)(App);
