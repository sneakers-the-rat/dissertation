import React from 'react';
import {
  Slide,
  Heading,
  Text,
  Markdown
} from 'spectacle';

export const HaskinsModel = (
<Markdown>
  {`
  # Trad model
  
  - Easy enough right? figure out what makes a 'b' a 'b' and viola! language!
  - Find what features are necessary!
  - Specify some feature, vary it, and test what people say it is
  - If people's perception varies, then it defines the phoneme!
  - Diagram of feature -> perception -> loop back to sound

  `}
</Markdown>
)

export const BrokenSpeech = (
    <Markdown>
      {`
      # Not so fast
      
      - haskins lab quote, what features are necessary? none.
      - Sine wave speech, noise vocoded speech
      `}
    </Markdown>
)

export const Chair1 = (
<Markdown>
  {`  
  # What's a chair?
  
  - "chairs have four legs" !
  - 6 legged chairs are benches, 2 legged chairs are like.. sandwich boards
  - but having 4 legs isn't enough: is a cat a chair?
  - and something can be a chair with a ton of pointless legs, idk why not
  `}
</Markdown>
)

export const InverseModel = (
    <Markdown>
      {`
      # Inverse Model
      
      - This isn't the problem that the auditory system faces!
      - It needs to *discover* the features
      - We actually don't *care* about what the features are, we want to know how the auditory system perceives phonemes
      - If we prespecify the features, then we are studying the *features* not the problem
      - We need to preserve the complexity, (figure of inverting the model)
      `}
    </Markdown>
)

