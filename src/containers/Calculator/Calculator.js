import React, { Component } from 'react';
import './Calculator.css';
import { connect } from 'react-redux';


class Calculator extends Component {

    render() {

        return (
            <div id="calculator">
                <div className="top">
                     <span className="clear margin">
                        {this.props.result}
                    </span>

                </div>
                <div className="keys">
                    <button onClick={this.props.addNumberToState} value="7">7</button>
                    <button onClick={this.props.addNumberToState} value="8">8</button>
                    <button onClick={this.props.addNumberToState} value="9">9</button>
                    <button className="operator" onClick={this.props.plusNumbers}>+</button>
                    <button onClick={this.props.addNumberToState} value="4">4</button>
                    <button onClick={this.props.addNumberToState} value="5">5</button>
                    <button onClick={this.props.addNumberToState} value="6">6</button>
                    <button className="operator" onClick={this.props.minusNumbers}>-</button>
                    <button onClick={this.props.addNumberToState} value="1">1</button>
                    <button onClick={this.props.addNumberToState} value="2">2</button>
                    <button onClick={this.props.addNumberToState} value="3">3</button>
                    <button className="operator" onClick={this.props.divideNumbers}>÷</button>
                    <button onClick={this.props.addNumberToState} value="0">0</button>
                    <button onClick={this.props.addNumberToState} value=".">.</button>
                    <button className="eval" onClick={this.props.eval}>=</button>
                    <button className="operator" onClick={this.props.multiplyNumbers}>x</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.result
    }
};

const mapDispatchToProps = dispatch => {
    return {
        plusNumbers: () => dispatch({type: 'PLUS', symbol: '+'}),
        minusNumbers: () => dispatch({type: 'MINUS', symbol: '-'}),
        multiplyNumbers: () => dispatch({type: 'MULTIPLY', symbol: '*'}),
        divideNumbers: () => dispatch({type: 'DIVIDE', symbol: '/'}),
        eval: () => dispatch({type: 'EVAL'}),
        addNumberToState: (event) => dispatch({type: 'ADD', value: event.target.value})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);