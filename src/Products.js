import React,{Component} from 'react'
import Display from './Display'
import Navbar from './Navbar'

class Products extends Component{

      totalPrice(sum){
        this.setState({total:this.state.total + sum});
      }

      constructor(props){
        super(props);
        this.state = {
          total : 0,
         };
        this.totalPrice = this.totalPrice.bind(this);

      }



  render(){

    var output = this.props.list.map((item , i)=>{
      return <Display name={item.name} price={item.price} key={i}
       totalPrice={this.totalPrice} active={item.active} />
    });


return(
      <div>
      <Navbar total={this.state.total} />
      <div className="row text-center">

       {output}

      </div>
      </div>
    );
  }
}

export default Products;
