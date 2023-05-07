import * as React from 'react';
import { SidebarLinks } from './SidebarLinks';
import { PriceTag } from '../PriceTag';

const logo = require( '../../assets/img/logo.svg' );

interface SidebarProps {
    currentBalance: number;
    currentStockBalance: number;
}

interface SidebarState {
    width: number;
}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {

    constructor( props: SidebarProps ) {
        super( props );
        this.state = {
            width: window.innerWidth
        };
    }

    updateDimensions() {
        this.setState( {width: window.innerWidth} );
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener( 'resize', this.updateDimensions.bind( this ) );
    }

    renderLogo() {
        return (
            <div className="logo">
                <a href="/" className="simple-text logo-mini">
                    <div className="logo-img">
                        <img src={logo} alt="logo_image"/>
                    </div>

                </a>
                <a href="/" className="simple-text logo-normal">
                   Virtual Stockmarket
                </a>
            </div>
        );
    }

    render() {

        return (
            <div id="sidebar" className="sidebar" data-color="green">
                {this.renderLogo()}

                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <SidebarLinks/>
                        <li>
                            <hr className="currentBalance-hr"/>
                            <p className="currentBalance-p">
                                Virtual Account Balance: <PriceTag value={this.props.currentBalance}/><br/>
                               Virtual Stock Balance: <PriceTag value={this.props.currentStockBalance}/>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}