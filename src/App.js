import React, {Component} from 'react';
import './App.css';
import Button from './components/Button/Button'
import Input from './components/Input/Input'

class App extends Component {
  state = {
    a: "",
    input: "",
    operator: ""
  };

  addToInput = val => {
    const {operator} = this.state;

    if(operator) {
      this.setState({input: ''})
      this.setState({input: val})
    } else {
      this.setState({input: this.state.input + val})
    }
  }

  handleOperator = val => {
    const {input} = this.state;
    this.setState({a: input})
    // this.setState({input: ''})
    this.setState({operator: val})
  }

  handleTotal = () => {
    const {operator, input, a} = this.state;
    const b = input
    let result = 0

    switch(operator) {
      case '+':
          result = parseFloat(a) + parseFloat(b);
          this.setState({input: result})
          break;
      case '-':
          result = parseFloat(a) - parseFloat(b);
          this.setState({input: result})
          break;
      case '×':
          result = parseFloat(a) * parseFloat(b);
          this.setState({input: result})
          break;
      case '÷':
          result = parseFloat(a) / parseFloat(b);
          this.setState({input: result})
          break;
      default:
        return null;
    }
  }

  handlePercentage = () => {
    const b = this.state.input
    const result = parseFloat(b) / 100;
    this.setState({input: result})
  }

  handleClear = () => {
    this.setState({input: '', a: '', operator: ''})
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button onClick={this.handleClear.bind(this, 'AC')} style={{flex: 2, backgroundColor: '#6C6C6D'}}>AC</Button>
            <Button onClick={this.handlePercentage.bind(this, '%')} style={{backgroundColor: '#6C6C6D'}}>%</Button>
            <Button onClick={this.handleOperator.bind(this, '÷')}>÷</Button>
          </div>

          <div className="row">
            <Button onClick={this.addToInput.bind(this, '7')}>7</Button>
            <Button onClick={this.addToInput.bind(this, '8')}>8</Button>
            <Button onClick={this.addToInput.bind(this, '9')}>9</Button>
            <Button onClick={this.handleOperator.bind(this, '×')}>×</Button>
          </div>

          <div className="row">
            <Button onClick={this.addToInput.bind(this, '4')}>4</Button>
            <Button onClick={this.addToInput.bind(this, '5')}>5</Button>
            <Button onClick={this.addToInput.bind(this, '6')}>6</Button>
            <Button onClick={this.handleOperator.bind(this, '-')}>-</Button>
          </div>

          <div className="row">
            <Button onClick={this.addToInput.bind(this, '1')}>1</Button>
            <Button onClick={this.addToInput.bind(this, '2')}>2</Button>
            <Button onClick={this.addToInput.bind(this, '3')}>3</Button>
            <Button onClick={this.handleOperator.bind(this, '+')}>+</Button>
          </div>

          <div className="row">
            <Button onClick={this.addToInput.bind(this, '0')} style={{flex: 2}}>0</Button>
            <Button onClick={this.addToInput.bind(this, '.')}>.</Button>
            <Button onClick={this.handleTotal}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
