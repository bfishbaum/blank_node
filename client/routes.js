import React from 'react';
import { Route, Switch } from 'react-router';

/**
 * Import all page components here
 */
import MainApp from './Main.jsx';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
function Routes () {
	return (
	<div>
		<Switch>
            <Route exact path="/" component={MainApp} />
		</Switch>
	</div>
	);
} 
export default Routes