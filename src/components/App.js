import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import Search from './Search'; //Search es mi hija
import RepoList from './RepoList'; //RepoList es mi hija

const apiUrl = 'https://api.github.com/orgs/Adalab/repos';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {			
			repos: [],
			name:'',
    		description:'',
    		language:''									
		}	
		
		this.getRepos=this.getRepos.bind(this);
		this.searchByName=this.searchByName.bind.bind(this);
	}  

	componentDidMount(){
		this.getRepos();			
	}
	
	getRepos(){
		fetch(apiUrl)
		.then ((response)=>{return response.json();})	
		.then ((jsonData)=>{
			console.log('Appjsondata', jsonData);
			this.setState({repos: jsonData});		
		});	
	}
	
	searchByName(event){
		const nameSearch = event.currentTarget.value.toLowerCase();
		this.setState({name: nameSearch})
	}

	render(){		
		return (
			<Fragment>
				<Search searchByName={this.state.searchByName}/>				
				<RepoList 
					repos={this.state.repos}
					searchByName={this.state.name}
					name={this.state.name}
        			description={this.state.description}
       				language={this.state.language}		
					/>						
			</Fragment>
		)
	}
}
		

export default App;


    
    
