import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAllTools } from '../../actions';

import './App.scss';
import Main from '../../components/Main';

function App() {
	const dispatch = useDispatch();
	const isLogged = useSelector(state => state.authorization.isLogged);
	const token = useSelector(state => state.authorization.token);
	const searchTitle = useSelector(state => state.tools.searchTitle);
	const tools = useSelector(state => state.tools.tools);
	const filteredTools = useSelector(state => state.tools.filteredTools);
	var toolsOutput;

	useEffect(function fetchTools() {
		dispatch(getAllTools(token));
	},[dispatch, token]);
	
	if (searchTitle === '') {
		toolsOutput = tools;
		
	}else {
		toolsOutput = filteredTools;
	}
	
	return (
    <div className='App'>
			<div className='container'>
				{
					isLogged ? (
						<Main tools={toolsOutput} token={token}/>
					):(
						<Redirect to='/login' />
					)
				}
    	</div>
		</div>
  );
}

export default App;
