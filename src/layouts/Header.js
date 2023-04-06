import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from '../providers/WalletProvider';
import { CloseIcon, HamburgerIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Divider, Modal, ModalContent, useDisclosure, ModalHeader } from '@chakra-ui/react';
import logo from "../assets/img/logo.png";
import eth from "../assets/img/eth.png";
import polygon from "../assets/img/polygon.png";

export default function Header({ page }) {
    const { account, isConnected, changeNetwork, connect, disconnect } = useContext(Wallet);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div id='headerContainer'>
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
                        <a href='#counter'>White Paper</a>
                         <TriangleDownIcon boxSize={"12px"} />
                        {/*<div className="page-links">
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
                                : <button className="connect-btn" onClick={() => {window.open("https://app.athleteclub.com");}}>Go to app</button>
                        }
                    </div>
                    <div className='nav-icon' onClick={() => {isOpen ? onClose() : onOpen()}}>
                        {isOpen ? <CloseIcon style={{height: '40px', width: '40px'}}/> : <HamburgerIcon style={{height: '60px', width: '60px'}}/>}
                    </div>
                </div>
            </div>
            <Modal size='full' isOpen={isOpen} onClose={onClose}>
                <ModalContent padding={'80px'} display={'flex'} flexDirection={'column'} gap={'48px'}>
                    <ModalHeader style={{height: '250px', alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                        <img src={logo} style={{height: '150px', width: '150px'}}/>
                        <CloseIcon style={{height: '40px', width: '40px'}} onClick={onClose}/>
                    </ModalHeader>
                    
                    <div style={{fontSize: '48px', }}>NFTs</div>
                    <div style={{fontSize: '48px', }}>Marketplace</div>
                    <div style={{fontSize: '48px', }}>Team</div>
                    <div style={{fontSize: '48px', }}>Resources</div>

                    <Divider marginY="6px" />

                    {
                        isConnected
                            ? <>
                                <div style={{fontSize: '48px', border: '4px solid #000', padding: '12px', borderRadius: '24px', display: 'flex', justifyContent: 'center', width: '450px'}}>{account.slice(0, 5)}...{account.slice(-4,)}</div>
                            </>
                            : <button  style={{fontSize: '48px', border: '4px solid #000', padding: '12px', borderRadius: '24px', display: 'flex', justifyContent: 'center', width: '450px'}} onClick={() => {window.open("https://app.athleteclub.com");}}>Go to app</button>
                    }

                </ModalContent>

            </Modal>
        </div>
    )
}
