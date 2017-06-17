import React,{ Component } from 'react'


class Navbar extends Component{

  render(){
    return(
      <div className="container-fluid">

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header ">
      <a className="navbar-brand" href="#">Simple Ecommerce</a>
    </div>
    <form className="navbar-form navbar-right">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-btn">
          <button className="btn btn-default" type="submit">
            <i className="glyphicon glyphicon-search"></i>
          </button>
        </div>

      </div>
    </form>
    <ul className="nav navbar-nav navbar-right">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Categories</a></li>
      <li><a href="#">Blog</a></li>
    </ul>

  </div>
</nav>



<div className="container-fluid">


       <div className="jumbotron ">
           <h1>A Warm Welcome!</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
           <p><a className="btn btn-primary btn-large">Start Shopping</a></p>
           <p><a className="btn btn-warning btn-large"><b>Cart. Rs {this.props.total}</b></a></p>
        </div>
      </div>
      </div>
    );
  }
}

export default Navbar;
