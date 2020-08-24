import React from 'react';
import './App.css';
import CardList  from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {return response.json();})
      .then(users => this.setState({robots:users}));
  }

  onSearch = (event) =>{
    this.setState({searchfield:event.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(
      <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox onSearch={this.onSearch}/>
          <Scroll>
                <ErrorBoundary>
                <CardList robots={filteredRobots}/>
                </ErrorBoundary>
          </Scroll>
      </div>
    )
  }


}

export default App;
