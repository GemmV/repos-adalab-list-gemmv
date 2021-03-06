import React, { Component } from 'react';
import '../styles/Repo.css';
import { Link } from 'react-router-dom';


class Repo extends Component {    
    
    render() {
        console.log('RenderRepo props', this.props.item)       
        return ( 
            <div>
                <Link to={`/Details/${this.props.item.id}`}>
                    <h2>{this.props.item.name}</h2>
                </Link>  
                <h3>{this.props.item.description}</h3>
                <h4>{this.props.item.select}</h4>
            </div>
         );
    }
};
export default Repo;