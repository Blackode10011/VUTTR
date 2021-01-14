import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Login.scss';

import Topbar from '../../components/Topbar';
import Alert from '../../components/Alert';
import useForm from '../../hooks';
import { userAuth } from '../../actions/users';


function Login () {
	const history = useHistory();
	const dispatch = useDispatch();
	const isLogged = useSelector(state => state.authorization.isLogged);
	const message = useSelector(state => state.users.message);

	const initValues = {
		email: '',
		password: '',
	}

	const { handleChange, values, clearForm } = useForm(initValues);

	async function handleSubmit(event) {
		event.preventDefault();
		await dispatch(userAuth(values));
		clearForm();
	};
	
	useEffect(() => {
		if (isLogged) {
			history.push('/');
		}
	},[history, isLogged]);

	return (
		<div className='container'>
			<Topbar/>
			{ message && <Alert message={message}/> }
			<form className='login' onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					placeholder='Email Address'
					value={values.email}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={values.password}
					onChange={handleChange} 
					required
				/>
				<button type='submit'>
					Log In
				</button>
				<Link to='/signup'>
					Sign Up
				</Link>
			</form>
		</div>
	);
}

export default Login;