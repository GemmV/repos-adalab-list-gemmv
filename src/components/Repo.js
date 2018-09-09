import React, { Component, Fragment } from 'react';
import '../styles/Repo.css';

class Repo extends Component {    
    
    render() {         
        const {name}=this.props.item;
        const {description}=this.props.item; 
        const {language}=this.props.item;
        
        return ( 
            <Fragment>
                <h1>{name}</h1>
                <p>{description}</p>
                <span>{language}</span>
            </Fragment>
         );
    }
};
export default Repo;