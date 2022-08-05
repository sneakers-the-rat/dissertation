import React from 'react';
import {Box, FlexBox, ListItem, Markdown, UnorderedList} from 'spectacle';
import SvgAnimator from '../../components/svg_animator';
import overview from '../../img/infra-overview-01.svg';
import anime from 'animejs';
import {distance} from '../../components/utils';
import {PositionedHeading} from '../../components/basics.jsx';
import {PositionedCard} from '../../components/basiccard';

import Analysis1 from '../../img/analysis_1-01.svg';
import {FancyHeading} from '../../components/styled.jsx';


const InfraOverview = (
    <div title={"Tools"}>
      <SvgAnimator
          svgUrl={overview}
          steps={[
            [
              {targets:'#rect-data',
                fill:["#2f0987", "#333333"],
                easing:"easeInOutQuad",
                duration: 500},
              {targets:"#infrastructure-overview2 #data *",
                stroke: ["#2f0987", "#333333"],
                easing:"easeInOutQuad"
              },
              {targets:'#rect-tools',
                width:[0,750]},
              {targets:"#infrastructure-overview2 #tools *",
                strokeDashoffset: [anime.setDashoffset, 0]
              },
              {targets:'#rect-knowledge',
                opacity:[0,0]},
              {targets:"#infrastructure-overview2 #knowledge *",
                opacity: [0,0]
              }
            ]
          ]}
          id={'infrastructure-overview2'}
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


const Integration = (
    <div backgroundColor={"#CF005D"} style={{height:"100%"}} title={"Swarm Principle: Integration"}>
      <FancyHeading color={"#eee"}>It's time for another....</FancyHeading>
      <FlexBox margin={"100px auto auto auto"} flexDirection={"column"}>
        <Box margin={"auto"}>
          <FancyHeading fontStyle={"normal"} fontWeight={800} color={"#ffffff"} fontSize={"100px"}>
            Swarm Principle:
          </FancyHeading>
          <FancyHeading fontStyle={"normal"} fontWeight={800} color={"#ffffff"} fontSize={"100px"}>Integrate, Don't Innovate!</FancyHeading>
        </Box>
        <UnorderedList color={"#ffffff"}>
          <ListItem><FancyHeading color={"#eee"}>
            Lonely No More! Build together, Organize together!
          </FancyHeading></ListItem>
          <ListItem><FancyHeading color={"#eee"}>
            Emphasizes designing a larger ecosystem
          </FancyHeading></ListItem>
        </UnorderedList>
      </FlexBox>
    </div>
)

const Pipelines = (

<div title={"Analysis Pipelines"}>
    <SvgAnimator
svgUrl={Analysis1}
steps={[
      [
        {targets:'#analysis-1 #scribble>path',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 2000,
          delay: 0,
          easing: 'easeInOutCirc'},
        {targets: "#analysis-1 #scribble #analysis *",
          opacity:[0,1],
          duration: 1000,
          delay: 1000,
          easing: 'easeInOutQuad'
        },
        {targets:'#analysis-1 #scribble>polygon',
          width: [0, 1],
          duration: 500,
          delay: 0,
          easing: 'easeInOutCirc'}
      ],
  [
      {targets: "#analysis-1 #scribble #analysis *",
        opacity:[1,0],
        duration: 500,
        easing: 'easeInOutQuad'
      },
{targets:'#analysis-1 #scribble>path',
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 500,
    delay: 0,
    easing: 'easeInOutCirc'},
{targets:'#analysis-1 #modules *',
    strokeDashoffset: {
  value:[anime.setDashoffset, 0],
      duration: anime.random(500,1000),
      delay: anime.random(500,1500),
      easing: 'easeInOutCirc'
},
  opacity: {
    value: [0, 1],
        delay:500,
        duration: 500,
        easing: 'easeInOutQuad'
  }
},
{targets:'#analysis-1 #module *',
    strokeDashoffset: {
  value:[anime.setDashoffset, 0],
      duration: anime.random(500,1000),
      delay: anime.random(500,1500),
      easing: 'easeInOutCirc'
},
  opacity: {
    value: [0, 1],
        delay:500,
        duration: 500,
        easing: 'easeInOutQuad'
  }},
{
  targets: "#analysis-modular-card",
      opacity: [0,1],
    easing: 'easeInOutQuad',
    duration:500
}
],
[
  {targets:'#analysis-1 #params *',
    strokeDashoffset: {
      value:[anime.setDashoffset, 0],
      duration: anime.random(500,1000),
      delay: anime.random(500,1500),
      easing: 'easeInOutCirc'
    },
    opacity: {
      value: [0, 1],
      delay:500,
      duration: 500,
      easing: 'easeInOutQuad'
    }
  },
  {targets: "#analysis-1 #module",
    scale:[1,1.5],
    duration:500,
    delay: 500},
  {
    targets: "#analysis-replicable-card",
    opacity: [0,1],
    easing: 'easeInOutQuad',
    duration:500
  }],
    [
      {targets:'#analysis-1 #tools *',
        strokeDashoffset: {
          value:[anime.setDashoffset, 0],
          duration: anime.random(500,1000),
          delay: anime.random(500,1500),
          easing: 'easeInOutCirc'
        },
        opacity: {
          value: [0, 1],
          delay:500,
          duration: 500,
          easing: 'easeInOutQuad'
        }},
      {
        targets: "#analysis-hooked-card",
        opacity: [0,1],
        easing: 'easeInOutQuad',
        duration:500
      }
    ],
    [
      {targets:'#analysis-1 #container *',
        strokeDashoffset: {
          value:[anime.setDashoffset, 0],
          duration: anime.random(500,1000),
          delay: anime.random(500,1500),
          easing: 'easeInOutCirc'
        },
        opacity: {
          value: [0, 1],
          delay:500,
          duration: 500,
          easing: 'easeInOutQuad'
        }
      },
      {targets: "#analysis-1 #module",
        scale:[1.5, 1],
        duration:500,
        delay: 0},
      {
        targets: "#analysis-containerized-card",
        opacity: [0,1],
        easing: 'easeInOutQuad',
        duration:500
      }],
    []
]}
id={'analysis-1'}
/>


<PositionedCard
    id={'analysis-modular-card'} x={400} y={725} width={1/4}
    title={"Modular"}
    extraClass={'noshadow'}
    opacity={0.4}
    body={"Break analyses into reusable, composable components"}
    appearStep={2}
/>


<PositionedCard
    id={'analysis-replicable-card'} x={150} y={50} width={1/4}
    title={"Replicable"}
    extraClass={'noshadow'}
    opacity={0.4}
    body={"Portable configuration separated from code"}
    appearStep={3}
/>

<PositionedCard
    id={'analysis-hooked-card'} x={1250} y={725} width={1/4}
    title={"Pluggable"}
    extraClass={'noshadow'}
    opacity={0.4}
    body={"Clear hooks for toolbuilders to integrate their work as plugins"}
    appearStep={4}
/>


<PositionedCard
    id={'analysis-containerized-card'} x={1000} y={50} width={7/24}
    title={"Containerized"}
    extraClass={'noshadow'}
    opacity={0.4}
    body={"Deploy and run on any computer(s) by containerizing dependencies"}
    appearStep={5}
/>
</div>
)



const Slides = [
  InfraOverview,
    Integration,
  Pipelines
]

export default Slides
