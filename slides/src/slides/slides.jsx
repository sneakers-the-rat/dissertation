import React from 'react';

import cover from './cover.jsx';
import speech from './speech/speech.jsx';
import infocapitalism from './infocapitalism/infocapitalism.jsx';
// import {info} from 'sass';
console.log('slides', infocapitalism)

let all_slides = [
    [cover],
  speech,
    infocapitalism
]

export const toc_slides = [
  {
    name: 'cover',
    display: "Cover",
    slides: [cover]
  },
  {
    name: 'speech',
    display: 'Speech',
    slides: speech
  },
  {
    name: 'infocapitalism',
    display: "Infocapitalism",
    slides: infocapitalism
  }
]

export const toc_slides_flat = Array.prototype.concat(
    ...toc_slides.map((slide_group) => (
        slide_group.slides.map(
            slide => ({slide: slide, group: slide_group.name}))
    )));
