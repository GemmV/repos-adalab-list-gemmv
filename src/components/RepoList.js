import React, { Component, Fragment } from 'react';
import '../styles/RepoList.css';
import Repo from './Repo'; //Repo es mi hija

class RepoList extends Component {
    
    render() { 
        console.log('RepoList props', this.props)//undefined para variar

        return ( 
            <Fragment>
                <main>
                    <ul>
                        <Repo 
                            // name={name}
                            // description={description}
                            // languages={languages}
                        />               
                    </ul>
                </main>
            </Fragment>
         );
    }
}

export default RepoList;