import React, { Component } from 'react';
import '../styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Painter from './Painter';
import Details from './Details'; 

const apiUrl = 'https://api.github.com/orgs/Adalab/repos';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {			
			repos: [],			
			select: '',	
			name:'',
			description:'',
				
		}					
		this.handleRepos=this.handleRepos.bind(this);
		this.handleSelect=this.handleSelect.bind(this);		
	}  

	componentDidMount(){
		fetch(apiUrl)
			.then ((response)=>{return response.json();})	
			.then ((jsonData)=>{			
				this.setState({repos: jsonData});		
		});	
	}

	handleRepos(event){
		const inputValue = event.currentTarget.value.toLowerCase();
		this.setState({name: inputValue});			
	}

	handleSelect(event){
		const inputValue = event.target.value
		this.setState({select: inputValue});
	}

	render(){	
		console.log('RenderRepos state', this.state)
		return (
			<div>
				<Switch>
					<Route exact path='/' render={ () =>
						<Painter 				
							repos={this.state.repos}
							name={this.state.name}
							description={this.state.description}
							select={this.state.language}
							handleSelect={this.handleSelect}
							handleRepos={this.handleRepos}			
						/>}/>
					<Route path='/Details/:id' component={Details} render={(props) => 
						<Details 
							match={props.match} 
							repos={this.state.repos}	repo={this.state.repos[props.match.id]}

						/>}/>						
				</Switch>						
			</div>
		)
	}
}
		

export default App;


    
    
