import React from 'react'
import {Box, FlexBox, ListItem, Markdown, UnorderedList} from 'spectacle';
import SvgAnimator from '../../components/svg_animator';
import overview from '../../img/infra-overview-01.svg';
import anime from 'animejs';
import {PositionedHeading} from '../../components/basics.jsx';
import {FancyHeading} from '../../components/styled.jsx';
import {FeaturedPlayList} from '@mui/icons-material';


const InfraOverview = (
    <div title={"Knowledge"}>
      <SvgAnimator
          svgUrl={overview}
          steps={[
            [
              {targets:'#rect-data',
                fill:["#2f0987", "#333333"],
                easing:"easeInOutQuad",
                duration: 500},
              {targets:"#infrastructure-overview3 #data *",
                stroke: ["#2f0987", "#333333"],
                easing:"easeInOutQuad"
              },
              {targets:'#rect-tools',
              fill:["#CF005D", "#333333"],
              easing:"easeInOutQuad",
              duration: 500},
              {targets:"#infrastructure-overview3 #tools *",
                stroke: ["#2f0987", "#333333"],
                easing:"easeInOutQuad"
              },
              {targets:'#rect-knowledge',
                width:[0,750]},
              {targets:"#infrastructure-overview3 #knowledge *",
                strokeDashoffset: [anime.setDashoffset, 0]
              }
            ]
          ]}
          id={'infrastructure-overview3'}
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

const Social = (
    <div backgroundColor={"#45B6D9"} style={{height:"100%"}}>
      <FancyHeading color={"#eee"}>One more...</FancyHeading>
      <FlexBox margin={"100px auto auto auto"} flexDirection={"column"}>
        <Box margin={"auto"}>
          <FancyHeading fontStyle={"normal"} fontWeight={800} color={"#ffffff"} fontSize={"100px"}>
            Swarm Principle:
          </FancyHeading>
          <FancyHeading fontStyle={"normal"} fontWeight={800} color={"#ffffff"} fontSize={"100px"}>Infrastructure is Social!</FancyHeading>
        </Box>
        <UnorderedList color={"#ffffff"}>
          <ListItem><FancyHeading color={"#eee"}>
            Infrastructure should feel like *Ours*
          </FancyHeading></ListItem>
          <ListItem><FancyHeading color={"#eee"}>
            No Gods, No Masters, No BDFLs!
          </FancyHeading></ListItem>
        </UnorderedList>
      </FlexBox>
    </div>
)

const Examples = (
    <div title={"Two Archives..."}>
      <FancyHeading>Lessons from Pirates & Early Wikis</FancyHeading>
      <FancyHeading fontSize={30}>*Omitted due to time, see the diss!</FancyHeading>
      {/*<FlexBox width={"100%"} marginTop={"50px"}>*/}
      {/*  <FlexBox  width={"100%"} flexDirection={"column"}>*/}
      {/*    <FancyHeading>What.cd</FancyHeading>*/}
      {/*    <UnorderedList>*/}
      {/*      <ListItem>The largest known collection of free music in history</ListItem>*/}
      {/*      <ListItem>No names, No profit, Highly Illegal ... So Why?</ListItem>*/}
      {/*      <ListItem>Extensive forums attached to the archive</ListItem>*/}
      {/*      <ListItem>Reward curation: ratios & bounty</ListItem>*/}
      {/*      <ListItem>Community Moderation</ListItem>*/}
      {/*      <ListItem>Felt Like Home!</ListItem>*/}
      {/*    </UnorderedList>*/}
      {/*  </FlexBox>*/}
      {/*  <FlexBox width={"100%"} flexDirection={"column"}>*/}
      {/*    <FancyHeading>Meatball Wiki</FancyHeading>*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}

    </div>
)


const Slides = [
InfraOverview,Social, Examples
]

export default Slides
