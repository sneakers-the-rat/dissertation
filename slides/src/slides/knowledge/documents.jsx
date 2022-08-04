import React from 'react'
import {Markdown, Image, FlexBox, CodePane} from 'spectacle'
import funky from 'react-syntax-highlighter/dist/cjs/styles/prism/funky';


import smile from '../../img/smile.png';

const Overview = (
  <Markdown title={"Overview"}>
  {`
  # Generalize the Notion of "Document"
  
  Merge:
  - Notebooks
  - Forums
  - Microblogging
  - Wikis
  
  Put each in columns and beneath them their basic qualities
  `}
  </Markdown>
)

const Notebooks = (
    <div style={{position:"absolute", width:"100%", height:"100%"}}>

      <FlexBox position={"relative"} style={{height:"100%"}} flexDirection={"row"}>
        <Image src={smile} style={{height:"80%"}}></Image>
        <div style={{width:"50%", overflow:"hidden"}}>
          <CodePane language={"json"} theme={funky} width={"50%"}
                  highlightRanges={[
                    [1]
                  ]}>
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
        </div>
      </FlexBox>
    </div>
)


const Slides = [
  Overview,
  Notebooks
]

export default Slides
