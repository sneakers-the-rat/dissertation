import React from 'react';

import cover from './cover.jsx';
import speech from './speech/speech.jsx';


let all_slides = [
    [cover],
  speech
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
  }
]

export const toc_slides_flat = Array.prototype.concat(
    ...toc_slides.map((slide_group) => (
        slide_group.slides.map(
            slide => ({slide: slide, group: slide_group.name}))
    )));
