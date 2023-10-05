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
			<div className="project-page">
				<h1 className='project-page__heading'>PORTFOLIO</h1>
				<div>
					<SingleProjectItem cardImage={img1} cardTitle="Project 1" cardLink="View" />
					<SingleProjectItem cardImage={img1} cardTitle="Project 2" cardLink="View" />
					<SingleProjectItem cardImage={img1} cardTitle="Project 3" cardLink="View" />
				</div>

			</div>
			
		);
	}
}

export default Projects;
