import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddTool, filterTools, getByTag } from '../../actions';

import './SearchTool.scss';
import AddIcon from '../../assets/icons/plus.svg';
import SearchIcon from '../../assets/icons/Icon-Search-2px.svg';

import useForm from '../../hooks';

export default function SearchTool(props) {
	const dispatch = useDispatch();
	const title = useSelector(state => state.tools.searchTitle);
	const { values } = useForm(title);
	
	return (
		<header className='Main_header'>
			<div className='Main_header--search'>
				<img src={SearchIcon} alt='SearchIcon' className='Main_header--searchImg'/>
				<input 
					placeholder='Search'
					value={values.title}
					onChange={(event) => dispatch(filterTools(event.target.value, props.tools))}
					className='Main_header--searchInput'
				/>
			</div>
			<input 
				type='checkbox' 
				className='Main_header--checkbox'
				onChange={() => dispatch(getByTag(props.token, title))}
			/>
			<label>Tags Only</label>
			<button onClick={() => dispatch(handleAddTool())}>
				<img src={AddIcon} alt='AddIcon'/>
				Add
			</button>	
		</header>
	);
};