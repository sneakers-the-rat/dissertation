import React from 'react';
import {Markdown} from 'spectacle'
import SvgAnimator from '../../components/svg_animator';
import overview from '../../img/infra-overview-01.svg';
import anime from 'animejs';
import {distance} from '../../components/utils';
import {PositionedHeading} from '../../components/basics.jsx';


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
  <Markdown title={"Integration"}>
  {`
  # Design Principle - Integration, not Innovation!
  
  - Frameworks that allow us to put existing work in a common space
  `}
  </Markdown>
)

const Pipelines = (
  <Markdown title={"Pipelines"}>
  {`
  # Pipelines
  
  - Import from infrastructure-presentation
  - Popup with example of how to do this with LD
  `}
  </Markdown>
)



const Slides = [
  InfraOverview,
    Integration,
  Pipelines
]

export default Slides
