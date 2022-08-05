import React from 'react';

import {Box, Quote, Heading, Markdown, FlexBox, Text, UnorderedList, ListItem} from 'spectacle'
import SvgAnimator from '../../components/svg_animator';
import SemanticEg from '../../img/semantic_1-01.svg';
import {SchemaContainer, SchemaTree} from '../../components/schema';
import DataFormat from '../../img/schema/nwb_tree_noschemas.json';
import HDF from '../../img/schema/hdf.json';
import OtherFormat from '../../img/schema/otherformat.json';
import {FancyHeading} from '../../components/styled.jsx';

const Triplets = (
<div style={{display:"flex", flexDirection:"column", height:"100%"}}>
  <Heading>Linked Data: Triplet Links</Heading>
  <Box width={2/3} marginRight={'auto'} marginLeft={'auto'}>
    <Quote  fontSize={"2em"} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={"italic"}>
      The Semantic Web is an attempt, largely, to <strong style={{fontWeight:700}}>map large quantities of
      existing data onto a common language</strong> so that the data can be analyzed
      in ways never dreamed of by its creators.<br/>
      - https://www.w3.org/DesignIssues/Principles.html
    </Quote>
  </Box>

  <Box margin={"auto"}>
    <Heading>Subject :: Predicate :: Object</Heading>
    <Heading fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={"italic"}>Person :: HasName :: Jonny</Heading>
  </Box>
</div>
)

const Rumbly = (
<div>
    <FlexBox flexDirection={'row'} justifyContent={'flex-start'} marginLeft={"50px"}>
      <Text fontFamily={'monospace'} fontSize={"60pt"} fontWeight={'bold'} style={{marginRight:"50px", color: "#ff0000", filter: "drop-shadow(30px 30px 0px #CCCCCC"}}>
        A 2-real example
      </Text>
      <FlexBox flexDirection={'column'} alignItems={'flex-start'}>
        <Text id='semantic-eg-description-1'  fontSize={"40pt"} fontFamily={"headerSerif"}>"Rumbly gets lonely during the day"</Text>
        <Text id='semantic-eg-description-2'  fontSize={"40pt"} fontFamily={"headerSerif"}>"jk she gets played with so much"</Text>
      </FlexBox>
    </FlexBox>

<SvgAnimator
    stepIndex={1}
    id={'semantic-example'}
    svgUrl={SemanticEg}
    steps={
      [
        [
          {
            targets:"#semantic-example #jonny",
            opacity:[0,1],
            easing: 'easeOutQuad'
          }
        ],
        [
          {
            targets:"#semantic-example #job",
            opacity:[0,1],
            easing: 'easeOutQuad'
          }
        ],
        [
          {
            targets:"#semantic-example #cat",
            opacity:[0,1],
            easing: 'easeOutQuad'
          }
        ],
        [
          {
            targets:"#semantic-eg-description-1",
            opacity:[0,1],
            easing: 'easeOutQuad'
          }
        ],
        [
          {
            targets:"#semantic-example #coop",
            opacity:[0,1],
            easing: 'easeOutQuad'
          },
          {
            targets:"#semantic-eg-description-2",
            opacity:[0,1],
            easing: 'easeOutQuad'
          }
        ]
      ]
    }
/>
</div>
)

const MultiLD = (
    <div title={"Heterogeneous Links"} id={"ld-example"}>
      <FancyHeading fontStyle={"normal"} fontWeight={700}>Linked Data Can Be uh... Linked</FancyHeading>
      <FancyHeading fontSize={"50px"}>Triplet Links Bridge Formats & Modalities</FancyHeading>
      <SchemaContainer>
        <SchemaTree x={150} y={400} width={166*10} height={50} fillDark={"#2f0987"} fillLight={"#784ed2"} srcJson={DataFormat}/>
        <SchemaTree x={150} y={750} width={166*10} height={30} fillDark={"#CF005D"} fillLight={"#ef59a4"} srcJson={HDF}/>
        <SchemaTree x={200} y={225} width={166*10} height={30} fillDark={"#2a66c3"} fillLight={"#45B6D9"} srcJson={OtherFormat}/>
      </SchemaContainer>
    </div>
)

const Heterogeneity = (
<div backgroundColor={"#2f0987"} style={{height:"100%"}}>
  <FancyHeading color={"#eee"}>So we should make all the data the same format, right?</FancyHeading>
  <FancyHeading color={"#eee"}>...not so fast!</FancyHeading>
  <FlexBox margin={"100px auto auto auto"} flexDirection={"column"}>
    <Box margin={"auto"}>
    <FancyHeading fontStyle={"normal"} fontWeight={800} color={"#ffffff"} fontSize={"100px"}>
      Swarm Principle:
    </FancyHeading>
      <FancyHeading fontStyle={"normal"} fontWeight={800} color={"#ffffff"} fontSize={"100px"}>Embrace Heterogeneity</FancyHeading>
    </Box>
    <UnorderedList color={"#ffffff"}>
      <ListItem><FancyHeading color={"#eee"}>Formats are Political</FancyHeading></ListItem>
      <ListItem><FancyHeading color={"#eee"}>Heterogeneity Resists Capture</FancyHeading></ListItem>
    </UnorderedList>
  </FlexBox>
</div>
)


const Slides = [Triplets, Rumbly, MultiLD, Heterogeneity]

export default Slides
