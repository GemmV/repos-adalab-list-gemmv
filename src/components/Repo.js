import React, { Component, Fragment } from 'react';
import '../styles/Repo.css';

class Repo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h1 className="character-name">{this.props.repos.name}</h1>
            </Fragment>
         );
    }
}
 console.log(this.props)
export default Repo;