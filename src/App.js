import React, {Component} from 'react';
import './App.css';
import {Parser} from "expr-eval";
class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            board: Array(10).fill(null),
            equal: ['='],
            signs: ['*','/','-','+'],
            value: ''
        }
    }

    handleClick(e) {
        let value = this.state.value;
        value = (value + e.currentTarget.textContent);
        this.setState({
            value: value
        })
    }

    handleSubmit() {
        const value = this.state.value;
        let total = Parser.evaluate(value);
        this.setState({
            value: total
        })
    }

    renderBoxes() {
        return this.state.board.map((box,index) => <div className='box' key={index} onClick={(e) => this.handleClick(e)}>{index}</div> )
    }

    renderEqual() {
        return this.state.equal.map((equal, index) => <div className='equal' key={index} onClick={(e) => this.handleSubmit(e)}>{equal}</div> )
    }

    renderSigns() {
        return this.state.signs.map((signs,index) => <div className='sign' key={index} onClick={(e) => this.handleClick(e)}>{signs}</div> )
    }

    handleReset() {
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div className="container">
                <h1> Calc App</h1>
                <div id='display'>
                    <input disabled={true} type='text' className='input' placeholder={this.state.value} />
                    <button onClick={() => this.handleReset()}>Reset</button>
                </div>
                <div className='board'>
                    {this.renderBoxes()}
                    {this.renderEqual()}
                </div>
                <div className='board2'>
                    {this.renderSigns()}
                </div>
            </div>
        );
    }
}

export default App;