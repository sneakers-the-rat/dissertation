import React from 'react';
import {
  Slide
} from 'spectacle';

import { Intro, Chair1 } from './intro.js';
import { HaskinsModel, Chair2, InverseModel } from './models.jsx';

const Speech = [
    Intro,
    Chair1,
    HaskinsModel,
    Chair2,
    InverseModel
]
console.log(Intro)

export default Speech;
