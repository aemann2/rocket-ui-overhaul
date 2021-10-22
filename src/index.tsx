import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LaunchProvider from './store/LaunchContext';
import './styles/styles.css';

ReactDOM.render(
	<LaunchProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</LaunchProvider>,
	document.getElementById('root')
);
