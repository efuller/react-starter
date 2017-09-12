import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Provider from './utils/Provider';
import ContextProvider from './utils/ContextProvider';
import App from './App';

import './scss/styles.scss';

ReactDOM.render(
	<Provider>
		<BrowserRouter>
			<ContextProvider>
				<App />
			</ContextProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);
