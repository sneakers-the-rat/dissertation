import React from 'react'
import {Markdown, Text, Heading, Box} from 'spectacle'
import {SchemaContainer, SchemaTree} from '../../components/schema';

import DataFormat from '../../img/schema/data.json';
import DataExtension from '../../img/schema/data_extension.json';
import Analysis1 from '../../img/schema/analysis_1.json'
import Analysis2 from '../../img/schema/analysis_2.json'
import Tool from '../../img/schema/tool.json'
import WikiTheory from '../../img/schema/wiki_theory.json'
import WikiHardware from '../../img/schema/wiki_hardware.json'

import {FancyHeading} from '../../components/styled.jsx';
import { IFrame } from '../../components/basics.jsx';
import SvgAnimator from '../../components/svg_animator';
import overview from '../../img/schematic-diagram-01.svg';
import anime from 'animejs';

const APWiki = (
    <div title={"Autopilot Wiki"} style={{height:"100%"}}>
      <FancyHeading>Contextual Knowledge & Programmatic Control</FancyHeading>

<Box width={2/3} marginLeft={'auto'} marginRight={'auto'} height={"100%"}>
    <Heading fontSize={'30pt'} textAlign={'center'} color={"tools"} fontWeight={200} fontStyle={"italic"}>
    With Thanks to Ralph Emilio Peterson & Chris Rodgers
</Heading>
<Box flexDirection={'column'} height={"100%"}>
  <IFrame paper={true} flexGrow={4} src={"https://wiki.auto-pi-lot.com/index.php/HiFiBerry_Amp2"}/>
</Box>
</Box>
    </div>
)

const Governance = (
    <div title={"Autopilot Wiki"} style={{height:"100%"}}>
      <FancyHeading>Governance</FancyHeading>
      <FancyHeading fontSize={'30pt'} color={"tools"} >DAOs without the "dogshit"</FancyHeading>

      <Box width={2/3} marginLeft={'auto'} marginRight={'auto'} height={"100%"}>
        <Box flexDirection={'column'} height={"100%"}>
          <IFrame paper={true} flexGrow={4} src={"https://iblwiki.auto-pi-lot.com/index.php/IBL_Publication_Policy"}/>
        </Box>
      </Box>
    </div>
)

const LinkEverything = (
<div title={"Link Everything"}>
    <Heading textAlign={'left'} color={"tools"} fontWeight={200} fontStyle={"italic"} fontSize={50}>
      Have you ever had a dream
    </Heading>
<Text fontFamily={'headerSerif'} fontSize={15}>
  that you, um, you had, your, you you could, you’ll do, you could you, you want so much
</Text>
<Box marginLeft={"100px"}>
  <Heading lineHeight={0.9} textAlign={'left'} color={"tools"} fontWeight={200} fontStyle={"italic"} fontSize={50}>
    you could link anything?
  </Heading>
</Box>

<SchemaContainer>
  <SchemaTree x={120} y={400} width={166*3} height={25} fillDark={"#2f0987"} fillLight={"#784ed2"} srcJson={DataFormat}/>
  <SchemaTree x={120} y={700} width={166*3} height={25} fillDark={"#2f0987"} fillLight={"#784ed2"} srcJson={DataExtension}/>
  <SchemaTree x={600} y={850} width={166*4} height={25} fillDark={"#CF005D"} fillLight={"#ef59a4"} srcJson={Tool}/>
  <SchemaTree x={600} y={250} width={166*4} height={25} fillDark={"#CF005D"} fillLight={"#ef59a4"} srcJson={Analysis1}/>
  <SchemaTree x={600} y={200} width={166*1.6} height={25} fillDark={"#CF005D"} fillLight={"#ef59a4"} srcJson={Analysis2}/>
  <SchemaTree x={1100} y={500} width={166*4.5} height={25} fillDark={"#2a66c3"} fillLight={"#45B6D9"} srcJson={WikiHardware}/>
  <SchemaTree x={1300} y={100} width={166*3} height={25} fillDark={"#2a66c3"} fillLight={"#45B6D9"} srcJson={WikiTheory}/>
</SchemaContainer>
</div>
)



const Summary = (
    <div>
      <SvgAnimator
          svgUrl={overview}
          steps = {[
            [
]]}
          id={'schematic-3'}
      />
    </div>
)

const Slides = [
    APWiki, Governance, LinkEverything, Summary
    ]

export default Slides
