import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component{
	render() {
		return(
			<Grid>
				
				<Cell col={8}>
					<h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
					<p>{this.props.programDescription}</p>
				</Cell>
			</Grid>
		)
	}
}

export default Education;