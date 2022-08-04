import React from 'react';

import {Markdown} from 'spectacle'

const Overview = (
    <Markdown title={"P2P + LD"}>
      {`
  # Two Primary Ingredients
  
  
  - Linked Data
  - P2P
  `}
    </Markdown>
)

const Triplets = (
  <Markdown title={"Triplets"}>
  {`
  # Triplet link example
  
  - Existing one, but
  - Important properties:
    - Schema declarations are also just links
    - Propositional - anyone can say anything about stuff
    - 
  `}
  </Markdown>
)

const Heterogeneity = (
  <Markdown title={"Heterogeneity"}>
  {`
  # Design Principle - Heterogeneity is good
  
  - rough consensus slide
  - neat v. scruffy
  - We are not trying to order the world, but build a means of expression.
  - Very brief allusion to NIH data translator project and trans health.
  
  - Formats are political. 
  - Why do we have so many databases but none of them feel relevant to us?
    - why does NIH waste so much money making so many domain-specific databases??
  - Example from academic work, but also translator - it's a colonial project!
  - Our version of federation means that we can make negotiation over formats an explicit part of the process
  
  `}
  </Markdown>
)


const Formats = (
    <Markdown title={"Formats"}>
      {`
      # Formats
      
      - We're familiar with formats yno... 
      - What are they?
        - Schema
        - I/O
        - ...
      - We can generalize that with LD.
      `}
    </Markdown>
)


const Slides = [Overview, Triplets, Heterogeneity, Formats]

export default Slides
