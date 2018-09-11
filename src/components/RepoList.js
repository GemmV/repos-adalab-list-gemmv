import React, { Component } from 'react';
import '../styles/RepoList.css';
import { Link } from 'react-router-dom';
import Repo from './Repo'; //Repo es mi hija

class RepoList extends Component {
       
    render() {               
        
        const {reposAgain} = this.props;
        console.log('renderRepoList props', reposAgain)

        const filterOne = reposAgain.filter(item =>
        item.name.toUpperCase().includes(this.props.handleRepos.toUpperCase()));
        
        // const filterTwo = filterOne.filter(item =>
        // item.language.includes(this.props.handleSelect));
        
                
        return ( 
            <ul className="divBox">            
                {filterOne.map((repos, index)=>
                    <li key={index}>
                        <Link to={`/${repos.id}`}>
                            <Repo
                                name={repos.name}      
                            />                         
                        </Link>
                        <Repo 
                            language={repos.language}
                            description={repos.description} 
                        />
                    </li>
                )}         
            </ul>            
         );
    }
}

export default RepoList;
