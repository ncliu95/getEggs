// src/components/IndexPage.js
import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

export default class IndexPage extends React.Component {
  render() {
    return (
    	<Grid>
    		<Row>
    			<Col xs={10} xsOffset={1} >
			      	<Jumbotron>
				      	<h1>getEggs()</h1>
				      	<br/>
				      	<h3>A website dedicated to my love of good food.</h3>
				      	<br/>
				      	<p>Check out the recipe section to see what I've been making,<br/>
				      	or come with me on my food journey to see what I've been eating!</p>
			      	</Jumbotron>
		      	</Col>
		    </Row>
      	</Grid>
    );
  }
}