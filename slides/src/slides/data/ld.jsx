import React from 'react';

import {Markdown} from 'spectacle'


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




const Slides = [Triplets, Heterogeneity, Formats]

export default Slides
