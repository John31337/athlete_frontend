import React, { useState, useContext, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router';
import { Wallet } from '../providers/WalletProvider';
import { useToast } from "@chakra-ui/react";
import { getNFTs } from '../utils/contractFunctions';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import 'swiper/css';

import videoIcon from "../assets/img/video.svg";
import nftSample from "../assets/img/nft.png";
import ethIcon from "../assets/img/eth.svg";
import vector from "../assets/img/vector1.png";

import partner1 from "../assets/img/partner1.png";
import partner2 from "../assets/img/partner2.png";
import partner3 from "../assets/img/partner3.png";
import partner4 from "../assets/img/partner4.png";
import partner5 from "../assets/img/partner5.png";
import partner6 from "../assets/img/partner6.png";

import section4 from "../assets/img/section4.png";
import feature1 from "../assets/img/feature1.png";
import feature2 from "../assets/img/feature2.png";
import feature3 from "../assets/img/feature3.png";
import feature4 from "../assets/img/feature4.png";

import desktop from "../assets/img/mint.png";
import desktop1 from "../assets/img/mint1.png";
import section from "../assets/img/Section.png";

import dev1 from "../assets/img/dev1.png";
import dev2 from "../assets/img/dev2.png";
import dev3 from "../assets/img/dev3.png";
import dev4 from "../assets/img/dev4.png";
import line from "../assets/img/Line.png";
import teamMark1 from "../assets/img/team_mark1.png";
import teamMark2 from "../assets/img/team_mark2.png";
import teamMark3 from "../assets/img/team_mark3.png";

import section1 from "../assets/img/Section1.png";
import roadmapEllipse1 from "../assets/img/roadmapEllipse1.png";
import roadmapEllipse2 from "../assets/img/roadmapEllipse2.png";
import roadmapEllipse3 from "../assets/img/roadmapEllipse3.png";
import roadmapEllipse4 from "../assets/img/roadmapEllipse4.png";
import roadmap from "../assets/img/roadmap.png";

import section2 from "../assets/img/section2.png";
import concept from "../assets/img/concept.png";
import concept1 from "../assets/img/concept1.png";

import school from "../assets/img/school.png";
import diamond from "../assets/img/diamond.png";
import heart from "../assets/img/heartCircle.png";

import section3 from "../assets/img/section3.png";

export default function Home() {
  const { networkId, isConnected } = useContext(Wallet);
  const toast = useToast();
  const navigate = useNavigate();
  const [nfts, setNFTs] = useState([]);

  const getCollections = async () => {
    if (!isConnected) return;
    try {
      const nfts = await getNFTs(networkId);
      console.log(nfts);
      setNFTs(nfts);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCollections();
  }, [isConnected, networkId])

  console.log(isMobile);

  return (
    <div id="home">
      <section id='intro'>
        <div className="left">
          <div className='vector'>
            <img src={vector}/>
          </div>
          <div className="title">Create & collect student athlete trading cards</div>
          <div className="description">Introducing dynamic NFTs centered around your athletic club. Watch your student athlete NFT grow to reflect your real-life accomplishments.</div>
          <div className='visitContainer'>
            <div className='button'>Visit the marketplace
              <div className='forward'>
                <ArrowForwardIcon/>
              </div>
            </div>
            <div className='demoVideo'>
              <div className='icon'>
                <img src={videoIcon}/>
              </div>
              <div className='text'>
                Demo Video
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className='nftContainer'>
            {
              nfts.map(nft => {
                return(
                  <div className='nft'>
                    <img className='nftIcon' src={nftSample}/>
                    <div className='description'>
                      <div className='nameAuthor'>
                        <div className='name'>{nft.name}</div>
                        <div className='author'>{nft.creator}</div>
                      </div>
                      <div className='price'>
                        {nft.price}
                        <div className='eth'>
                          <img className='ethIcon' src={ethIcon}/>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <div className='partners'>
          <div className='partner'>
            <img className='img' src={partner1}/>
          </div>
          <div className='partner'>
            <img className='img' src={partner2}/>
          </div>
          <div className='partner'>
            <img className='img' src={partner3}/>
          </div>
          <div className='partner'>
            <img className='img' src={partner4}/>
          </div>
          <div className='partner'>
            <img className='img' src={partner5}/>
          </div>
          <div className='partner'>
            <img className='img' src={partner6}/>
          </div>
      </div>
      <section id='features'>
        <div className="left">
          <div className='vector'>
            <img src={vector}/>
          </div>
          <div className="title">All the cool features</div>
          <div className="description">Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.</div>
          <div className='button'>View all the features
            <div className='forward'>
              <ArrowForwardIcon/>
            </div>
          </div>
        </div>
        <div className='right' style={{backgroundImage:`url(${section4})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top'}}>
          <div className='imgContainer'>
            <img className='img1' src={feature1}/>
            <img className='img2' src={feature2}/>
          </div>
          <img className='img3' src={feature3}/>
          <img className='img4' src={feature4}/>
          <div className='create'>
            <div className='header'>Dynamic NFTs</div>
            <div className='title'>Track your progress as an athlete!</div>
            <div className='description'>Aliquam ut euismod condimentum elementum ultricies volutpat sit non. </div>
            <div className='btnContainer'>
              <div className='button'>Create your NFT</div>
            </div>
          </div>
        </div>
      </section>
      <div className='mint' style={{backgroundImage:`url(${section})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='vector'>
          <img src={vector}/>
        </div>
        <div className='title'>
          We’re building a *new* kind of NFT
        </div>
        <div className='description'>
          Introducing dynamic NFTs centered around your athletic club. Watch your student athlete NFT grow to reflect your real-life accomplishments
        </div>
        <div className='desktop'>
          <img src={desktop}/>
        </div>
        <div className='desktop1'>
          <img src={desktop1}/>
        </div>
      </div>
      <section id='team'>
        <div className='vector'>
          <img src={vector}/>
        </div>        
        <div className='title'>Meet our team</div>
        <div className='imgContainer'>
          <div className='potrait'>
            <img src={dev1}/>
            <div className='name'>Beowolf</div>
            <div className='description'>CEO and Founder</div>
          </div>
          <div className='potrait'>
            <img src={dev2}/>
            <div className='name'>Headred</div>
            <div className='description'>Full stack Developer</div>
          </div>
          <div className='potrait'>
            <img src={dev3}/>
            <div className='name'>Hygd</div>
            <div className='description'>Front End Developer</div>
          </div>
          <div className='potrait'>
            <img src={dev4}/>
            <div className='name'>Hygelac</div>
            <div className='description'>Co founder, Chairman,<br/> Executive Director</div>
          </div>
        </div>
        <div className='line'><img src={line}/></div>
        <div className='markContainer'>
          <div className='mark'>
            <img src={teamMark1}/>
          </div>
          <div className='mark'>
            <img src={teamMark2}/>
          </div>
          <div className='mark'>
            <img src={teamMark3}/>
          </div>
        </div>
      </section>
      <div className='roadmap' style={{backgroundImage:`url(${section1})`}}>
        <div className='left'>
          <div className='vector'>
            <img src={vector}/>
          </div>
          <div className='title'>Product roadmap</div>
          <div className='description'>This is what we have in store for 2023 and beyond</div>

        </div>
        <div className='right'>
          <div className='cardContainer'>
            <div className='card'>
              <div className='ellipse'>
                <img src={roadmapEllipse1}/>
              </div>
              <div className='phaseContainer'>
                <div className='subtitle'>Phase1</div>
                <div className='title'>Investment</div>
                <div className='description'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit odio sagittis, ac senectus eta.</div>
              </div>
            </div>
            <div className='card'>
              <div className='ellipse'>
                <img src={roadmapEllipse2}/>
              </div>
              <div className='phaseContainer'>
                <div className='subtitle'>Phase2</div>
                <div className='title'>Launch</div>
                <div className='description'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit odio sagittis, ac senectus eta.</div>
              </div>
            </div>
            <div className='card'>
              <div className='ellipse'>
                <img src={roadmapEllipse3}/>
              </div>
              <div className='phaseContainer'>
                <div className='subtitle'>Phase3</div>
                <div className='title'>Marketing</div>
                <div className='description'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit odio sagittis, ac senectus eta.</div>
              </div>
            </div>
            <div className='card'>
              <div className='ellipse'>
                <img src={roadmapEllipse4}/>
              </div>
              <div className='phaseContainer'>
                <div className='subtitle'>Phase4</div>
                <div className='title'>Growth</div>
                <div className='description'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit odio sagittis, ac senectus eta.</div>
              </div>
            </div>
          </div>
          <div className='schedule'>
            <img src={roadmap}/>
          </div>
        </div>
      </div>
      <div className='concept'>
          <div className='left' style={{backgroundImage:`url(${section2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <div className='imgContainer'>
              <img src={concept}></img>
            </div>
            <div className='imgContainer1'>
              <img src={concept1}/>
            </div>
          </div>
          <div className='right'>
            <div className='vector'>
              <img src={vector}/>
            </div>            
            <div className='title'>What’s a Dynamic NFT?</div>
            <div className='description'>Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.</div>
            <div className='button'>Learn more
              <div className='forward'>
                <ArrowForwardIcon/>
              </div>
            </div>
          </div>
      </div>
      <section id='counter'>
        <div className='counterContainer'>
          <div className='icon'>
            <img src={school}/>
          </div>
          <div className='number'>179</div>
          <div className='description'>student athletes</div>
        </div>
        <div className='counterContainer'>
          <div className='icon'>
            <img src={diamond}/>
          </div>
          <div className='number'>1M</div>
          <div className='description'>athletes statistics tracked</div>
        </div>
        <div className='counterContainer'>
          <div className='icon'>
            <img src={heart}/>
          </div>
          <div className='number'>240</div>
          <div className='description'>proud parents</div>
        </div>
      </section>
      <div className='join' style={{backgroundImage: `url(${section3})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='title'>Join a world of fun</div>
        <div className='description'>Sign up today to create your personalized student athlete NFT and start tracking your athletic performance!</div>
        <div className='button'>Sign Up Now</div>
      </div>
    </div>
  )
}
