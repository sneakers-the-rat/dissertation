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
  <SchemaTree x={120} y={400} width={166*3} height={500} fillDark={"#2f0987"} fillLight={"#784ed2"} srcJson={DataFormat}/>
  <SchemaTree x={120} y={700} width={166*3} height={500} fillDark={"#2f0987"} fillLight={"#784ed2"} srcJson={DataExtension}/>
  <SchemaTree x={600} y={850} width={166*4} height={500} fillDark={"#CF005D"} fillLight={"#ef59a4"} srcJson={Tool}/>
  <SchemaTree x={600} y={250} width={166*4} height={500} fillDark={"#CF005D"} fillLight={"#ef59a4"} srcJson={Analysis1}/>
  <SchemaTree x={600} y={200} width={166*1.6} height={500} fillDark={"#CF005D"} fillLight={"#ef59a4"} srcJson={Analysis2}/>
  <SchemaTree x={1100} y={500} width={166*4.5} height={500} fillDark={"#2a66c3"} fillLight={"#45B6D9"} srcJson={WikiHardware}/>
  <SchemaTree x={1300} y={100} width={166*3} height={500} fillDark={"#2a66c3"} fillLight={"#45B6D9"} srcJson={WikiTheory}/>
</SchemaContainer>
</div>
)

const Journals = (
  <Markdown title={"Journals"}>
  {`
  # Where are the journals in all this?
  
  - Nowhere.
  - We have fulfilled their basic function:
    - Publication
    - Organization
    - Reviewing
    - Credit assignment
  `}
  </Markdown>
)

const Slides = [
    LinkEverything, Journals
    ]

export default Slides
