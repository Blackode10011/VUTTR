import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, handleManageAccount } from '../../actions';

import './Settings.scss'
import SettingIcon from '../../assets/icons/Icon-Settings-2px.svg';

function Settings() {
	const dispatch = useDispatch();
	const history = useHistory();
	const isLogged = useSelector(state => state.authorization.isLogged);

	if (!isLogged) {
		history.push('/Login');
	}

	return (
		<div className='Settings'>
			<img src={SettingIcon} alt='Settings'/>
			<div className='Settings_content'>
				<button onClick={() => {dispatch(handleManageAccount())}}>
					Account
				</button>
				<button onClick={() => {dispatch(logoutUser())}}>
					Log Out
				</button>
			</div>
		</div>
	);
};

export default Settings;