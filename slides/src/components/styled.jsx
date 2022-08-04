import React from 'react';
import { Heading } from 'spectacle';

export function FancyHeading(
    {
        fontWeight= 200,
        textAlign= "left",
        fontStyle="italic",
        fontSize="72px",
        children
    }){
  return(
<Heading fontFamily={"Source Serif Pro"}
         fontWeight={fontWeight}
         textAlign={textAlign}
         fontStyle={fontStyle}
fontSize={fontSize}>
  {children}
</Heading>
  )
}
