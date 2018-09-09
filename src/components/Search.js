import React, { Component, Fragment } from 'react';
import '../styles/Search.css';
 
class Search extends Component {
       
    render() { 
        console.log(this.props)
        return ( 
            <Fragment>
                <input type="text" onChange={this.props.searchByName}placeholder="repositorio1"/>               
                <button  >BUSCAR</button>
            </Fragment>
         );
    }
}
 
export default Search;