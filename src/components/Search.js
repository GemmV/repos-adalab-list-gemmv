import React, { Component, Fragment } from 'react';
import '../styles/Search.css';
 
class Search extends Component {
       
    render() { 
        return ( 
            <Fragment>
                <input type="text" placeholder="repositorio1"/>
                <button>BUSCAR</button>
            </Fragment>
         );
    }
}
 
export default Search;