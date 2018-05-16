import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
import store from "../store/index";


const mapStateToProps = state => {
  return { articles: state.articles };
};

const state = store.getState()

let funny = 0
let unfunny = 0



const VoteTotals = ({ articles }) => (
  <ul className="list-group list-group-flush">
	    <div>
	      <h2>Funny Votes: 0</h2>
	        <br />
	      <h2>Not Funny Votes: 0</h2>
	    </div>
  </ul>
);

console.log(state.articles)
for (var e in state.articles) {
	console.log(state.articles[e])
}




const Totals = connect(mapStateToProps)(VoteTotals);

VoteTotals.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Totals;
