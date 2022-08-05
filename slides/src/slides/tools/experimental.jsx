import React from 'react';
import {Markdown, Heading, Image, Box} from 'spectacle';
import topologies from '../../img/topologies.png';
import SvgAnimator from '../../components/svg_animator';
import anime from 'animejs';
import Parallax from '../../img/plax-01.svg';
import {distance} from '../../components/utils';
import Autopilot from '../../img/whole_system_black.png'
import subject from '../../img/subject-01.png'
import overview from '../../img/schematic-diagram-01.svg';

const Parallaxin = (
<div title={"Parallaxin"}>
    <SvgAnimator id={'autopilot-parallax'} svgUrl={Parallax}
                 steps={[
                   [
                     {
                       targets:'#autopilot-parallax #Layer_1 *',
                       opacity: [0,1],
                       strokeDashoffset: [anime.setDashoffset, 0],
                       duration: () => (anime.random(1000, 3000)),
                       delay: function(el){
                         let dist = (distance(el.getBBox(), {x:325, y:267})*5)+anime.random(-1000,1000);
                         return dist;
                       }
                     }
                   ],
                   [
                     {
                       targets: "#autopilot-parallax #cameras",
                       opacity: [0,1],
                       duration: 500,
                       easing: "easeInOutQuad"
                     }
                   ],
                   [
                     {
                       targets: "#autopilot-parallax #custom",
                       opacity: [0,1],
                       duration: 500,
                       easing: "easeInOutQuad"
                     }
                   ],
                   [
                     {
                       targets: "#autopilot-parallax #external",
                       opacity: [0,1],
                       duration: 500,
                       easing: "easeInOutQuad"
                     }
                   ],
                   [
                     {
                       targets: "#autopilot-parallax #imu",
                       opacity: [0,1],
                       duration: 500,
                       easing: "easeInOutQuad"
                     }
                   ]
                 ]}
    />
<Box height={"40px"}></Box>
<Heading fontFamily={"Source Serif Pro"} fontWeight={200} color={"tools"} fontSize={100}
         fontStyle={"italic"} textAlign={"left"}>
  p a r a l l a x i n</Heading>
</div>
)

const Autopilot_Overview = (
    <div title={"Autopilot Overview"}>
      <Heading fontFamily={"Source Serif Pro"} fontWeight={200} fontSize={100}
                        fontStyle={"italic"} textAlign={"left"}>Autopilot: Distributed Behavior</Heading>
    <Image src={Autopilot} width={"100%"} position={"relative"}>

    </Image>
    </div>
)

const Topologies = (
    <div title={"Topologies"}>
    <div className={'blankslide'}></div>

<Heading fontSize={"90pt"} style={{color:"#ffffff"}} caps textAlign="left" fontFamily={"Source Serif Pro"}>
  Multi-Agent <span style={{'color':'#ff3030'}}>Topologies</span></Heading>
<Image src={topologies} style={{objectFit:'contain', margin:'auto', display:"block"}} width="90%" />
    </div>
)



const DataModels = (
    <div title={"Autopilot Overview"}>
      <Heading fontFamily={"Source Serif Pro"} fontWeight={200} fontSize={60}
               fontStyle={"italic"} textAlign={"left"}>
        Clean Data & Full Provenance at Acquisition: Ripe for the Linkin'
      </Heading>
      <Image src={subject} width={"100%"} position={"absolute"} width={"100%"} height={"100%"} top={0} left={0}>

      </Image>
    </div>
)

const Summary = (
    <div>
      <SvgAnimator
          svgUrl={overview}
          steps = {[
              [

            {
              targets:'#schematic-2 #communication *',
              opacity: [0,1],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
            {
              targets:'#schematic-2 #knowledge *',
              opacity: [0,1],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            }]]}
          id={'schematic-2'}
      />
    </div>
)



const Slides = [
  Parallaxin, Autopilot_Overview, Topologies, DataModels, Summary
    ]

export default Slides
