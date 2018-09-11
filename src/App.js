import React, { Component } from 'react';
import './App.css';
import RepoList from './components/RepoList'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return (
			<div >
				<RepoList />
				<Search />
			</div> 
		);
	}
}
 
export default App;
