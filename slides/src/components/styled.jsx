import React from 'react';
import { Heading } from 'spectacle';

export function FancyHeading(
    {
        fontWeight= 200,
        textAlign= "left",
        fontStyle="italic",
        children
    }){
  return(
<Heading fontFamily={"Source Serif Pro"}
         fontWeight={fontWeight}
         textAlign={textAlign}
         fontStyle={fontStyle}>
  {children}
</Heading>
  )
}
