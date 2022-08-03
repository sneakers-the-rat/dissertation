import React from 'react';

import cover from './cover.jsx';
import speech from './speech/speech.jsx';
import infocapitalism from './infocapitalism/infocapitalism.jsx';
import data from './data/data.jsx';
import tools from './tools/tools.jsx';
import knowledge from './knowledge/knowledge.jsx'

// import {info} from 'sass';
console.log('slides', infocapitalism)

let all_slides = [
    [cover],
  speech,
    infocapitalism,
    data,
    tools,
    knowledge
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
  },
  {
    name: 'data',
    display: "Data",
    slides: data
  },
  {
    name: 'tools',
    display: "Tools",
    slides: tools
  },
  {
    name: 'knowledge',
    display: "Knowledge",
    slides: knowledge
  },
]

export const toc_slides_flat = Array.prototype.concat(
    ...toc_slides.map((slide_group) => (
        slide_group.slides.map(
            slide => ({slide: slide, group: slide_group.name}))
    )));
