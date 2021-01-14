import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeManageAccount, updateUser, updateUserAuth, handleDeleteUser } from '../../actions';

import './ManageAccount.scss';
import UserIcon from 	'../../assets/icons/Icon-User-2px.svg';
import CloseIcon from '../../assets/icons/cancel.svg';
import UpdateIcon from '../../assets/icons/Icon-Sync-2px.svg';
import DeleteIcon from '../../assets/icons/Icon-Delete-2px.svg';

import useForm from '../../hooks';
import Alert from '../Alert';
import DeleteUser from '../DeleteUser';

function ManageAccount() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.authorization.user);
	const token = useSelector(state => state.authorization.token);
	const userUpdated = useSelector(state => state.users.userUpdated);
	const message = useSelector(state => state.users.message);
	const showDeleteUser = useSelector(state => state.users.showDeleteUser);
	
	const { values, handleChange } = useForm(user);
	
	async function handleSubmit(event) {
		event.preventDefault();
		
		await dispatch(updateUser(token, values));

		if (userUpdated.length) {
			await dispatch(updateUserAuth(userUpdated));	
		}
	};
	return (
		<div className='container'>
			<div className='Account'>
			{ message && <Alert message={message}/> }
			{ showDeleteUser && <DeleteUser/> }
			<nav className='Account_header'>
				<div className='Account_header--title'>
					<img src={UserIcon} alt='AddIcon'/>
					<span> Manage User Account</span>
				</div>
				<img 
					className='Account_header--close'
					src={CloseIcon} 
					alt='CloseIcon' 
					onClick={() => dispatch(closeManageAccount())}
				/>	
			</nav>
			<form className='Account_form' onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type='text'
					name='name'
					values={values.name}
					onChange={handleChange}
					required
				/>
				<label>E-mail</label>
				<input 
					type='email'
					name='email'
					values={values.email}
					onChange={handleChange}
					required
				/>
				<label>Password</label>
				<input 
					type='password'
					name='password'
					values={values.password}
					onChange={handleChange}
					required
				/>
				<div className='Account_buttons'>
					<button>
						<img	
							className='Account_buttons--update'
							src={UpdateIcon} 
							alt='UpdateIcon' 
						/>
					</button>
					<></>
					<img 
						className='Account_buttons--delete'
						onClick={() => dispatch(handleDeleteUser())}
						src={DeleteIcon} 
						alt='DeleteIcon' 
					/>
				</div>
			</form>
			</div>
		</div>
	);
};

export default ManageAccount;