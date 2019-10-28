import React from 'react';

const Searchbox = ({searchField, searchChange}) =>  {
    return (
        <div className='pa2 tc'>
            <input 
                className='ba pa3 bg-lightest-blue' 
                type='search' 
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    )
}

export default Searchbox;