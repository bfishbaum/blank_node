import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from './routes'


ReactDOM.render(
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
, document.getElementById('root'));

