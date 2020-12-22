import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cardarray from '../component/Cardarray';
import SearchBox from '../component/Searchbox';
import Scroll from '../component/Scroll';
import './App.css';
import ErrorBoundry from '../component/ErrorBoundry';
import {setSearchField,requestRobots} from '../actions.js'

const mapStateToProps=(state)=>{
  console.log(state)
  return {
    searchField: state.searchRobot.searchField,
    robots:state.requestRobots.robots,
    Ispending:state.requestRobots.Ispending,
    error:state.requestRobots.error
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots: ()=>dispatch(requestRobots())
  }
}

class App extends Component {
  

  componentDidMount() {
   this.props.onRequestRobots();
  }

  render() {
    const {searchField,onSearchChange,robots,Ispending}=this.props
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return Ispending?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
            <Cardarray robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
