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
              {id:'haskins', size:30, fill:"#ff0000", label:'Haskins Labs'},
              {id:'cue', group:1,size:30, label:'Cue Paradigm'},
              {id:'synth', group:1,size:30, label:'Synthesized Speech'},
              {id:'motor', group:1,size:30, label:"Motor Theory"}
            ],
            links: [
              {source:'haskins', target:'cue'},
              {source:'haskins', target:'synth'},
              {source:'haskins', target:'motor'},
              {source:'cue', target:'motor'}
            ]
          },
          {
            nodes:[
              {id:'haskins', size:30, fill:"#ff0000", label:'Haskins Labs'},
              {id:'cue', group:1,size:30, label:'Cue Paradigm'},
              {id:'synth', group:1,size:30, label:'Synthesized Speech'},
              {id:'motor', group:1,size:30, label:"Motor Theory"},
              {id:'dev', group:2,size:30, label:"Developmental Psych", initx:1000, inity:20}
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
