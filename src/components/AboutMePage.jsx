// src/components/AboutMePage.js
import React from 'react';
import { Grid, Row, Col, Jumbotron, Panel, ListGroup, ListGroupItem, } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export default class AboutMePage extends React.Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>getEggs() - About Me</title>
				</Helmet>
				<Grid>
		    		<Row>
		    			<Col xs={10} xsOffset={1}>
					      	<Jumbotron>
						      	<h2>Nick Liu</h2>
					      	</Jumbotron>
				      	</Col>
				    </Row>
				    <Row>
				    	<Col xs={10} xsOffset={1} >
				    		<Panel>
				    			<Panel.Heading>
	    							<Panel.Title componentClass="h3">About Me</Panel.Title>
	    						</Panel.Heading>
	    						<Panel.Body>
					    			<p>
					    				I am a full stack web developer currently residing in Houston, Texas.
					    				<br />
					    				<br />
					    				After four years of work as an certified EMT-B during college, I decided
					    				that medical school was not for me. Instead, I turned towards programming
					    				that I was always passionate in, and looked to expand my horizons.
					    				<br />
					    				<br />
					    				With only basic Java and Python experience, I was recruited into a start up
					    				by a friend with an idea for a web application. Utilizing my entire summer,
					    				I learned the basics of databases, API's, backend, frontend, and even deployment
					    				processess. Though this particular start up is currently on hold due to the 
					    				rest of the team being busy with other commitments, I have gained tremendous 
					    				experience in the field of web development and to this day, I have continuously
					    				improving my skills.
					    				<br />
					    				<br />
					    				This website is my ongoing effort to learn and utilize the React.js library, and
					    				to stay up to date on the ever renewing web technology.
					    			</p>
				    			</Panel.Body>
				    		</Panel>
				    	</Col>
				    	<Col xs={5} xsOffset={1}>
				    		<Panel>
				    			<Panel.Heading>
	    							<Panel.Title componentClass="h3">My Hobbies</Panel.Title>
	    						</Panel.Heading>
	    						<Panel.Body>
					    			<ListGroup>
										<ListGroupItem header="Cooking & Baking">
											As you can see from this site, 
											my passion for creating that manifests
											with programming, combined with my love 
											for good food as inspired a hobby of cooking
											and baking. 
										</ListGroupItem>
										<ListGroupItem header="Working Out">
											With a background of biomechanics, the physics
											and well being of the human body has continued to
											intrigue me. <br/>
											By working out, I get to feel these concepts in motion
											while also relieving stress and burning off the calories
											that my other hobbies have accrued. <br/>
											However, I might be well in the black...
										</ListGroupItem>
										<ListGroupItem header="Gaming">
									    	Games are what drove me to programming in the
									    	first place. I am still a proud computer gamer
									    	to this date, and you can find me playing anything
									    	from FPS to MMORPG's on my offtime. 
									  	</ListGroupItem>
									</ListGroup>
				    			</Panel.Body>
				    		</Panel>
				    	</Col>
				    	<Col xs={5}>
				    		<Panel>
				    			<Panel.Heading>
	    							<Panel.Title componentClass="h3">My Work</Panel.Title>
	    						</Panel.Heading>
	    						<Panel.Body>
					    			<ListGroup>
										<ListGroupItem header="GitHub" target="_blank" href="https://github.com/ncliu95/">
											ncliu95
										</ListGroupItem>
										<ListGroupItem header="LinkedIn" target="_blank" href="https://www.linkedin.com/in/ncliu95/">
											Nick Liu
										</ListGroupItem>
										<ListGroupItem header="My Resume" target="_blank" href="/img/softwaredevresume.pdf">
									    	PDF
									  	</ListGroupItem>
									</ListGroup>
				    			</Panel.Body>
				    		</Panel>
				    	</Col>
				    </Row>
		      	</Grid>
	      	</div>
		);
	}
}