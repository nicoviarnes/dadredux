import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (

  <ul className="list-group list-group-flush">
    {articles.map(el => (
	      	<Table>
	      		<tr>
	      			<td>{el.joke}</td>
	      			<td>{el.vote}</td>
	      		</tr>
	      	</Table>

    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default List;
