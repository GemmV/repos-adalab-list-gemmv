import React, { Component } from 'react';
import '../styles/Repo.css';
import { Link } from 'react-router-dom';


class Repo extends Component {    
    
    render() {         
         const {name} = this.props;
        
        console.log('RenderRepo props', this.props)
        
        return ( 
            <div>
                <Link to={`/Detail/${this.props.id}`}>
                <h2>{name}</h2>
                </Link>                 
            </div>
         );
    }
};
export default Repo;