import React, {Fragment} from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import {robots} from './robots';

const App = () => {
    return(
        <Fragment>
            <h1 className='tc'>RoboFriends</h1>
            <Searchbox />
            <CardList robots={robots}/>
        </Fragment>
    )
}

export default App;
