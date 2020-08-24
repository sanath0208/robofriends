import React from 'react';

const Card = ({id,name,email}) =>{
    return(
        <div>
            <img alt='robot' src={`https://robohash.org/${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card