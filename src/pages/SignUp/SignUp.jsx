import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './SignUp.scss';

import Topbar from '../../components/Topbar';
import Alert from '../../components/Alert';
import useForm from '../../hooks';
import { createUser } from '../../actions/users';

function SignUp() {
	const dispatch = useDispatch();
	const message = useSelector(state => state.users.message);

	const initValues = {
		name: '',
		email: '',
		password: '',
	}

	const { values, handleChange, clearForm } = useForm(initValues);

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(createUser(values));
		clearForm();
	};

	return (
		<div className='container'>
			<Topbar/>
			{ message && <Alert message={message}/> }
			<form className='signUp' onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					placeholder='User Name'
					value={values.name}
					onChange={handleChange}
					required
				/>
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
					Account Create
				</button>
				<Link to='/login'>
					Back
				</Link>
			</form>	
		</div>
	);
};

export default SignUp;