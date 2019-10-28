import React, {Fragment, Component} from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import {robots} from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = event => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filtered = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return(
            <Fragment>
                <h1 className='tc'>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList robots={filtered}/>
            </Fragment>
        )
    }
}

export default App;
