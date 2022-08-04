import React from 'react';
import {Markdown} from 'spectacle';

const Intro = (
<Markdown title={"A Problem..."}>
{`
# Introduce speech problem

- Music is continuous, speech is not...!!!!
- Reduce infinite variation to a small number of phonemes
 
`}
</Markdown>
);

const Slides = [
    Intro
]

export default Slides

console.log(Intro)

