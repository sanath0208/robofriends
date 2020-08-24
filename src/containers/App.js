import React from 'react';
import './App.css';
import Card from '../components/Card';
import CardList  from '../components/CardList'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {return response.json();})
      .then(users => this.setState({robots:users}));
  }

  render(){
    return(
      <div>
          <h1>RoboFriends</h1>
          <input type='searchfield'/>
          <CardList robots={robots}/>
      </div>
    )
  }


}

export default App;
