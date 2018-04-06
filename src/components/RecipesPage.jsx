// src/components/RecipesPage.js
import React from 'react';
import { Panel, ListGroup, ListGroupItem, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export default class RecipesPage extends React.Component {
	render() {
		return (
				<div>
					<Helmet>
						<title>getEggs() - Recipes</title>
					</Helmet>
					<Grid>
					    <Row>
			    			<Col xs={10} xsOffset={1} >
						      	<Jumbotron>
							      	<h2>Recipes</h2>
							      	<hr/>
						      	</Jumbotron>
					      	</Col>
					    </Row>
					    <Row>
			    			<Col xs={10} xsOffset={1} >
						      	<Panel>
					    			<Panel.Heading>
		    							<Panel.Title componentClass="h1">Tiramisu</Panel.Title>
		    						</Panel.Heading>
		    						<Panel.Body>
						    			<Grid>
							    			<Row>
							    				<Col xs={2}>
							    					<h3>Ingredients</h3>
							    					<ListGroup>
							    						<ListGroupItem header="Egg Yolks">6</ListGroupItem>
							    						<ListGroupItem header="White Sugar">3/4 Cups</ListGroupItem>
							    						<ListGroupItem header="Milk">2/3 Cups</ListGroupItem>
							    						<ListGroupItem header="Heavy Cream">1 1/4 Cups</ListGroupItem>
							    						<ListGroupItem header="Vanilla Extract">1/2 tsp.</ListGroupItem>
							    						<ListGroupItem header="Mascarpone Cheese">1 lb.</ListGroupItem>
							    						<ListGroupItem header="Strong Coffee">Room temperature <br />1/4 cup</ListGroupItem>
							    						<ListGroupItem header="Rum">2 tbsp.</ListGroupItem>
							    						<ListGroupItem header="Ladyfinger Cookies">6 oz.</ListGroupItem>
							    						<ListGroupItem header="Unsweetened Cocoa Powder">1 tbsp.</ListGroupItem>
							    					</ListGroup>
							    				</Col>
							    				<Col xs={6}>
							    					<h3>Instructions</h3>
							    					<ListGroup>
													    <ListGroupItem>1. In a medium saucepan, whisk together egg yolks and sugar until well blended.<br /> 
													    Whisk in milk and cook over medium heat, stirring constantly, until mixture boils. <br /> 
													    Boil gently for 1 minute, remove from heat and allow to cool slightly. <br /> 
													    Cover tightly and chill in refrigerator 1 hour.</ListGroupItem>
													  	<ListGroupItem>2. In a medium bowl, beat cream with vanilla until stiff peaks form. <br /> 
													  	Whisk mascarpone into yolk mixture until smooth.</ListGroupItem>
													  	<ListGroupItem>3. In a small bowl, combine coffee and rum. <br /> 
													  	Split ladyfingers in half lengthwise and drizzle with coffee mixture.</ListGroupItem>
														<ListGroupItem>4. Arrange half of soaked ladyfingers in bottom of a 7x11 inch dish. <br /> 
														Spread half of mascarpone mixture over ladyfingers, then half of whipped cream over that. <br /> 
														Repeat layers and sprinkle with cocoa. Cover and refrigerate 4 to 6 hours, until set.</ListGroupItem>
													</ListGroup>
							    				</Col>
							    			</Row>
						    			</Grid>
					    			</Panel.Body>
					    		</Panel>
					      	</Col>
					    </Row>
			      	</Grid>
		      	</div>
		);
	}
}