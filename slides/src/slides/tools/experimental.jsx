import React from 'react';
import {Markdown, Heading, Image} from 'spectacle';
import topologies from '../../img/topologies.png';

const Parallaxin = (
  <Markdown title={"Parallaxin"}>
  {`
  # Parallaxin
  
  - This slide is already made!
  `}
  </Markdown>
)


const Topologies = (
    <div title={"Topologies"}>
    <div className={'blankslide'}></div>

<Heading fontSize={"90pt"} style={{color:"#ffffff"}} caps textAlign="left" fontFamily={"Source Serif Pro"}>
  Multi-Agent <span style={{'color':'#ff3030'}}>Topologies</span></Heading>
<Image src={topologies} style={{objectFit:'contain', margin:'auto', display:"block"}} width="90%" />
    </div>
)



const DataModels = (
  <Markdown title={"DataModels"}>
  {`
  # Data Models
  
  - How we integrated data models and are working on direct export to NWB and etc.
  - datajoint-babel
  - 
  `}
  </Markdown>
)

const Wiki = (
  <Markdown title={"Wiki"}>
  {`
  # Autopilot Wiki
  
  - Blending technical knowledge and computer-readable data
  - A new kind of methods section. Example of autopilot paper.
  - Building a basis for credit assignment - the autopilot wiki is intended to be one of many linked wikis.
  `}
  </Markdown>
)

const Slides = [
  Parallaxin, Topologies, DataModels, Wiki
]

export default Slides
