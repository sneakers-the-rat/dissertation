import React from 'react';
import {
  Slide,
  Heading,
  Text,
  Markdown
} from 'spectacle';

import {NetStepper} from '../../components/net_stepper.jsx'

export const Net = (
    <>
      <Markdown>
        {`
        # Model History
        
        - Science is a conversation through history
        - Method, Theory, Data are continuous
        - Development of haskins lab idea, how different disciplines like philosophy of language interact
        `}
      </Markdown>

    <NetStepper
        svgId={"expanded-model"}
      netSteps={
        [
          {
            nodes:[
              {id:1, group:0, size:10, label:'a'},
              {id:2, group:1,size:10, label:'b'},
            ],
            links: [
              {source:1, target:2}
            ]
          },
          {
            nodes:[
              {id:1, group:0, size:10, label:'a'},
              {id:2, group:1,size:10, label:'b'},
              {id:3, group:1,size:10, label:'c'},
            ],
            links: [
              {source:2, target:3}
            ]
          }
        ]
      }
    >
    </NetStepper>
    </>
)


export const Harms = (
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
