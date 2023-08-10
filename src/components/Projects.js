import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Nav from './nav';
import SingleProjectItem from './SingleProjectItem.js';
import img1 from '../img/citrus-delicious-food-35063.jpg';

class Projects extends Component {
	//constructor(props) {
		//super(props);
		//this.state = { activeTab: 0 };
	//}
	render() {
		return (
			<div classname="project-page">
				<SingleProjectItem cardImage = {img1} cardName = "Project 1"/>
				<SingleProjectItem cardImage = {img1} cardName = "Project 2"/>
				<SingleProjectItem cardImage = {img1} cardName = "Project 3"/>
			</div>
			
		);
	}
}

export default Projects;
