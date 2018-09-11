import React, { Component} from 'react';
import RepoList from './RepoList';
import Search from './Search';


class Painter extends Component {
  render(){
    return (
        <div>
            <RepoList
                repos={this.props.repos}
                name={this.props.name}
                description={this.props.description}
                select={this.props.language}         
                handleSelect={this.props.handleSelect}
                handleRepos={this.props.handleRepos}
            />
            <Search
                handleSelect={this.props.handleSelect}
                handleRepos={this.props.handleRepos}
                select={this.props.language}
            />             
        </div>

    );
  }
}

export default Painter;