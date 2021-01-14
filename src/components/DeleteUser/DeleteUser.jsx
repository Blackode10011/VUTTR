import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handleCloseDeleteUser, deleteUser, closeManageAccount } from '../../actions'; 

import './DeleteUser.scss';
import CloseIcon from '../../assets/icons/cancel.svg';

function DeleteUser() {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector(state => state.authorization.user);
	const token = useSelector(state => state.authorization.token);
	const isLogged = useSelector(state => state.authorization.isLogged);

	async function deletingUser() {
		await dispatch(deleteUser(token, user.id));
		dispatch(handleCloseDeleteUser());
		dispatch(closeManageAccount())
		if (!isLogged) {
			history.push('/Login');
		}
	};

	return (
		<div className='container'>
		 <div className='DeleteUser'>
			<nav className='DeleteUser_header'>
				<div className='DeleteUser_header--title'>
					<img src={CloseIcon} alt='CloseIcon'/>
					<span> Remove tool</span>
				</div>
			</nav>
			<nav className='DeleteUser_content'>
				<span>Are you sure want to remove {user.name}?</span>
				<div className='DeleteUser_content--buttons'>
					<button
						onClick={() => dispatch(handleCloseDeleteUser())}>
						Cancel  
					</button>
					<> </>
					<button 
						onClick={deletingUser}>
						Yes, remove!
					</button>
				</div>
			</nav>
		 </div>
		</div>
	);
};

export default DeleteUser;