import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { addArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isLoaded: false,      
      joke: [],
      vote: null,
      funny: 0,
      notfunny: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getJoke() {
      fetch("https://icanhazdadjoke.com/", {
        headers: {
          'accept': 'application/json'
        }
      })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              joke: result.joke
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )   
  }

  componentWillMount() {
    this.getJoke()
  }

  handleVote(vote) {
    this.setState({
      vote: vote
    }, 
    () => this.handleSubmit())
  }

  handleSubmit(event) {
    const { joke } = this.state;
    const { vote } = this.state;
    this.props.addArticle({ joke, vote });
    if (this.state.vote === 'Funny') {
      this.setState({
        funny: this.state.funny + 1
      })
    } else if (this.state.vote === 'Not Funny') {
      this.setState({
        notfunny: this.state.notfunny + 1
      })
    }
    this.getJoke()
  }

  render() {
    const { title } = this.state;
    return (

        <div>
          <div className="dadjoke">
              {this.state.joke}
          </div>
          <div className="buttons">
              <button className="funny" onClick={this.handleVote.bind(this, 'Funny')}>Funny!</button>{' '}
              <button className="unfunny" onClick={this.handleVote.bind(this, 'Not Funny')}>Not Funny!</button>{' '}
          </div>
          <div>
            <br />
            <h2>Funny Votes: {this.state.funny}</h2>
              <br />
            <h2>Not Funny Votes: {this.state.notfunny}</h2>
          </div>
     
        </div> 


    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
  addArticle: PropTypes.func.isRequired
};

export default Form;
