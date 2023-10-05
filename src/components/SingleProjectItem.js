import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Nav from './nav';

function SingleProjectItem (props) {
	//constructor(props) {
		//super(props);
		//this.state = { activeTab: 0 };
	//}

    return (

        <div className="project">
            <div>
                <img src={props.cardImage} className="card-img"></img>
            </div>

            <div className='card-text'>
                <h4 className="card-title">{props.cardTitle}</h4>   
                <a className="card-link-btn btn btn-outline-success btn--white btn--animated">{props.cardLink}</a>
            </div>

        </div>
        // <Grid>
        //     <Cell col={4}>
        //         <div classname="project">
        //             <img src={props.cardImage} className="card-img"></img>
        //             <a>{props.cardName}</a>
        //         </div>
        //     </Cell>
        // </Grid>
                
          
    );
}


export default SingleProjectItem;
