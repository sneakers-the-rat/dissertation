import React from 'react';
import {Markdown, Heading, Appear, Image, FlexBox, Text} from 'spectacle';
import SvgAnimator from '../../components/svg_animator';
import chair from '../../img/chair.svg';

import {FancyHeading} from '../../components/styled.jsx';
import {PositionedHeading} from '../../components/basics.jsx';
import baby_rumbly from '../../img/baby_rumbly.png';
// import soproud from '../../img/so_proud-01.png';
import soundwave from '../../img/soumdwave.png';
import vot from '../../img/vot.png';
import qb from '../../img/cuebased-01.svg';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Icon } from '@mui/material';

import anime from 'animejs';

export const HaskinsModel = (
    <div title={"Cue-Based Phonetic Models"} className={"fullslide"}>
      <FancyHeading fontWeight={700} fontStyle={"normal"}>
        What is a Phoneme?
      </FancyHeading>
      <FancyHeading>
        "Cue-Based" Models
      </FancyHeading>
      <Image position={"absolute"} top={0} src={qb}/>


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
      <Appear stepIndex={1}>
        <PositionedHeading x={550} y={250}>
          2 Legs = Sign (?)
        </PositionedHeading>
      </Appear>
      <Appear stepIndex={2}>
        <PositionedHeading x={200} y={470}>
          6 Legs = Bench.
        </PositionedHeading>
      </Appear>
      <Appear stepIndex={3}>
      <PositionedHeading x={1400} y={400}>
        Rumbly = Chair
      </PositionedHeading>
      <Image src={baby_rumbly} width={"700px"} left={"1200px"} top={"500px"} position={"absolute"}/>
        {/*<Image src={soproud} position={"absolute"} top={0} left={-100} zIndex={999}></Image>*/}
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
    <Markdown>
      {`
      # Inverse Model
      
      - This isn't the problem that the auditory system faces!
      - It needs to *discover* the features
      - We actually don't *care* about what the features are, we want to know how the auditory system perceives phonemes
      - If we prespecify the features, then we are studying the *features* not the problem
      - We need to preserve the complexity, (figure of inverting the model)
      `}
    </Markdown>
)

const Slides = [
    HaskinsModel,
    Chair,
    InverseModel
]

export default Slides

