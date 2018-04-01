// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Input, Button } from 'react-bootstrap';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Navbar>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">getEggs()</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
           
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Recipes</NavItem>
                            <NavItem eventKey={2} href="#">Food Journey</NavItem>
                            <NavItem eventKey={3} href="#">About Me</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>     
            <div className="app-content">{this.props.children}</div>
            <footer>
                <p>
                This is an web application created with <strong>React</strong> and <strong>Express</strong> by Nick Liu.
                </p>
            </footer>
            </div>
        );
    }
}