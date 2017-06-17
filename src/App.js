import React, { Component } from 'react';
import Products from './Products';

class App extends Component {
  render() {
    var item = [

        {name:'HP Pavilion',price:59999},
        {name:'HP Printers',price:7999},
        {name:'HP Keyboard',price:599},
        {name:'HP External HDD',price:4999}
      ];
    return (
      <div>

      <Products list={item}/>

      </div>
    );
  }
}





export default App;
