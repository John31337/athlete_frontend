import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from '../providers/WalletProvider';
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Divider } from '@chakra-ui/react';
import logo from "../assets/img/logo.png";
import eth from "../assets/img/eth.png";
import polygon from "../assets/img/polygon.png";

export default function Header({ page }) {
    const { account, isConnected, changeNetwork, connect, disconnect } = useContext(Wallet);
    const [showNav, setShowNav] = useState(false);
    return (
        <div id='headerContainer' style={{height: showNav ? '500px': '200px'}}>
            <div id="header">
                <div className="left">
                    <a className="logo" href="/">
                        <img src={logo} />
                    </a>
                    <a className="nav-item" href='#intro'>
                        NFTs
                    </a>
                    <a className="nav-item" href='#features'>
                        Marketplace
                    </a>
                    <a className="nav-item" href='#team'>
                        Team
                    </a>
                    <div className="nav-item">
                        <a href='#counter'>Resources</a>
                        {/* <TriangleDownIcon boxSize={"12px"} />
                        <div className="page-links">
                            <Link to="/">NFTs</Link>
                            <Link to="/explore">Marketplace</Link>
                            <Link to="#team">Team</Link>
                            <Link to="/nft_ranking">Resources</Link>
                        </div> */}
                    </div>
                </div>
                <div className="right">
                    <div className="connect">
                        {
                            isConnected
                                ? <>
                                    <div className="connect-btn">{account.slice(0, 5)}...{account.slice(-4,)}</div>
                                    <div className="network-lists">
                                        <div className="network" onClick={() => changeNetwork(80001)}><img src={polygon} />Polygon Testnet</div>
                                        <div className="network" onClick={() => changeNetwork(5777)}><img src={eth} />Ganache Testnet</div>
                                        <Divider marginY="6px" />
                                        <button className="disconnect-btn" onClick={disconnect}>Disconnect</button>
                                    </div>
                                </>
                                : <button className="connect-btn" onClick={connect}>Connect</button>
                        }
                    </div>
                    <div className='nav-icon' onClick={() => {setShowNav(!showNav)}}>
                        {showNav ? <CloseIcon style={{height: '40px', width: '40px'}}/> : <HamburgerIcon style={{height: '60px', width: '60px'}}/>}
                    </div>
                </div>
            </div>
            <div id="top-nav" style={{visibility: showNav ? 'visible' : 'hidden', height: showNav ? '200px': '0px'}}>
                {
                    isConnected
                        ? <>
                            <div className="connect-btn" onClick={disconnect}>{account.slice(0, 5)}...{account.slice(-4,)}</div>
                        </>
                        : <button className="connect-btn" onClick={connect}>Connect</button>
                }
                <div className='button'>NFTs</div>
                <div className='button'>Marketplace</div>
                <div className='button'>Team</div>
                <div className='button'>Resources</div>
            </div>
        </div>
    )
}
