import React from 'react';

class Searchbar extends React.Component{
state={term:""};
onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
} 
render(){
return(
    <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
        <label>Search Videos</label>
        <div className="ui input">
        <input 
        type="text"
        value={this.state.term}
        onChange={(e)=>this.setState({term:e.target.value})}
        />
        </div>
        </div>
        </form>
    </div>
    );
  }
}

export default Searchbar;