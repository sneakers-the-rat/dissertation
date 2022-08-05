import React from 'react';
import {Markdown, Appear, Quote, Text, Link, Box} from 'spectacle';

import { Citation, Citations } from '../../components/typography.jsx';
import {PositionedHeading} from '../../components/basics.jsx';
import {FancyHeading} from '../../components/styled.jsx';
import SvgAnimator from '../../components/svg_animator';

import nsfnetmp4 from '../../img/nsfnet.mp4';
import nsfnetwebm from '../../img/nsfnet.webm';
import cloud from '../../img/cloud-01.svg';
import chair from '../../img/chair.svg';
import anime from 'animejs';

export const Infra = (
    <div title={"Deinfrastructuring"}>
        <PositionedHeading x={100} y={100} fontWeight={700}>Why is Science Like This?</PositionedHeading>
        <PositionedHeading x={600} y={250} fontStyle={"italic"}>Severe Digital Infrastructural Deficits</PositionedHeading>
        <Appear id={"surveillance-capitalism-appear"}>
        <PositionedHeading x={100} y={500} fontWeight={700}>Why do we have Infrastructural Deficits?</PositionedHeading>
        <PositionedHeading x={600} y={650} fontStyle={"italic"}>...the dominant mode of capitalism</PositionedHeading>
        </Appear>
    </div>
)

export const NSFNET = (
    <div title={"NSFNET"} style={{height:"100%"}}>
    <FancyHeading  fontWeight={700}>Infrastructures Past... NSFNET: 1985-1995</FancyHeading>
        <FancyHeading fontStyle={"normal"} fontSize={"50px"}>We spent ~$1.6 Billion in Public Money Creating the Internet, then ... Gave it Away</FancyHeading>
    <video controls loop  className={"video-slide"}>
        <source type={"video/webm"} src={nsfnetwebm}/>
        <source type={"video/webm"} src={nsfnetmp4}/>
    </video>
    <Citations><Citation
        title={"Visualizing the Early Internet"}
        author={"Donna Cox & Robert Patterson"}
        year={"1992"}
        link={"https://avl.ncsa.illinois.edu/project-archive/visualizing-the-early-internet"}
    /></Citations>
    </div>
)

export const Cloud = (
    <div title={"Creating the Cloud"}>
      <FancyHeading>Creating the Cloud</FancyHeading>
      <Box width={2/5} margin={'40px 40px'} >
        <Quote fontSize={"3em"} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={"italic"}>
"People were frightened of getting lost in it. You could follow links forever."
          <Text fontSize={"0.5em"}>Tim Berners-Lee (1998)
            <Link fontSize={"1em"}  href={"https://www.w3.org/DesignIssues/RDFnot.html"}>
              What The Semantic Web Can Represent
            </Link>
          </Text>
        </Quote>
      </Box>
      <Appear id={"blankappead"} stepIndex={1}></Appear>
<Appear id={"horowitz"} stepIndex={2}>
      <Box width={2/5} margin={'40px 40px'} position={"absolute"} top={"60%"} >
        <Quote fontSize={"3em"} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={"italic"}>
        “The Internet has yet to fulfill its promise of commercial success. Why? Because there is no business model.”
          <Text fontSize={"0.5em"}>Ed Horowitz, CEO of Viacom (1996)</Text>
        </Quote>
      </Box>
</Appear>
    <SvgAnimator
        svgUrl={cloud}
        steps={[
      [
        {
          targets: '#direct line',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: () => (anime.random(500, 1000)),
          delay: () => (anime.random(0, 500)),
          easing: 'easeInOutCirc',

        },
        {
          targets: '#direct polygon',
          opacity: [0, 1],
          duration: () => (anime.random(500, 1000)),
          delay: () => (anime.random(0, 500)),
          easing: 'easeInOutCirc',

        },

      ],
          [
            {
              targets: '#search *',
              opacity: [0, 1],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0, 500)),
              easing: 'easeInOutCirc',

            },
            {
              targets: '#direct line',
              strokeDashoffset: [0, anime.setDashoffset],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0, 500)),
              easing: 'easeInOutCirc',

            },
            {
              targets: '#direct polygon',
              opacity: [1, 0],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0, 500)),
              easing: 'easeInOutCirc',

            },
          ],
          [
            {
              targets: '#Data *',
              opacity: [0, 1],
              duration: () => (anime.random(500, 1000)),
              delay: () => (anime.random(0, 500)),
              easing: 'easeInOutCirc',

            },
          ]
]}
id={'cloud-svg'}/>
      </div>
);

export const KnowledgeOrganization = (
    <div title={"Knowledge Disorganization"} style={{height:"100%"}}>
      <FancyHeading  fontWeight={700}>Platforms Create Their Own Need</FancyHeading>
      <FancyHeading fontStyle={"normal"} fontSize={"50px"}>Knowledge Disorganization is Profitable:</FancyHeading>
      <FancyHeading fontStyle={"normal"} fontSize={"50px"}>
        Publish as many papers as possible,<br/>Control discovery<br/>Turn disciplines into prestige fiefdoms
      </FancyHeading>
      <Box width={2/3} marginTop={"50px"} marginLeft={"auto"} marginRight={"auto"} >
        <Quote fontSize={"3em"} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={"italic"}>
          Elsevier looks to enhance quality by building on its premium brands and <strong>grow article volume through new journal launches, the expansion of open access journals,</strong> [...] and add value to core platforms by implementing capabilities such as <strong>advanced recommendations on ScienceDirect</strong> and social collaboration through reference manager and collaboration tool Mendeley.<Text fontSize={"0.5em"}>
          RELX (2019)
            <Link fontSize={"1em"}  href={"https://www.relx.com/~/media/Files/R/RELX-Group/documents/reports/annual-reports/2019-annual-report.pdf"}>
              Annual Shareholders Report
            </Link>
          </Text>
        </Quote>
      </Box>
    </div>
)
