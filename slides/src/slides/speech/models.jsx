import React from 'react';
import {Markdown, Heading, Appear, Image, FlexBox, Text, Box, Quote, Link} from 'spectacle';
import SvgAnimator from '../../components/svg_animator';
import chair from '../../img/chair.svg';

import {Citations, Citation} from '../../components/typography.jsx';

import {FancyHeading} from '../../components/styled.jsx';
import {PositionedHeading} from '../../components/basics.jsx';
import baby_rumbly from '../../img/baby_rumbly.png';
import soproud from '../../img/so_proud-01.png';
import qb from '../../img/cuebased-01.svg';
import mtf from '../../img/mtf.png';
import naturalspeech from '../../img/naturalspeech-01.svg';

import mtf3hz from '../../sound/mtf_3Hz.mp3';
import mtf12hz from '../../sound/mtf_12hz.mp3';
import mtf4cyc from '../../sound/mtf_4cyc.mp3';
import mtf05cyc from '../../sound/mtf_05cyc.mp3';
import mtforig from '../../sound/mtf_orig.mp3';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Icon } from '@mui/material';

import anime from 'animejs';

export const HaskinsModel = (
    <div title={"Cue-Based Phonetic Models"}>
      <FancyHeading fontWeight={700} fontStyle={"normal"}>
        What is a Phoneme?
      </FancyHeading>
      <FancyHeading>
        "Cue-Based" Models
      </FancyHeading>
      <Image id={"cuebased"} position={"absolute"} top={0} left={0} src={qb} width={1920} height={1080}/>


    </div>
)

export const NoCues = (
    <div>
      <FlexBox>

      <Box width={2/5} margin={'40px 40px'} >
        <Quote fontSize={"3em"} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={"italic"}>
          "Question: Which acoustic elements are essential for the perception of speech?"<br/>
          "Answer: None"<br/>
          <Text fontSize={"0.5em"}>Philip Rubin, Robert Remez, Jennifer Pardo of
            <Link fontSize={"1em"}  href={"https://web.archive.org/web/20200809223413/http://www.haskins.yale.edu/featured/sws/sws.html"}>
              Haskins Labs
            </Link>
          </Text>
        </Quote>
      </Box>
      <FancyHeading fontWeight={800} fontStyle={"normal"}>
        Uh oh.
      </FancyHeading>
      </FlexBox>
      <Box margin={"auto"}>
        <Image style={{display: 'block', margin:"auto"}} src={mtf}></Image>
      </Box>
      <audio controls style={{position:"absolute", top:"50%", right:"20px"}}>
        <source src={mtf3hz} type={"audio/mpeg"}/>
      </audio>
      <audio controls style={{position:"absolute", top:"75%", right:"20px"}}>
        <source src={mtf12hz} type={"audio/mpeg"}/>
      </audio>
      <audio controls style={{position:"absolute", top:"50%", left:"20px"}}>
        <source src={mtf05cyc} type={"audio/mpeg"}/>
      </audio>
      <audio controls style={{position:"absolute", top:"75%", left:"20px"}}>
        <source src={mtf4cyc} type={"audio/mpeg"}/>
      </audio>
      <Citations>
      <Citation author={"Elliott & Theunissen"}
      title={"The Modulation transfer function for speech intelligibility"}
      link={"https://doi.org/10.1371/journal.pcbi.1000302"}
      year={"2009"}/>
      </Citations>

    </div>
)


export const Chair = (
    <div title={"Family Resemblances"}>
      <FancyHeading fontWeight={700} fontStyle={"normal"}>
        Family Resemblances
      </FancyHeading>
      <FancyHeading>
        What is a chair?
      </FancyHeading>
      <PositionedHeading x={430} y={360}>
        4 Legs = Chair
      </PositionedHeading>
      <Appear stepIndex={1} id={"chair-sign"}>
        <PositionedHeading x={550} y={250}>
          2 Legs = Sign (?)
        </PositionedHeading>
      </Appear>
      <Appear stepIndex={2} id={"chair-bench"}>
        <PositionedHeading x={200} y={470}>
          6 Legs = Bench.
        </PositionedHeading>
      </Appear>
      <Appear stepIndex={3} id={"Rumbly"}>
        <PositionedHeading x={1400} y={400}>
          Rumbly = Chair
        </PositionedHeading>
        <Image src={baby_rumbly} width={"700px"} left={"1200px"} top={"500px"} position={"absolute"}/>
        </Appear>
      <Appear id={"soproud"}>
        <Image src={soproud} position={"absolute"} top={0} left={-100} width={"100%"} height={"100%"} zIndex={999}></Image>
      </Appear>

      <SvgAnimator
          svgUrl={chair}
          steps={[
            [
              {
                targets: '#chair *',
                strokeDashoffset: [0, anime.setDashoffset],
                duration: () => (anime.random(500, 1000)),
                delay: () => (anime.random(0, 500)),
                easing: 'easeInOutCirc',

              },
              {
                targets: '#sign .remove',
                strokeDashoffset: [anime.setDashoffset,0],
                duration: () => (anime.random(500, 1000)),
                delay: () => (anime.random(0, 500)),
                easing: 'easeInOutCirc',

              },
            ],
            [
              {
                targets: '#bench *',
                strokeDashoffset: [anime.setDashoffset, 0],
                duration: () => (anime.random(500, 1000)),
                delay: () => (anime.random(0, 500)),
                easing: 'easeInOutCirc',

              },
              {
                targets: '#chair *:not(.remove)',
                strokeDashoffset: [anime.setDashoffset,0],
                duration: () => (anime.random(500, 1000)),
                delay: () => (anime.random(0, 500)),
                easing: 'easeInOutCirc',

              },
              {
                targets: '#sign .remove',
                strokeDashoffset: [0, anime.setDashoffset],
                duration: () => (anime.random(500, 1000)),
                delay: () => (anime.random(0, 500)),
                easing: 'easeInOutCirc',

              },
            ]
          ]}
          id={'chair-1'}
      />
    </div>
);


export const InverseModel = (
    <div title={"Natural Speech Training"}>
      <PositionedHeading x={50} y={20}>Cue Based Models Isolate Individual Features...</PositionedHeading>

      <PositionedHeading x={50} y={325}>But the Problem is Backwards!</PositionedHeading>

      <PositionedHeading x={50} y={900} fontWeight={700}>How does the auditory system learn to adapt to many simultaneous imperfect cues?</PositionedHeading>
      <Image style={{top:"0"}} position={"absolute"} src={naturalspeech}></Image>
    </div>
)

const Slides = [
    HaskinsModel,
    NoCues,
    Chair,
    InverseModel
]

export default Slides

