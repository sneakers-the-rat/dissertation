import React from 'react';
import {Markdown} from 'spectacle'

const ActivityPub = (
  <Markdown title={"ActivityPub"}>
  {`
  # ActivityPub
  
  - with LD we can do stuff like define basic actions and what to do with them
  `}
  </Markdown>
)

const Federation = (
    <Markdown title={"Federation"}>
      {`
  # Federation
  
  - Centralization -> Federation
  - Fediverse model is like...
  - Comparison
    - I  keep my stuff
    - but choose to federate with another peer
    - they can help me rehost it
    - and they can host other stuff like webzones and etc.
  `}
    </Markdown>
)

const Folk = (
  <Markdown title={"Folk Federation"}>
  {`
  # Remember formats?
  
  - Formats are political. 
  - Why do we have so many databases but none of them feel relevant to us?
    - why does NIH waste so much money making so many domain-specific databases??
  - Example from academic work, but also translator - it's a colonial project!
  - Our version of federation means that we can make negotiation over formats an explicit part of the process
  `}
  </Markdown>
)

const Slides = [
    ActivityPub,
    Federation,
    Folk
]

export default Slides
