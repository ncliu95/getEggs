// src/components/IndexPage.js
import React from 'react';
import { Panel, Grid, Row, Col, Jumbotron } from 'react-bootstrap';

export default class IndexPage extends React.Component {
  render() {
    return (
	    	<Grid>
	    		<Row>
	    			<Col xs={10} xsOffset={1} >
				      	<Jumbotron>
					      	<h1>getEggs()</h1>
					      	<hr/>
					      	<br/>
					      	<h3>A website dedicated to my love of good food.</h3>
					      	<br/>
					      	<p>Check out the recipe section to see what I've been making,<br/>
					      	or come with me on my food journey to see what I've been eating!</p>
				      	</Jumbotron>
			      	</Col>
				    <Col xs={10} xsOffset={1} >
			    		<Panel>
			    			<Panel.Heading>
    							<Panel.Title componentClass="h3">What am I up to?</Panel.Title>
    						</Panel.Heading>
    						<Panel.Body>
				    			<p>
				    				I am currently engaged in a start up called Euclid's Library, or Euclid.
				    				<br />
				    				<br />
				    				Based out of the University of Rochester, Euclid seeks to provide an 
				    				interactive, dynamic, and accessible encyclopedia that eliminates 
				    				the obstruction that technical jargon has on the learning process.
				    				<br />
				    				<br />
				    				I currently work as a frontend developer, implementing features and
				    				debugging, while also responsible for the deployment process.
				    			</p>
			    			</Panel.Body>
			    		</Panel>
					</Col>
	    		</Row>
	      	</Grid>
    );
  }
}