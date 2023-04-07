import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png";
import world from "../assets/img/world.svg";
import twitter from "../assets/img/twitter.png";
import telegram from "../assets/img/telegram.png";
import medium from "../assets/img/medium.png";

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
                        <Link className="item" to="http://github.com">
                            NFTs
                        </Link>
                        <Link className="item" to="https://chain.link/education-hub/what-is-dynamic-nft">
                            Features
                        </Link>
                        <Link className="item" to="https://app.nftathleteclub.com">
                            Marketplace
                        </Link>
                        <a className="item">
                            Accessibility
                            <div className='button'>Comming...</div>
                        </a>
                    </div>
                    <div className="navbar">
                        <div className="title">
                            Support
                        </div>
                        <a className="item" href="mailto:support@nftathleteclub.com">
                            Contact Us
                        </a>
                        <a className="item" href='#team'>
                            Developers
                        </a>
                        <Link className="item" to="https://drive.google.com/file/d/1LP9SVKWpAYGGJbtW_GLH0uj8fda1_ng4/view?usp=share_link">
                            Documentation
                        </Link>
                        <Link className="item" to="https://docs.google.com/forms/">
                            Integrations
                        </Link>
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
                    <div className='item'>
                        <img src={twitter}/>
                    </div>
                    <div className='item'>
                        <img src={telegram}/>
                    </div>
                    <div className='item'>
                        <img src={medium}/>
                    </div>
                    <img src={world} className='item'/>
                    <div className='item'>EN</div>
                </div>
            </div>
        </div>
    )
}
