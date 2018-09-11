import React, { Component } from 'react';
import '../styles/Repo.css';
import { Link } from 'react-router-dom';


class Repo extends Component {    
    
    render() {         
         
        
        console.log('RenderRepo props', this.props.item)
        
        return ( 
            <div>
                <Link to={`/Detail/${this.props.item.id}`}>
                <h2>{this.props.item.name}</h2>
                </Link>                 
            </div>
         );
    }
};
export default Repo;