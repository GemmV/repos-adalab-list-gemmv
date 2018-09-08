import React, { Component, Fragment } from 'react';
import '../styles/RepoList.css';
import Repo from './Repo'; //Repo es mi hija

class RepoList extends Component {
    constructor(props) {
        super(props);        
    }
    render() { 
        return ( 
            <Fragment>
                <main>
                    <ul>
                        <Repo repos={this.props}/>                    
                    </ul>
                </main>
            </Fragment>
         );
    }
}
 console.log(this.props)//undefined para variar
export default RepoList;