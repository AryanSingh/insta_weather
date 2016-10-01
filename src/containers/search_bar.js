import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
// import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          value={this.state.term}
          onChange={this.onInputChange}
          className="form-control"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
