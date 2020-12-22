import React from 'react';
import Card from './Card.js';
const Cardarray= ({robots})=>{
	/*const Cardlist = robots.map((user,i)=>{
		return <Card  id={robots[i].id} name={robots[i].name} email= {robots[i].email}/>}
);*/
return(
	<div>
	{
	 robots.map((user,i)=>{
		return (
			<Card  
			id={robots[i].id} 
			name={robots[i].name} 
			email= {robots[i].email}/>
	);
	})
	}
	</div>
	)
}

export default Cardarray;