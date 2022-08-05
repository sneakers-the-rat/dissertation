import React from 'react';
import { Markdown, Image } from 'spectacle';
import {FancyHeading} from '../../components/styled.jsx';
import {PositionedHeading} from '../../components/basics.jsx';

import { Citation, Citations } from '../../components/typography.jsx';
import anime from 'animejs'
import SvgAnimator from '../../components/svg_animator';

import {distance} from '../../components/utils';

import relx from '../../img/personaldata.png';
import tracking from '../../img/brembs_tracking.png';
import overview from '../../img/infra-overview-01.svg'

const RELX = (
<div title={"RELX"}>
    <FancyHeading>
        Your Friendly Neighborhood Publisher...
    </FancyHeading>
    <Image src={relx} style={{height:"80%", position:"relative", margin:"auto", display:"block"}}/>
</div>
)

const Tracking = (
   <div>
       <FancyHeading
            fontWeight={700}
            fontStyle={"normal"}
            fontSize={"64px"}
       >
           Process Monopolization, The Logic of Surveillance Capitalism</FancyHeading>
       <FancyHeading
           fontSize={"42px"}
       >
           Platforms & Services are a means of capturing data. More platforms = More data = More money.</FancyHeading>

       <Image src={tracking} style={{height:"100%", position:"relative", margin:"auto", display:"block"}}/>
       <Citations>
           <Citation
           author={"Björn Brembs"}
           year={"2021"}
           title={"Algorithmic Employment Decisions in Academia?"}
           link={"http://bjoern.brembs.net/2021/09/algorithmic-employment-decisions-in-academia/"}
           />
       </Citations>
   </div>
)

const Harms = (
  <Markdown title={"Harms"}>
  {`
  # Harms
  
  - (this regime defines the operation of science)
  `}
  </Markdown>
)

const InfraOverview = (
<div title={"Infrastructure Overview"}>
    <SvgAnimator
        svgUrl={overview}
        steps={[
            [
                {targets:'#rect-data',
                    width:[0,750]},
                {
                    targets: "#infrastructure-overview #data *",
                    strokeDashoffset: {
                        value: [anime.setDashoffset, 0],
                        duration: 500
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 100
                    },
                },
                {
                    targets: '#infrastructure-overview '+'#data-sparkles *',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    duration: () => (anime.random(2000, 4000)),
                    delay: function(el){
                        let dist = distance(el.getBBox(), {x:981, y:782})*5;
                        return dist;
                    },
                    easing: 'easeInOutCirc',
                    direction: 'alternate',
                    loop: true
                },
            ],
            [
                {targets:'#rect-tools',
                    width:[0,750]},
                {
                    targets: "#infrastructure-overview #tools *",
                    strokeDashoffset: {
                        value: [anime.setDashoffset, 0],
                        duration: 500
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 100
                    }
                },
                {
                    targets: '#infrastructure-overview '+'#tool-sparkles *',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    duration: () => (anime.random(1000, 4000)),
                    delay: () => (anime.random(1000, 2000)),
                    easing: 'easeInOutQuad',
                    direction: 'alternate',
                    loop: true
                },
                {
                    targets: '#infrastructure-overview '+'#analysis-sparkles *',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    duration: () => (anime.random(1000, 3000)),
                    delay: () => (anime.random(1000, 3000)),
                    easing: 'easeInOutQuad',
                    direction: 'alternate',
                    loop: true
                }
            ],
            [
                {targets:'#rect-knowledge',
                    width:[0,750]},
                {
                    targets: "#infrastructure-overview #knowledge *",
                    strokeDashoffset: {
                        value: [anime.setDashoffset, 0],
                        duration: 500
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 100
                    }
                },
                {
                    targets: '#infrastructure-overview '+'#knowledge-sparkles *',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    duration: () => (anime.random(1000, 4000)),
                    delay: function(el){
                        let dist = distance(el.getBBox(), {x:981, y:250})*5;
                        return dist;
                    },
                    easing: 'easeInOutCirc',
                    direction: 'alternate',
                    loop: true
                }
            ]
        ]}
        id={'infrastructure-overview'}
    />

<PositionedHeading light={false}
                   id={'overview-header'}
                   y={20} right={20}
                   headerProps={{fontWeight:700, fontSize:70}}
                   align={"right"}>
    A Case For</PositionedHeading>
<PositionedHeading light={false}
                   id={'overview-header'}
                   y={100} right={20} align={"right"}
                   headerProps={{fontSize:80}}>
    Decentralized<br/>Infrastructure</PositionedHeading>


<PositionedHeading
    light={true}  textAlign={"left"}
    id={'overview-data'} y={25} x={40} fontSize={50} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={'italic'}>
    Communication & <br/> Governance
</PositionedHeading>

<PositionedHeading
    light={true} id={'overview-knowledge'} y={250} x={40} fontWeight={700}>
    Knowledge
</PositionedHeading>

<PositionedHeading
    light={true} textAlign={"left"}  id={'overview-data'} y={390} x={40} fontSize={50} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={'italic'}>
    Analytical & <br/> Experimental <br/> Frameworks
</PositionedHeading>


<PositionedHeading
    light={true} textAlign={"left"}  id={'overview-tools'} y={620} x={40} fontWeight={700}>
    Tools
</PositionedHeading>

<PositionedHeading
    light={true} textAlign={"left"} id={'overview-data'} y={750} x={40} fontSize={50} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={'italic'}>
    Peer-To-Peer<br/>Federated Linked Data
</PositionedHeading>

<PositionedHeading
    light={true} id={'overview-data'} y={970} x={40} fontWeight={700}>
    Data
</PositionedHeading>

</div>
)

const Slides = [
  RELX,
    Tracking,
    Harms,
    InfraOverview
]

export default Slides

// Transition: why now? The contradictions of our infrastructural systems are so massive
// and there is also a convergence of technologies that make building an alternative really possible



