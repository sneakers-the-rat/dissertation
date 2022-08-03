import React from 'react';
import {
  Slide,
    Heading,
    Text,
    Markdown
} from 'spectacle';

const Intro = (
<Markdown title={"A Problem..."}>
{`
# Introduce speech problem

- Music is continuous, speech is not...!!!!
- Reduce infinite variation to a small number of phonemes
 
`}
</Markdown>
);

const Chair1 = (
<Markdown>
  {`
  # Wittgenstein
  
  - Speech is like wittgenstein's game
  - Example of a chair? idk think of a better example lol
  `}
</Markdown>
)

const Slides = [
    Intro, Chair1
]

export default Slides

console.log(Intro)

