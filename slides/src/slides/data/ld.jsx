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
  
  - Formats are political. 
  - Universalizing systems get bought up by information giants
  - Heterogeneity resists capture
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
