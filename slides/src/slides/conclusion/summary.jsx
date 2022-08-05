import React from 'react';
import {Markdown, Box, Quote} from 'spectacle';

const BlankSlide = (
<Box width={2/3} margin={'auto'}>
  <Quote fontSize={"2em"} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={"italic"}>
    It would be easy to make some sweeping recommendations about what should be done, especially by governments. But to be compatible with the goal of a participatory communication system, the methods should be participatory too. The following ideas are meant to encourage discussion.
    - Brian Martin, 1998, <a fontSize={"1em"} href={"https://documents.uow.edu.au/~bmartin/pubs/98il/ilall.html"}>Information Liberation</a>
  </Quote>
</Box>
)

const Slides = [
  BlankSlide
]

export default Slides
