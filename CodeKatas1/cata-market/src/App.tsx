import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import * as appActive  from './active/appActive';

//import logo from './logo';
import './App.css';
import {PriceCmpnt} from './components/PriceCmpnt';
import {KataTwoCmpnt} from './components/KataTwoCmpnt';

export interface IApp{
  sum: number;
  count:(num: number)=>void;
}

export class App extends React.Component<IApp, any> {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="">
        <header className="App-header">
        
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <PriceCmpnt 
            count = {this.props.count}
            sum ={this.props.sum}

          />
        </ div>
        <div className=''>
          <KataTwoCmpnt />
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state, ownProps) {
  //debugger;
  return{
      sum: state.priceCmpnt.amountCmpnt as number

  }
}

export function mapDispatchToProps(dispatch) {
  //debugger;
  return{
      count: (price)=>{
          dispatch(appActive.sum(price));
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);