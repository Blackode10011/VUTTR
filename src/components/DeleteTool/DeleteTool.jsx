import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseDelete, deleteTool, getAllTools } from '../../actions'; 

import './DeleteTool.scss';
import CloseIcon from '../../assets/icons/cancel.svg';

function DeleteTool(props) {
	const dispatch = useDispatch();
	const singleTool = useSelector(state => state.tools.singleTool);

	async function handleDelete() {
		await dispatch(deleteTool(props.token, singleTool.id));
		dispatch(getAllTools(props.token));
		dispatch(handleCloseDelete());
	};

	return (
		<div className='container'>
		 <div className='DeleteTool'>
			<nav className='DeleteTool_header'>
				<div className='DeleteTool_header--title'>
					<img src={CloseIcon} alt='CloseIcon'/>
					<span> Remove tool</span>
				</div>
			</nav>
			<nav className='DeleteTool_content'>
				<span>Are you sure you want to remove {singleTool.title}?</span>
				<div className='DeleteTool_content--buttons'>
					<button
						onClick={() => dispatch(handleCloseDelete())}>
						Cancel  
					</button>
					<> </>
					<button 
						onClick={handleDelete}>
						Yes, remove
					</button>
				</div>
			</nav>
		 </div>
		</div>
	);
};

export default DeleteTool;