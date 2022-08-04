import React from 'react';
import {
  Slide,
  Heading,
  Text,
  Markdown,
    FlexBox,
    Image
} from 'spectacle';

import { FancyHeading } from '../../components/styled.jsx';
import {Citations, Citation} from '../../components/typography.jsx';

import fig1 from '../../img/speech_fig1.png';
import fig2 from '../../img/speech_fig2.png'

const Mice = (
    <div title={"Mice Can Learn Phonetic Categories"}>
      <FancyHeading>Mice Can Learn Phonetic Categories</FancyHeading>
      <FlexBox width={"100%"} position={"absolute"} left={0} style={{gap:"30px"}}>
        <Image src={fig1} width={"60%"}></Image>
        <Image src={fig2} width={"28%"}></Image>
      </FlexBox>
      <Citations>
        <Citation
          title={"Mice Can Learn Phonetic Categories"}
          author={"Jonny Saunders, Mike Wehr"}
          year={"2019"}
          link={"https://doi.org/10.1121/1.5091776"}
        />
      </Citations>
    </div>
)

const Slides = [
    Mice
]

export default Slides
