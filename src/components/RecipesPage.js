// src/components/RecipesPage.js
import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

export default class RecipesPage extends React.Component {
	render() {
		return (
			<Grid>
	    		<Row>
	    			<Col xs={10} xsOffset={1} >
				      	<Jumbotron>
					      	<h2>Recipes</h2>
				      	</Jumbotron>
			      	</Col>
			    </Row>
	      	</Grid>
		);
	}
}