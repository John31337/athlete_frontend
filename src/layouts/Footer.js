import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png";
import world from "../assets/img/world.svg";

export default function Footer() {
    return (
        <div id="footer">
            <div className="main">
                <div className="right">
                    <div className="navbar">
                        <div className="logo">
                            <a href="/"><img src={logo} /></a>
                        </div>
                    </div>
                    <div className="navbar">
                        <div className="title">
                            Product
                        </div>
                        <Link className="item" to="">
                            NFTs
                        </Link>
                        <Link className="item" to="/discover">
                            Features
                        </Link>
                        <a className="item">
                            Marketplace
                        </a>
                        <a className="item">
                            Accessibility
                            <div className='button'>BETA</div>
                        </a>
                    </div>
                    <div className="navbar">
                        <div className="title">
                            Solutions
                        </div>
                        <a className="item">
                            Start tracking
                        </a>
                        <a className="item">
                            Coach onborading
                        </a>
                        <a className="item">
                            Parent onboarding
                        </a>
                        <a className="item">
                            Research
                        </a>
                    </div>
                    <div className="navbar">
                        <div className="title">
                            Resources
                        </div>
                        <a className="item">
                            Help Center
                        </a>
                        <a className="item">
                            Blog
                        </a>
                        <a className="item">
                            Tutorials
                        </a>
                        <a className="item">
                            FAQs
                        </a>
                    </div>
                    <div className="navbar">
                        <div className="title">
                            Support
                        </div>
                        <a className="item">
                            Contact Us
                        </a>
                        <a className="item">
                            Developers
                        </a>
                        <a className="item">
                            Documentation
                        </a>
                        <a className="item">
                            Integrations
                        </a>
                    </div>                    
                    <div className="navbar">
                        <div className="title">
                            Company
                        </div>
                        <a className="item">
                            About
                        </a>
                        <a className="item">
                            Press
                        </a>
                        <a className="item">
                            Events
                        </a>
                        <a className="item">
                            Request Demo
                        </a>
                    </div>                         
                </div>
            </div>
            <div className="divider" />
            <div className="bottom">
                <div className="left">
                    NFT Athlete Club © 2023. All rights reserved.
                </div>
                <div className="right">
                    <div className='item'>Terms</div>
                    <div className='item'>Privacy</div>
                    <div className='item'>Contact</div>
                    <img src={world} className='item'/>
                    <div className='item'>EN</div>
                </div>
            </div>
        </div>
    )
}
