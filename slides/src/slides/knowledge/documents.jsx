import React from 'react'
import {Markdown, Text, Image, FlexBox, Box, CodePane, ListItem, UnorderedList} from 'spectacle'
import funky from 'react-syntax-highlighter/dist/cjs/styles/prism/funky';
import {FancyHeading} from '../../components/styled.jsx';

import smile from '../../img/smile.png';
import word from '../../img/word.png';

const Overview = (
  <div title={"Generalizing Documents"}>
    <FancyHeading>What if these were all the same thing?</FancyHeading>
  <FlexBox  id={"generalize-docs"}>
    <Box>
      <FancyHeading>Notebooks</FancyHeading>
      <UnorderedList>
        <ListItem>Document</ListItem>
        <ListItem>Cell-Based</ListItem>
        <ListItem>Typed Contents (code, markdown)</ListItem>
        <ListItem>Durable</ListItem>
      </UnorderedList>
    </Box>
    <Box>
      <FancyHeading>Wikis</FancyHeading>
      <UnorderedList>
        <ListItem>Multi-Document</ListItem>
        <ListItem>Page-Based</ListItem>
        <ListItem>Multi-editor</ListItem>
        <ListItem>Wikilinks</ListItem>
        <ListItem>Durable & Plastic</ListItem>
      </UnorderedList>
    </Box>
    <Box>
      <FancyHeading>Microblogs</FancyHeading>
      <UnorderedList>
        <ListItem>Posts</ListItem>
        <ListItem>Threaded</ListItem>
        <ListItem>Defined Author</ListItem>
        <ListItem>One to Many</ListItem>
        <ListItem>Unordered or Categories (ie. forums)</ListItem>
        <ListItem>Tags</ListItem>
      </UnorderedList>
    </Box>
    <Box>
      <FancyHeading>Chatrooms</FancyHeading>
      <UnorderedList>
        <ListItem>Messages</ListItem>
        <ListItem>Defined Author</ListItem>
        <ListItem>One to One or Few</ListItem>
        <ListItem>Channels & Rooms</ListItem>
      </UnorderedList>
    </Box>
  </FlexBox>
  </div>
)

const Interfaces = (
    <div title={"Document Interfaces"}>
      <FancyHeading>Documents are Interfaces to Formats</FancyHeading>
      <Text>Microsoft Word is just a fancy XML Editor</Text>
      <FlexBox className={"twocol"}>
        <Box>
          <Image src={word}></Image>
        </Box>
        <Box>
          <CodePane language={"xml"} theme={funky} width={"50%"}
                    >
            {`
<w:r w:rsidRPr="00F42959">
  <w:rPr>
    <w:rFonts 
      w:ascii="Aaron Script" 
      w:hAnsi="Aaron Script" />
    <w:sz w:val="300" />
    <w:szCs w:val="300" />
  </w:rPr>
  <w:t>
    The
  </w:t>
</w:r>`}
          </CodePane>
        </Box>
      </FlexBox>

    </div>
)

const Notebooks = (
    <div title={"Notebooks"}>

      <FancyHeading>Notebooks are just JSON (NAJJ)</FancyHeading>
      <Text>A JSON Array of cells with types - markdown or code</Text>

      <FlexBox className={"twocol"}>
        <Box>
        <Image src={smile} style={{height:"70%", width:"80%"}}></Image>
        </Box>
        <Box>
          <CodePane language={"json"} theme={funky} width={"50%"}
                  >
          {`
{"cells":[
{
  "cell_type": "markdown",
  "id": "hydraulic-roller",
  "metadata": {},
  "source": [
  "# Mathematical foundations of smiling",
  ]
},
{
  "cell_type": "code",
  "id": "rapid-information",
  "metadata": {},
  "outputs": [
    "..."
  ],
  "source": [
    "x, y, sizes = get_data('@jonny:my-project:Analysis1')"
  ]
}`}
        </CodePane>
        </Box>
      </FlexBox>
    </div>
)


const Slides = [
  Overview,
    Interfaces,
  Notebooks
]

export default Slides
