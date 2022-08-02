import React from 'react';
import {Link, Text, FlexBox} from 'spectacle';

export function Citations({
    children,
    margin="5px"
  }){
  return(
      <FlexBox
          position={"absolute"}
          bottom={margin}
          right={margin}
          flexDirection={"column"}
      >
        {children}
      </FlexBox>
  )
}

export function Citation(
    {
    author,
    year,
    title,
    link,
    fontSize="16pt"
    }){
  return(
      <FlexBox
          flexGap={"10px"}
          marginLeft={"auto"}
         className={"citation-container"}>
      <Text fontSize={fontSize}>{author + " "}</Text>
      <Text fontSize={fontSize} fontWeight={"bold"}> ({year}) </Text>
      <Link href={link} fontSize={fontSize} fontStyle={"italic"}>{" " + title}</Link>
      </FlexBox>
  )
}
