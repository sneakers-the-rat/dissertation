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
              {id:'haskins', size:30, group:1, label:'Haskins Labs'},
              {id:'cue', group:1,size:20,fill:"#ff0000", label:'Cue Paradigm'},
              {id:'synth', group:1,size:20,fill:"#ffd500", label:'Synthesized Speech'},
              {id:'innate', group:1, size: 20, label: 'Innate Audition'},
              {id:'motor', group:1,size:20,fill:"#ff0000", label:"Motor Theory"},
              // {id:'warp', group:2, size:20,fill:"#ff0000", label:"Perceptual Warping"},
              // {id:'dev', group:2,size:20,fill:"#072ff6",  label:"Dev Psych", initx:1000, inity:20},
              // {id:'long', group:2,size:20,label:"Longitudinal"},
              // {id:'prototype', group:3, size:20,fill:"#ff0000", label:"Prototypes"},
              // {id:'neuro', group:4, size:20,fill:"#072ff6",  label:"Neuroscience"},
              // {id:'auditoryneuro', group:4, size:20,fill:"#072ff6",  label:"Auditory Neuro"},
              // {id:'plasticity', group:3, size:20, label:'Plasticity'},
              // {id:'animal', group:4, size:20,fill:"#ffd500",  label:"Animal Models"},
              // {id:'train', group:4, size:20,fill:"#ffd500",  label:'Behavioral Training'},
              {id:'psychophys', group:5,size:20,label:"Psychophysics"},
              {id:'parametric', group:5,size:20,fill:"#ffd500", label:"Parametric Variation"},
              // {id:'context', group:5,size:20, label:"Context Adaptation"},
              ],
            links: [
              {source:'haskins', target:'cue'},
              {source:'cue', target:'synth'},
              {source:'haskins', target:'motor'},
              {source:'cue', target:'motor'},
              {source: 'cue', target:'innate'},
              {source:'motor', target:'haskins'},
              // {source:'dev', target:'long'},
              // {source:'warp', target:'plasticity'},
              // {source:'neuro', target:'plasticity'},
              // {source:'innate', target:'plasticity'},
              {source:'parametric', target:'cue'},
              // {source:'warp', target:'dev'},
              // {source:'neuro', target:'animal'},
              // {source:'animal', target:'train'},
              // {source:'train', target:'long'},
              // {source:'prototype', target:'dev'},
              {source:'psychophys',target:'parametric'},
              {source:'psychophys',target:'synth'},
              // {source:'auditoryneuro',target:'warp'},
              // {source:'auditoryneuro', target:'neuro'},
              // {source:'context', target:'auditoryneuro'},
              // {source:'context', target:'plasticity'},
              // {source:'psychophys',target:'auditoryneuro'}
            ]
          },
            {
          nodes:[
            {id:'haskins', size:30, group:1, label:'Haskins Labs'},
            {id:'cue', group:1,size:20,fill:"#ff0000", label:'Cue Paradigm'},
            {id:'synth', group:1,size:20,fill:"#ffd500", label:'Synthesized Speech'},
            {id:'innate', group:1, size: 20, label: 'Innate Audition'},
            {id:'motor', group:1,size:20,fill:"#ff0000", label:"Motor Theory"},
            {id:'warp', group:2, size:20,fill:"#ff0000", label:"Perceptual Warping"},
            {id:'dev', group:2,size:20,fill:"#072ff6",  label:"Dev Psych", initx:1000, inity:20},
            {id:'long', group:2,size:20,label:"Longitudinal"},
            {id:'prototype', group:3, size:30,fill:"#ff0000", label:"Prototypes"},
            // {id:'info', group:3, size:20,fill:"#072ff6",  label:'Information Theory'},
            {id:'neuro', group:4, size:20,fill:"#072ff6",  label:"Neuroscience"},
            {id:'auditoryneuro', group:4, size:20,fill:"#072ff6",  label:"Auditory Neuro"},
            {id:'plasticity', group:3, size:20, label:'Plasticity'},
            // {id:'natural', group:3, size:20,fill:"#ffd500",  label:"Natural Speech"},
            {id:'animal', group:4, size:20,fill:"#ffd500",  label:"Animal Models"},
            {id:'train', group:4, size:20,fill:"#ffd500",  label:'Behavioral Training'},
            // {id:'phil', group:5,size:20,fill:"#072ff6", label:"Phil. of Language"},
            // {id:'family', group:5, size:20,fill:"#ff0000",label:"Family Resemblances"},
            // {id:'manifold', group:5, size:20,fill:"#ffd500",  label:"Manifold Inference"},
            // {id:'geom', group:5, size:20, fill:"#072ff6", label:"Geometry"},
            // {id:'perceptualgeom', group:5, size:20, label:'Perceptual Geometry'},
            {id:'psychophys', group:5,size:20,label:"Psychophysics"},
            {id:'parametric', group:5,size:20,fill:"#ffd500", label:"Parametric Variation"},
            {id:'context', group:5,size:20, label:"Context Adaptation"},
            // {id:'distributed', group:5,size:20, label:"Distributed Processing"},
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
            {source:'parametric', target:'cue'},
            {source:'warp', target:'dev'},
            {source:'neuro', target:'animal'},
            {source:'animal', target:'train'},
            {source:'train', target:'long'},
            // {source:'info', target:'natural'},
            // {source:'info', target:'phil'},
            // {source:'family',target:'phil'},
            // {source:'manifold',target:'geom'},
            // {source:'manifold',target:'neuro'},
            // {source:'geom', target:'perceptualgeom'},
            // {source:'perceptualgeom',target:'warp'},
            // {source:'perceptualgeom',target:'manifold'},
            {source:'prototype', target:'dev'},
            {source:'psychophys',target:'parametric'},
            {source:'psychophys',target:'synth'},
            // {source:'info',target:'manifold'},
            // {source:'natural',target:'animal'},
            // {source:'family', target:'perceptualgeom'},
            {source:'auditoryneuro',target:'warp'},
            {source:'auditoryneuro', target:'neuro'},
            // {source:'distributed', target:'perceptualgeom'},
            // {source:'distributed', target:'family'},
            {source:'context', target:'auditoryneuro'},
            {source:'context', target:'plasticity'},
            {source:'psychophys',target:'auditoryneuro'}
          ]
        },
          {
            nodes:[
              {id:'haskins', size:20, group:1, label:'Haskins Labs'},
              {id:'cue', group:1,size:20,fill:"#ff0000", label:'Cue Paradigm'},
              {id:'synth', group:1,size:20,fill:"#ffd500", label:'Synthesized Speech'},
              {id:'innate', group:1, size: 20, label: 'Innate Audition'},
              {id:'motor', group:1,size:20,fill:"#ff0000", label:"Motor Theory"},
              {id:'warp', group:2, size:20,fill:"#ff0000", label:"Perceptual Warping"},
              {id:'dev', group:2,size:20,fill:"#072ff6",  label:"Dev Psych", initx:1000, inity:20},
              {id:'long', group:2,size:20,label:"Longitudinal"},
              {id:'prototype', group:3, size:20,fill:"#ff0000", label:"Prototypes"},
              {id:'info', group:3, size:30,fill:"#072ff6",  label:'Information Theory'},
              {id:'neuro', group:4, size:20,fill:"#072ff6",  label:"Neuroscience"},
              {id:'auditoryneuro', group:4, size:20,fill:"#072ff6",  label:"Auditory Neuro"},
              {id:'plasticity', group:3, size:20, label:'Plasticity'},
              {id:'natural', group:3, size:20,fill:"#ffd500",  label:"Natural Speech"},
              {id:'animal', group:4, size:20,fill:"#ffd500",  label:"Animal Models"},
              {id:'train', group:4, size:20,fill:"#ffd500",  label:'Behavioral Training'},
              {id:'phil', group:5,size:20,fill:"#072ff6", label:"Phil. of Language"},
              {id:'family', group:5, size:20,fill:"#ff0000",label:"Family Resemblances"},
              {id:'manifold', group:5, size:20,fill:"#ffd500",  label:"Manifold Inference"},
              {id:'geom', group:5, size:20, fill:"#072ff6", label:"Geometry"},
              {id:'perceptualgeom', group:5, size:20, label:'Perceptual Geometry'},
              {id:'psychophys', group:5,size:20,label:"Psychophysics"},
              {id:'parametric', group:5,size:20,fill:"#ffd500", label:"Parametric Variation"},
              {id:'context', group:5,size:20, label:"Context Adaptation"},
              {id:'distributed', group:5,size:20, label:"Distributed Processing"},
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
              {source:'parametric', target:'cue'},
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
              {source:'natural',target:'animal'},
              {source:'family', target:'perceptualgeom'},
              {source:'auditoryneuro',target:'warp'},
              {source:'distributed', target:'perceptualgeom'},
              {source:'distributed', target:'family'},
              {source:'context', target:'auditoryneuro'},
              {source:'context', target:'plasticity'},
              {source:'psychophys',target:'auditoryneuro'}
            ]
          },
          {
            nodes:[
              {id:'haskins', size:20, group:1, label:'Haskins Labs'},
              {id:'cue', group:1,size:20,fill:"#ff0000", label:'Cue Paradigm'},
              {id:'synth', group:1,size:20,fill:"#ffd500", label:'Synthesized Speech'},
              {id:'innate', group:1, size: 20, label: 'Innate Audition'},
              {id:'motor', group:1,size:20,fill:"#ff0000", label:"Motor Theory"},
              {id:'warp', group:2, size:20,fill:"#ff0000", label:"Perceptual Warping"},
              {id:'dev', group:2,size:20,fill:"#072ff6",  label:"Dev Psych", initx:1000, inity:20},
              {id:'long', group:2,size:20,label:"Longitudinal"},
              {id:'prototype', group:3, size:20,fill:"#ff0000", label:"Prototypes"},
              {id:'info', group:3, size:30,fill:"#072ff6",  label:'Information Theory'},
              {id:'neuro', group:4, size:20,fill:"#072ff6",  label:"Neuroscience"},
              {id:'auditoryneuro', group:4, size:20,fill:"#072ff6",  label:"Auditory Neuro"},
              {id:'plasticity', group:3, size:20, label:'Plasticity'},
              {id:'natural', group:3, size:20,fill:"#ffd500",  label:"Natural Speech"},
              {id:'animal', group:4, size:20,fill:"#ffd500",  label:"Animal Models"},
              {id:'train', group:4, size:20,fill:"#ffd500",  label:'Behavioral Training'},
              {id:'phil', group:5,size:20,fill:"#072ff6", label:"Phil. of Language"},
              {id:'family', group:5, size:20,fill:"#ff0000",label:"Family Resemblances"},
              {id:'manifold', group:5, size:20,fill:"#ffd500",  label:"Manifold Inference"},
              {id:'geom', group:5, size:20, fill:"#072ff6", label:"Geometry"},
              {id:'perceptualgeom', group:5, size:20, label:'Perceptual Geometry'},
              {id:'psychophys', group:5,size:20,label:"Psychophysics"},
              {id:'parametric', group:5,size:20,fill:"#ffd500", label:"Parametric Variation"},
              {id:'context', group:5,size:20, label:"Context Adaptation"},
              {id:'distributed', group:5,size:20, label:"Distributed Processing"},
            ],
            links: [
              // {source:'haskins', target:'cue'},
              // {source:'cue', target:'synth'},
              // {source:'haskins', target:'motor'},
              // {source:'cue', target:'motor'},
              // {source: 'cue', target:'innate'},
              // {source:'motor', target:'haskins'},
              // {source:'dev', target:'long'},
              // {source:'warp', target:'plasticity'},
              // {source:'neuro', target:'plasticity'},
              // {source:'innate', target:'plasticity'},
              // {source:'parametric', target:'cue'},
              // {source:'warp', target:'dev'},
              // {source:'neuro', target:'animal'},
              // {source:'animal', target:'train'},
              // {source:'train', target:'long'},
              // {source:'info', target:'natural'},
              // {source:'info', target:'phil'},
              // {source:'family',target:'phil'},
              // {source:'manifold',target:'geom'},
              // {source:'manifold',target:'neuro'},
              // {source:'geom', target:'perceptualgeom'},
              // {source:'perceptualgeom',target:'warp'},
              // {source:'perceptualgeom',target:'manifold'},
              // {source:'prototype', target:'dev'},
              // {source:'psychophys',target:'parametric'},
              // {source:'psychophys',target:'synth'},
              // {source:'info',target:'manifold'},
              // {source:'natural',target:'animal'},
              // {source:'family', target:'perceptualgeom'},
              // {source:'auditoryneuro',target:'warp'},
              // {source:'distributed', target:'perceptualgeom'},
              // {source:'distributed', target:'family'},
              // {source:'context', target:'auditoryneuro'},
              // {source:'context', target:'plasticity'},
              // {source:'psychophys',target:'auditoryneuro'}
            ]
          }

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
