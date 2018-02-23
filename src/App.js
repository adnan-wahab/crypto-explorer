import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme, VictoryStack } from 'victory';

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

class App extends React.Component {
  render() {
    return (
      <VictoryChart
      domainPadding={20}
      theme={VictoryTheme.material}
      >
      <VictoryAxis
      tickValues={[1, 2, 3, 4]}
      tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
      />
      <VictoryAxis
      dependentAxis
      tickFormat={(x) => (`$${x / 1000}k`)}
      />
      <VictoryStack>
      <VictoryBar
      data={data2012}
      x="quarter"
      y="earnings"
      />
      <VictoryBar
      data={data2013}
      x="quarter"
      y="earnings"
      />
      <VictoryBar
      data={data2014}
      x="quarter"
      y="earnings"
      />
      <VictoryBar
      data={data2015}
      x="quarter"
      y="earnings"
      />
      </VictoryStack>
      </VictoryChart>
    )
  }
}

export default App;

/* import React, { Component } from 'react';
 * import logo from './logo.svg';
 * import './App.css';
 * 
 * import './form'
 * 
 * class App extends Component {
 *   render() {
 *     return (
 *       <div className="App">
 *         <header className="App-header">
 *           <img src={logo} className="App-logo" alt="logo" />
 *           <h1 className="App-title">Welcome to React</h1>
 *         </header>
 *         <p className="App-intro">
 *           To get started, edit <code>src/App.js</code> and save to reload.
 *         </p>
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default App;*/
