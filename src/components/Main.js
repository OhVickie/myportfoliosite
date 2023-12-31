import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./Home";
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

const Main = ()=> (

	<Switch>
		<Route exact path="/" component ={Home}/>
		<Route path='/Projects' component={Projects}/>
		<Route path='/Resume' component={Resume}/>
		<Route path='/Contact' component={Contact}/>
	</Switch>

)

export default Main;