import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionTypes } from './actions';
import './App.css';

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLoadButtonClick: (event) => {
      dispatch({
        type: ActionTypes.LOAD,
        payload: 5,
      })
    }
  };
}

const mapStateToProps = (state, props) => {
  return {
    isLoading: state.app.loading
  }
}

class App extends Component {
  render() {
    const { isLoading, onLoadButtonClick } = this.props;
    const message = isLoading ? 'LOADING' : '';

    return (
      <div className="App">
        <header className="App-header">
          <span className="App-message">{ message }</span>
          <button onClick={ onLoadButtonClick }>Load</button>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);