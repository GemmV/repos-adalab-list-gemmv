import React, { Component, Fragment } from 'react';
import '../styles/Repo.css';

class Repo extends Component {
    
    
    render() { 
        console.log('Repo props1', this.props)
        const {name}=this.props;
        const {description}=this.props; 
        const {languages}=this.props;
        
        return ( 
            <Fragment>
                <h1>{name}</h1>
                <p>{description}</p>
                <span>{languages}</span>
            </Fragment>
         );
    }
}

export default Repo;