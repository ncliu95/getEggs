// src/components/JourneyPage.js
import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

export default class JourneyPage extends React.Component {
	render() {
		return (
			<Grid>
	    		<Row>
	    			<Col xs={10} xsOffset={1} >
				      	<Jumbotron>
					      	<h2>My Food Journey</h2>
				      	</Jumbotron>
			      	</Col>
			    </Row>
	      	</Grid>
		);
	}
}