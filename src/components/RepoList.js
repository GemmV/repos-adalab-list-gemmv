import React, { Component } from 'react';
import '../styles/RepoList.css';
import Repo from './Repo'; //Repo es mi hija

class RepoList extends Component {
       
    render() {                 
              console.log('RepoList props', this.props.repos)  
        return ( 
            <ul className="divBox">     
                {this.props.repos
                    .filter(item => {
                        return item.name.toLowerCase().includes(this.props.repos.handleRepos);
                    })
                    .filter(item => {
                    if(this.props.repos.select ===''){
                        return true
                    }else{
                        return this.props.repos.select === item.select
                    }
                    })       
                    .map(item => {
                        <li key={item.id}>                        <Repo
                                item={item} 
                                        
                            />     
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>{item.language}</p>             
                        </li>
                    })}         
            </ul>            
         );
    }
}

export default RepoList;
