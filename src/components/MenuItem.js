import React from 'react';


const MenuItem = ({title, link}) => {

	const click = () =>{
    	console.log(title);
	}

	if(link === null){
		return(
			<li className="menu__item">
				<div onClick={() => alert('This page is under construction yet')} className="item__link item__link_block">{title}</div>
			</li>
		)
	}
	return(
		<li className="menu__item">
			<a className="item__link" onClick={click} href={link} target="_blank" rel="noreferrer" >{title}</a>
		</li>
		)
	
};

export default MenuItem;