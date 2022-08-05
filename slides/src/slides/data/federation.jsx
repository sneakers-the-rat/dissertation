import React from 'react';
import {Markdown, Heading, Image} from 'spectacle'
import SvgAnimator from '../../components/svg_animator';
import overview from '../../img/schematic-diagram.svg';
import {SentimentVeryDissatisfied} from '@mui/icons-material';
import federation from '../../img/ld_federation-01.png';


const Federation = (
   <div title={"P2P Federation"}>
     <Heading>P2P Federation: LD Can Describe Actions!</Heading>\
     <Image src={federation} position={"absolute"} width={"100%"} height={"100%"} top={0} left={0}></Image>
   </div>
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
