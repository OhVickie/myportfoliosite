import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Nav from './nav';

class Projects extends Component {
	//constructor(props) {
		//super(props);
		//this.state = { activeTab: 0 };
	//}
	render() {
		return (
			<div classname="project-page">
				<div>
					<div classname="project">
						<a>Project 1</a>
					</div>
					<div classname="project">
						<a>Project 2</a>
					</div>
					<div classname="project">
						<a>Project 3</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
