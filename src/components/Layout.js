// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Input, Button } from 'react-bootstrap';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Navbar fixedTop>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">getEggs()</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
           
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="recipes">Recipes</NavItem>
                            <NavItem eventKey={2} href="journey">Food Journey</NavItem>
                            <NavItem eventKey={3} href="about">About Me</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div className="app-content">
                    {this.props.children}
                </div>

                <Navbar fixedBottom>
                    <Nav>
                        <NavItem>
                            This is an web application created with <strong>React</strong> 
                            and <strong>Express</strong> by Nick Liu.
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}