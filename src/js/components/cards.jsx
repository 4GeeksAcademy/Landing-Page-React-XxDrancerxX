import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

        
const Cards = (props) => {
    return (
        
        <div className="card h-100">
        <img src={props.image} className="card-img-top object-fit-cover" style={{ height: "200px", objectFit: "cover" }}  alt="..."/>
        <div className="card-body d-flex flex-column flex-grow-1">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text flex-grow-1">{props.description}</p>
          <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
        </div>
      </div>
        
    );
  };
  
 
  
  
export default Cards;

