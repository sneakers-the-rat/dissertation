import React from 'react';
import { Markdown } from 'spectacle';

const Overview = (
  <Markdown title={"P2P + LD"}>
  {`
  # Two Primary Ingredients
  
  - P2P
  - Linked Data
  `}
  </Markdown>
)

const Edges = (
  <Markdown title={"Edges"}>
  {`
  # Design Principle - Empower People, not Systems
  
  - Push the power towards the edge.
  - Don't build platforms that do things *for* people
  - Make tools that let people do things directly.
  `}
  </Markdown>
)

const P2P = (
    <Markdown title={"P2P"}>
      {`
      # P2P Slides from prior talk
      
      - Add academic torrents cost comparison to the larger p2p swarm
      `}
    </Markdown>
)






const Slides = [Overview, Edges, P2P]

export default Slides
