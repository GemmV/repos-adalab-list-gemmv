import React, { Component} from 'react';
import '../styles/Search.css';

class Search extends Component {
       
    render() {  
        const {onChangeHandler} = this.props   
        console.log( 'RenderSearch props', this.props)
        return ( 
            
            <div className="barBox">
                <h1 className='maintitle'>Repos at Adalab in Github</h1>

                <input type="text" onChange={onChangeHandler.handleRepos} placeholder="Buscar"/>   

                <select className="searchBox" value={onChangeHandler.language} onChange={onChangeHandler.handleSelect}> 
                    <option value="default">Elige</option> 
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

