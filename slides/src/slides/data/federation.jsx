import React from 'react';
import {Markdown} from 'spectacle'
import SvgAnimator from '../../components/svg_animator';
import overview from '../../img/schematic-diagram.svg';
import {SentimentVeryDissatisfied} from '@mui/icons-material';


const Federation = (
    <Markdown title={"P2P Federation"}>
      {`
  # Federation
  
  - Centralization -> Federation
  - Fediverse model is like...
  - Comparison
    - I  keep my stuff
    - but choose to federate with another peer
    - they can help me rehost it
    - and they can host other stuff like webzones and etc.
  `}
    </Markdown>
)

const Summary = (
    <div>
      <SvgAnimator
        svgUrl={overview}
        steps = {[[]]}
        id={'overview-1'}
        />
    </div>
)


const Slides = [
    Federation,
    Summary
]

export default Slides
