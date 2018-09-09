import React, { Component, Fragment } from 'react';
import '../styles/Search.css';

class Search extends Component {
       
    render() {     
        return ( 
            <Fragment>
            <div className="barBox">
                <h1 className='maintitle'>Repos at Adalab in Github</h1>
                <input type="text" onChange={this.props.repos.searchByName} placeholder="escribe aquí"/>   

                <select className="searchBox" id={this.props.repos.id} onChange={this.props.repos.selectLanguage} value={this.props.repos.language}> 
                    {this.props.repos.filter(item=>{     
                        return this.props.repos.language === item.language})
                    }       
                    <option value="default">Elige</option> 
                    <option value="CSS">CSS</option>
                    <option value="HTML">HTML</option>
                    <option value="2">Shell</option>
                    <option value="3">JavaScript</option>                    
                </select>
            </div>
            </Fragment> //hacer otro option con value={this.props.repos.language}
         );
    }
}
 
export default Search;

