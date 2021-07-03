import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import ToDoApp from './components/ToDoApplication/ToDoApp';
 
class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Counter></Counter> */}
          <ToDoApp></ToDoApp>
      </div>
    );
  }
}

// class FirstComponent extends Component {
//   render() {
//     return (
//       <div className= "FirstComponent">
//         First Component -class component
//       </div>

//     );
//   }
// }

// function ThirdComponent() {
//   return (
//     <div>
//       ThirdComponent - Function component 
//     </div>
//   )
// } 
export default App;
