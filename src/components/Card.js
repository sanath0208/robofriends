import React from 'react';

const Card = ({id,name,email}) =>{
    return(
        <div className='bg-light-green dib-ns br3 ma2 pa3 grow tc ma1 bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card