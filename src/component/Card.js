import React from 'react';
import './Card.css';

const Card = ({name,email,id})=>{
	return(
    <div class="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc f1 window">
     <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
      <div>
       <p>{name}</p>
       <p>{email}</p>
      </div>
    </div>
    );}
export default Card
     