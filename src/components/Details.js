import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends Component {
    constructor(props){
		super(props);
		console.log('Paluego', this.props);
	}
   
    render() { 
        
        return (         
        <div>
            <Link to='/'>                
                <div>
                    <h2>{this.props.repos.name}</h2>
                    <p>{this.props.description}</p>
                    <p>{this.props.language}</p>                    
                </div>Back
            </Link>
        </div>    
     );
}
}

 
export default Details;
