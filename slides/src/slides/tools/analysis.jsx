import React from 'react';
import {Markdown} from 'spectacle'

const Overview = (
  <Markdown title={"Overview"}>
  {`
  # Tools
  
  - Need to make things that interact with our data. 
  - Make it easy to make, make it easy to use.
  `}
  </Markdown>
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

const System = (
    <Markdown title={"System Diagram"}>
      {`
  # System Diagram
  
  - Continue system diagram, show linking from data to analysis
  `}
    </Markdown>
)


const Slides = [
  Overview,
    Integration,
  System
]

export default Slides
