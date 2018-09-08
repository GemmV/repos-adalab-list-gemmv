import React, { Component } from 'react';
import '../styles/App.css';
import Search from './Search'; //Search es mi hija
import RepoList from './RepoList'; //RepoList es mi hija

const apiUrl = 'https://api.github.com/orgs/Adalab/repos';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {			
			repos: [],						
		}	
		
		this.getRepos=this.getRepos.bind(this);
	}  

	componentDidMount(){
		this.getRepos();			
	}
	
	getRepos(){
		fetch(apiUrl)
		.then ((response)=>response.json())		
		.then ((jsonData)=>{
			console.log('App jsondata', jsonData);
			let repos = [];
			for (let i = 0; i < jsonData.length; i++){
				repos[i] = {...jsonData[i]};
			}
			this.setState({
				repos: repos 
			});							
		});	
	}
	
	

	render(){
		
		return (
			<div>
				<input type="text" placeholder="repositorio1"/>
				<Search repos={this.state.repos}/>
				<RepoList repos={this.state.repos}/>	
					
			</div>
		)
	}
}
		

export default App;


    
    
