import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends Component {
    constructor(props){
		super(props);
		console.log('Paluego', this.props);
	}
   
    render() { 
        const {name, description, select} = this.props.repos.find(i => i.id === parseInt(this.props.match.params.id));

        return (         
        <div>
            <Link to='/'>                
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{select}</p>                    
                </div>Back
            </Link>
        </div>    
     );
}
}

 
export default Details;
