import React from 'react';
import { useDispatch } from 'react-redux';
import { handleCloseAdd, createTool, getAllTools } from '../../actions';

import './AddTool.scss';
import CloseIcon from '../../assets/icons/cancel.svg';
import AddIcon from '../../assets/icons/plus.svg';

import useForm from '../../hooks';

function AddTool(props) {
	const dispatch = useDispatch();
	
	const initValues = {
		title: '',
		link: '',
		description: '',
		tags: '',
	}

	const { handleChange, values } = useForm(initValues);

	async function handleSubmit(event) {
		event.preventDefault();

		var splitsTags = values.tags.split(' ');
		values.tags = splitsTags;
		
		await dispatch(createTool(props.token, values));
		dispatch(getAllTools(props.token));
		dispatch(handleCloseAdd());
	}

	return (
		<div className='container'>
			<div className='AddTool'>
				<nav className='AddTool_header'>
					<div className='AddTool_header--title'>
						<img src={AddIcon} alt='AddIcon'/>
						<span> Add new tool</span>
					</div>
					<img 
						className='AddTool_header--close'
						src={CloseIcon} 
						alt='CloseIcon' 
						onClick={() => dispatch(handleCloseAdd())}
					/>	
				</nav>
			<form className='AddTool_form' onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type='text'
					name='title'
					values={values.title}
					onChange={handleChange}
					required
				/>
				<label>Link</label>
				<input 
					type='text'
					name='link'
					values={values.link}
					onChange={handleChange}
					required
				/>
				<label>Description</label>
				<textarea 
					type='textarea'
					name='description'
					values={values.name}
					onChange={handleChange}
					required
				/>
				<label>Tags</label>
				<input 
					type='text'
					name='tags'
					values={values.tags}
					onChange={handleChange}
					required
				/>	

				<button type='submit'>
					Add tool
				</button>			
			</form>
			</div>
			
		</div>
	);
};

export default AddTool;