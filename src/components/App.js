import React, { Component } from 'react';
import '../styles/App.css';
import Search from './Search'; //Search es mi hija
import RepoList from './RepoList'; //RepoList es mi hija

const apiUrl = 'https://api.github.com/orgs/Adalab/repos';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {			
			repos: []			
		}		
	};   

	componentDidMount(){
		fetch(apiUrl)
			.then ((response)=>response.json())		
			.then ((jsonData)=>{
				console.log('App jsondata', jsonData);
				this.setState({
					repos: jsonData		//y de aquí no sale el estado
				})							
			});console.log('estado1', this.state);				
	};	
	

	render(){
		
		return (
			<div>
				<input type="text" placeholder="repositorio1"/>
				<Search />
				<RepoList />			
			</div>
		)
	}
}
		
console.log('App props',this.props)
export default App;


    
    
