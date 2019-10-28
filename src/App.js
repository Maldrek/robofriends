import React, {Component} from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import Scroll from './components/Scroll';
import './assets/css/app.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json()).then(users => {this.setState({robots: users})})
    }

    onSearchChange = event => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filtered = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return(
                <h1>Loading...</h1>
            )
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filtered}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;
