import React from 'react';
import {Markdown, Image} from 'spectacle';
import {FancyHeading} from '../../components/styled.jsx';

import phonemes from '../../img/phonemes.png';



const Intro = (
<div title={"Speech is Discrete"}>
<FancyHeading fontWeight={800} fontStyle={"normal"}>Speech is A Series of Phonemes</FancyHeading>
    <Image src={phonemes} position={"absolute"} width={"100%"} height={"100%"} top={0} left={0}/>
</div>
);

const Slides = [
    Intro
]

export default Slides

console.log(Intro)

