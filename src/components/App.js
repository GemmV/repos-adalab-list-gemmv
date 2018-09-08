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
					console.log('elprimerCL', jsonData);
					this.setState({
					repos: jsonData					
				})							
			});
				
	};	
	

	render(){
		return (
			<div>
				<Search />
				<RepoList />
				
			</div>
		)
	}
}
		
console.log(this.props)
export default App;


    
    
