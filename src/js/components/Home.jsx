import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

		
const Jumbotron = () => {
	return (
	  <>
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
		  <a className="navbar-brand" href="#">Navbar</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" 
			aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
  
		  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
			<ul className="navbar-nav mr-auto">
			  <li className="nav-item active">
				<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Link</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link disabled" href="#">Disabled</a>
			  </li>
			  <li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
				<div className="dropdown-menu" aria-labelledby="dropdown01">
				  <a className="dropdown-item" href="#">Action</a>
				  <a className="dropdown-item" href="#">Another action</a>
				</div>
			  </li>
			</ul>
  
			<form className="form-inline my-2 my-lg-0">
			  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
			  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		  </div>
		</nav>
  
		<main role="main">
		  <div className="jumbotron">
			<div className="container">
			  <h1 className="display-4">Hello, world!</h1>
			  <p className="lead">
				This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content.
			  </p>
			  <p>
				<a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a>
			  </p>
			</div>
		  </div>
  
		  <div className="container">
			<div className="row">
			  <div className="col-md-4">
				<h2>Heading</h2>
				<p>
				  Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
				</p>
				<p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			  </div>
			  <div className="col-md-4">
				<h2>Heading</h2>
				<p>
				  Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
				</p>
				<p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			  </div>
			  <div className="col-md-4">
				<h2>Heading</h2>
				<p>
				  Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
				</p>
				<p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			  </div>
			</div>
			<hr />
		  </div>
		</main>
	  </>
	);
  };
  
 
  
  
export default Jumbotron;
