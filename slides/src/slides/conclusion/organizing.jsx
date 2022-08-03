import React from 'react';
import {Markdown} from 'spectacle';

const Organizing = (
  <Markdown title={"Organizing for Science"}>
  {`
  # Organizing is Infrastructural
  
  - Organizing infrastructure has emergent and recursive effects
  - Why is it that we have to cast about idly for shit
  - Why is it that we often barely know about the working conditions of others
  - Why can't we mount an effective scientific labor movement when our working conditions are obviously shit
  - The cult of heroic individualism is a product of our credit systems, which are a product of our infrastructural systems
  `}
  </Markdown>
)

const Society = (
  <Markdown title={"Organizing for Society"}>
  {`
  # Systematic Dismantling of the Left
  
  - Why can't we mount an effective climate movement?
  - Why are the fascists eating our lunch?
  - Why are we constantly outraged over shit that doesnt matter?
  - We will *never* be able to solve problems like climate change as long as
    the only way to communicate is on attention vaccums driven by viral outrage.
  `}
  </Markdown>
)

const Slides = [
  Organizing, Society
]

export default Slides
