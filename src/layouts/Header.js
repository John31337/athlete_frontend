import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from '../providers/WalletProvider';
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Divider } from '@chakra-ui/react';
import logo from "../assets/img/logo.png";
import eth from "../assets/img/eth.png";
import polygon from "../assets/img/polygon.png";

export default function Header({ page }) {
    const { account, isConnected, changeNetwork, connect, disconnect } = useContext(Wallet);
    return (
        <div id="header">
            <div className="left">
                <a className="logo" href="/">
                    <img src={logo} />
                </a>
                <div className="nav-item">
                    NFTs
                </div>
                <div className="nav-item">
                    Marketplace
                </div>
                <div className="nav-item">
                    Team
                </div>
                <div className="nav-item">
                    <span>Resources</span>
                    <TriangleDownIcon boxSize={"12px"} />
                    <div className="page-links">
                        <Link to="/">NFTs</Link>
                        <Link to="/explore">Marketplace</Link>
                        <Link to="/nft_ranking">Team</Link>
                        <Link to="/nft_ranking">Resources</Link>
                    </div>
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
            </div>
        </div>
    )
}
