import React from 'react';
import { Box, Heading, Text, Quote } from 'spectacle';


export const Cover = (
<>
    <Box width={2/3}>
      <Heading
          fontFamily={'headerSerif'}
          fontSize={'150pt'}
          textAlign={'left'}
          lineHeight={1.0}
          fontWeight={'bold'}
      >
        Swarmpunk
      </Heading>
      <Heading
        fontStyle={"italic"}
        textAlign={'left'}
        fontFamily={"EB Garamond"}
        fontWeight={200}
        lineHeight={1.0}
        fontSize={'50pt'}
      >
        Rough Consensus and Running Code in Brains, Machines, and Society
      </Heading>

      <Text marginTop={"1em"}>Jonny Saunders</Text>
      <Text>Dissertation Defense</Text>
      <Text>August 5th, 2022</Text>
    </Box>


<Box width={2/3} margin={'40px 0'}>
  <Quote fontSize={"2em"} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={"italic"}>
    "If we can make something decentralised, out of control, and of great simplicity, we must be prepared to be astonished at whatever might grow"<br/>
    -Tim Berners-Lee, <a fontSize={"1em"}  href={"https://www.w3.org/1998/02/Potential.html"}>W3C meeting 1997</a>
  </Quote>
</Box>

<Box width={2/3} margin={'0 0'}>
  <Quote fontSize={"2em"} fontFamily={"Source Serif Pro"} fontWeight={200} fontStyle={"italic"}>
    Information is often a means of domination of both humans and the environment.
    The goal is to make information into a tool for liberation.<br/>
    - Brian Martin, 1998, <a fontSize={"1em"} href={"https://documents.uow.edu.au/~bmartin/pubs/98il/ilall.html"}>Information Liberation</a>
  </Quote>
</Box>
  </>
)

export default Cover;
