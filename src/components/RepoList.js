import React, { Component, Fragment } from 'react';
import '../styles/RepoList.css';
import Repo from './Repo'; //Repo es mi hija

class RepoList extends Component {
        
    render() { 
        console.log('RepoList', this.props)
        
        return ( 
            <ul className="ulBox">
                {this.props.repos.map(item=>{
                    return (
                        <li className="liBox" key={item.id}>
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