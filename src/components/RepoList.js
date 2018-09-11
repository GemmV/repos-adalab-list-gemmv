import React, { Component } from 'react';
import '../styles/RepoList.css';
import Repo from './Repo'; //Repo es mi hija

class RepoList extends Component {
       
    render() {                 
              console.log('RepoList props',this.props)  
        return ( 
            <ul className="divBox">     
            {this.props.repos
                .filter(item => {
                    return item.name.toLowerCase().includes(this.props.handleRepos);
                  })
                .filter(item=>{
                  if(this.props.language ===''){
                    return true
                  }else{
                    return this.props.language === item.language
                  }
                })       
                .map((item)=>
                    <li key={item}>                       
                            <Repo
                                item={item.id}                                     
                            />                
                    </li>
                )}         
            </ul>            
         );
    }
}

export default RepoList;
