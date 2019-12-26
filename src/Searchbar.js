import React from 'react';
import './App.css';

class Searchbar extends React.Component{
   state = { search : '' }

   onChange(props){
       this.setState({ search: props.target.value});
   }

   onFormSubmit= event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.search);
   }

   render(){
       return(
        <div className="ui segment mt">
          <form onSubmit={ e => this.onFormSubmit(e)} className="ui form">
            <div className="field">
                <label>Search</label>
                <div className="ui icon input">
                    <input type="text" value={this.state.term} onChange={event => this.onChange(event)}/>
                </div>
            </div>
          </form>
        </div>
    )};
}

export default Searchbar;