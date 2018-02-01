import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexboxgrid';
import './header.css';
import MenuList from "./Menu";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Grid className="container-fluid">
                    <Row className="row middle-xs">
                        <MenuList/>
                    </Row>
                </Grid>
            </header>
    );
    }
}

export default Header;