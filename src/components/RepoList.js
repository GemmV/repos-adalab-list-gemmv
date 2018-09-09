import React, { Component } from 'react';
import '../styles/RepoList.css';
import Repo from './Repo'; //Repo es mi hija

class RepoList extends Component {
        
    render() { 
        console.log('RepoList', this.props)
        
        return ( 
            <ul>
                {this.props.repos.filter(item=>{
                    return item.name.toLowerCase();
                    })                
                .map(item=>{
                    return (
                        <li key={item.id}>
                            <Repo item={item}/>
                        </li>
                    )
                    })
                }
            </ul>            
         );
    }
}

export default RepoList;