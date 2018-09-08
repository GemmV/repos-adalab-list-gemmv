import React, { Component, Fragment } from 'react';
import '../styles/RepoList.css';
import Repo from './Repo'; //Repo es mi hija

class RepoList extends Component {
    
    render() { 
        console.log('RepoList props', this.props)

        return ( 
            <Fragment>
                <main>
                    <ul>
                        <li>
                            
                            <Repo repos={this.props.repos}/>
                        </li>           
                    </ul>
                </main>
            </Fragment>
         );
    }
}

export default RepoList;