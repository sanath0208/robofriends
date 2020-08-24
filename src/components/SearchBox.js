import React from 'react'

const SearchBox = ({onSearch}) => {
    return(
        <div>
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={onSearch}></input>
        </div>
    )
}

export default SearchBox