import React, { Component} from 'react';
import '../styles/Search.css';

class Search extends Component {
       
    render() {          
        console.log( 'RenderSearch props', this.props)
        return ( 
            
            <div className="barBox">
                <h1 className='maintitle'>Repos at Adalab in Github</h1>
                

                <input type="text" onChange={this.props.handleRepos} placeholder="Buscar"/>   

                <select className="searchBox" value={this.props.language} onChange={this.props.handleSelect}> 
                    <option value="CSS">CSS</option>
                    <option value="HTML">HTML</option>
                    <option value="Shell">Shell</option>
                    <option value="JavaScript">JavaScript</option>   
                </select>
            </div>
         );
    }
}
 
export default Search;

