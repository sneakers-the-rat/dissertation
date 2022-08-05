import React from 'react';
import {
  Slide,
  Heading,
  Text,
  Markdown
} from 'spectacle';

import {FancyHeading} from '../../components/styled.jsx';
import {NetStepper} from '../../components/net_stepper.jsx'

const Net = (
    <>
      <FancyHeading>The Extended Universe...</FancyHeading>


    <NetStepper
        svgId={"expanded-model"}
      netSteps={
        [
          {
            nodes:[
              {id:'haskins', size:20, fill:"#ff0000", label:'Haskins Labs'},
              {id:'cue', group:1,size:20, label:'Cue Paradigm'},
              {id:'synth', group:1,size:20, label:'Synthesized Speech'},
              {id:'innate', group:1, size: 20, label: 'Innate Audition'},
              {id:'motor', group:1,size:20, label:"Motor Theory"},
              {id:'warp', group:2, size:20, label:"Perceptual Warping"},
              {id:'dev', group:2,size:20, label:"Dev Psych", initx:1000, inity:20},
              {id:'long', group:2,size:20,label:"Longitudinal"},
              {id:'prototype', group:3, size:20, label:"Prototypes"},
              {id:'info', group:3, size:20, label:'Information Theory'},
              {id:'neuro', group:4, size:20, label:"Neuroscience"},
              {id:'plasticity', group:3, size:20, label:'Plasticity'},
              {id:'natural', group:3, size:20, label:"Natural Speech"},
              {id:'animal', group:4, size:20, label:"Animal Models"},
              {id:'train', group:4, size:20, label:'Behavioral Training'},
              {id:'phil', group:5,size:20,label:"Phil. of Language"},
              {id:'family', group:5, size:20,label:"Family Resemblances"},
              {id:'manifold', group:5, size:20, label:"Manifold Inference"},
              {id:'geom', group:5, size:20, label:"Geometry"},
              {id:'perceptualgeom', group:5, size:20, label:'Perceptual Geometry'},
              {id:'psychophys', group:5,size:20,label:"Psychophysics"},
              {id:'parametric', group:5,size:20,label:"Parametric Variation"}
            ],
            links: [
              {source:'haskins', target:'cue'},
              {source:'cue', target:'synth'},
              {source:'haskins', target:'motor'},
              {source:'cue', target:'motor'},
              {source: 'cue', target:'innate'},
              {source:'motor', target:'haskins'},
              {source:'dev', target:'long'},
              {source:'warp', target:'plasticity'},
              {source:'neuro', target:'plasticity'},
              {source:'innate', target:'plasticity'},
              {source:'warp', target:'dev'},
              {source:'neuro', target:'animal'},
              {source:'animal', target:'train'},
              {source:'train', target:'long'},
              {source:'info', target:'natural'},
              {source:'info', target:'phil'},
              {source:'family',target:'phil'},
              {source:'manifold',target:'geom'},
              {source:'manifold',target:'neuro'},
              {source:'geom', target:'perceptualgeom'},
              {source:'perceptualgeom',target:'warp'},
              {source:'perceptualgeom',target:'manifold'},
              {source:'prototype', target:'dev'},
              {source:'psychophys',target:'parametric'},
              {source:'psychophys',target:'synth'},
              {source:'info',target:'manifold'},
              {source:'natural',target:'animal'}
            ]
          },
          {
            nodes:[
              {id:'haskins', size:20, fill:"#ff0000", label:'Haskins Labs'},
              {id:'cue', group:1,size:20, label:'Cue Paradigm'},
              {id:'synth', group:1,size:20, label:'Synthesized Speech'},
              {id:'motor', group:1,size:20, label:"Motor Theory"},
              ],
            links: [
              {source:'haskins', target:'cue'},
              {source:'haskins', target:'synth'},
              {source:'haskins', target:'motor'},
              {source:'cue', target:'motor'}
            ]
          },
        ]
      }
    >
    </NetStepper>
    </>
)

const Harms = (
    <Markdown>
      {`
      # Harms
      
      - So what, science is a little bit suboptimal, whats the big deal.
      - wrong bozo. 
        - harms from piece
        - disciplines are arguably a product of prestige fiefdoms where a small number of people basically control the conversation within a discipline
        - By not having to engage with things even subtly outside of your discipline, you can make many of these 'local champions' so that everyone has a little treadmill to climb
        - This is all of course at the expense of, yno, understanding things.
        - perhaps most subtle of all is the cognitive limitations in bounding what is possible to imagine.
      `}
    </Markdown>
)

const Slides = [
    Net
]

export default Slides
