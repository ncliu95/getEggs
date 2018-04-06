// src/components/JourneyPage.js
import React from 'react';
import { Carousel, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export default class JourneyPage extends React.Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>getEggs() - Food Journey</title>
				</Helmet>
				<Grid>
		    		<Row>
		    			<Col xs={10} xsOffset={1} >
					      	<Jumbotron>
						      	<h2>My Food Journey</h2>
						      	<hr/>
					      	</Jumbotron>
				      	</Col>
				    </Row>
				    <Row>
				    	<Col xs={8} xsOffset={2}>
					    	<Carousel>
							  	<Carousel.Item>
							    	<img width={600} height={450} alt="Sea bass image" src="img/food1.jpg" />
							  	</Carousel.Item>
							  	<Carousel.Item>
							    	<img width={600} height={450} alt="Image of fish" src="img/food2.jpg" />
							  	</Carousel.Item>
							  	<Carousel.Item>
							    	<img width={600} height={450} alt="Image of lobster tails" src="img/food3.jpg" />
							  	</Carousel.Item>
							</Carousel>
						</Col>
				    </Row>
		      	</Grid>
		      	
	      	</div>
		);
	}
}