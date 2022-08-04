import React from 'react';
import {Markdown} from 'spectacle';

const Autopilot = (
  <Markdown title={"Autopilot"}>
  {`
  # Autopilot
  
  - Reuse cover slide from infrastructure presentation
  - Autopilot links them together!
  `}
  </Markdown>
)


const Parallaxin = (
  <Markdown title={"Parallaxin"}>
  {`
  # Parallaxin
  
  - This slide is already made!
  `}
  </Markdown>
)

const ProgramStructure = (
    <Markdown title={"Program Structure"}>
      {`
  # Program Structure
  
  - Make a framework that can be extended and composed.
  - Separate the things that are unique to a single experiment from general things
  - Move beyond "a high throughput apparatus to do a single experiment"
  `}
    </Markdown>
)

const CustomHardware = (
    <Markdown title={"Custom Hardware"}>
      {`
  # Custom Hardware & Integration
  
  - Comparison of Cliff's BASIC code to autopilot control
  - Video of parallax platform
  - Video of us plugging into evan's rig.
  `}
    </Markdown>
)

const Topologies = (
  <Markdown title={"Topologies"}>
  {`
  # Experimental Topologies
  
  - Power of swarms to do lots of cool shit
  `}
  </Markdown>
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
  Autopilot, Parallaxin, ProgramStructure, Topologies, CustomHardware, DataModels, Wiki
]

export default Slides
