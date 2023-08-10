import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Nav from './nav';

function SingleProjectItem (props) {
	//constructor(props) {
		//super(props);
		//this.state = { activeTab: 0 };
	//}

    return (
        
                <div classname="project">
                    <img src={props.cardImage} className="card-img"></img>
                    <a>{props.cardName}</a>
                </div>
          
    );
}


export default SingleProjectItem;
