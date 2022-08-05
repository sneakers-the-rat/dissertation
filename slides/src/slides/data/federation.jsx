import React from 'react';
import {Markdown, Heading, Image} from 'spectacle'
import SvgAnimator from '../../components/svg_animator';
import overview from '../../img/schematic-diagram-01.svg';
import {SentimentVeryDissatisfied} from '@mui/icons-material';
import federation from '../../img/ld_federation-01.png';
import anime from 'animejs';
import {distance} from '../../components/utils';


const Federation = (
   <div title={"P2P Federation"}>
     <Heading>P2P Federation: LD Can Describe Actions!</Heading>\
     <Image src={federation} position={"absolute"} width={"100%"} height={"100%"} top={0} left={0}></Image>
   </div>
)

const Summary = (
    <div>
      <SvgAnimator
        svgUrl={overview}
        steps = {[
          [
            {
              targets:'#schematic-1 #data *',
              opacity: [0,1],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
            {
              targets:'#schematic-1 #nwb *',
              opacity: [0,1],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
            {
              targets:'#schematic-1 #data_x5F_sharing *',
              opacity: [0,1],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
            {
              targets:'#schematic-1 #communication',
              opacity: [0,0],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
            {
              targets:'#schematic-1 #communication',
              opacity: [0,0],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
            {
              targets:'#schematic-1 #knowledge',
              opacity: [0,0],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            }
          ],
          [
            {
              targets:'#schematic-1 #Experiment *',
              opacity: [0,1],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
            {
              targets:'#schematic-1 #pipline *',
              opacity: [0,1],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
            {
              targets:'#schematic-1 #technical_x5F_collab *',
              opacity: [0,1],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
            {
              targets:'#schematic-1 #autopilot *',
              opacity: [0,1],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0,1000))
            },
          ]
        ]}
        id={'schematic-1'}
        />
    </div>
)


const Slides = [
    Federation,
    Summary
]

export default Slides
