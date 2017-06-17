import React,{Component} from 'react'

class Display extends Component {

      clicker(){
      var  active = !this.state.active;
      this.setState({active: active});
      this.props.totalPrice(active ? this.props.price : -this.props.price);
      }

   constructor(props){
     super(props)
     this.state={
       active:false
     };
     this.clicker = this.clicker.bind(this);
   }

  render(){
    return(

      <div className="col-md-3 col-sm-6">
                <div className="thumbnail">
                    <img src="http://placehold.it/800x500" alt=""/>
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>
                            <a className={this.state.active ? 'btn btn-danger':'btn btn-primary'} onClick={this.clicker} >{this.state.active ? 'Remove from cart':'Buy Now !'} </a> <a className="btn btn-default">Rs {this.props.price}</a>
                        </p>
                    </div>
                </div>
            </div>

    );
  }
}

export default Display;
