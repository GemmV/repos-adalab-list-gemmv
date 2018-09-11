import React, { Component } from 'react';
import '../styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Details from './Details'; //Details es mi hija
import Search from './Search'; //Search es mi hija
import RepoList from './RepoList'; //RepoList es mi hija

const apiUrl = 'https://api.github.com/orgs/Adalab/repos';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {			
			repos: [],
			input: '',
			select: '',		
		}					
		this.handleRepos=this.handleRepos.bind(this);
		this.handleSelect=this.handleSelect.bind(this);		
	}  

	componentDidMount(){
		this.getRepos();			
	}
	
	getRepos(){
		fetch(apiUrl)
		.then ((response)=>{return response.json();})	
		.then ((jsonData)=>{			
			this.setState({repos: jsonData});		
		});	
	}

	handleRepos(event){
		const inputValue = event.target.value
		this.setState({input: inputValue});			
	}

	handleSelect(event){
		const selectValue = event.target.value
		this.setState({select: selectValue});
	}

	render(){	
		console.log('RenderRepos state', this.state)
		return (
			<div>
				<Search 
					reposAgain={this.state.repos}
					onChangeHandler={this.handleRepos} 
					handleSelect={this.handleSelect}
					handleRepos={this.handleRepos}				
				/>
				<Switch>
				<Route exact path='/' render={props =>
					<RepoList 
						match={props.match}
						reposAgain={this.state.repos}
						repos={this.state.repos}
						handleSelect={this.state.handleSelect}
						handleRepos={this.state.handleRepos}						
					/>}/>

				<Route path='/Details/:id' component={Details} render={props => 
					<Details 
						match={props.match} 
						repos={this.state.repos}						
					/>}/>
				</Switch>						
			</div>
		)
	}
}
		

export default App;


    
    
