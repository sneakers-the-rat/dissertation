import React from 'react'
import {Markdown} from 'spectacle'

const Mastodon = (
  <Markdown title={"Mastodon"}>
  {`
  # What is a Post anyway?
  
  - Show post side by side with JSON metadata
  - What about instead of a series of cells, we had cells that just indicated they followed others like 'followsCell'
  - That's how mastodon works!
  - Based on a common format, we can have a multiplicity of interfaces
  `}
  </Markdown>
)

const Fediverse = (
  <Markdown title={"Fediverse"}>
  {`
  # That's how the Fediverse works!
  
  - Example of funkwhale vs. masto vs. peertube
  `}
  </Markdown>
)

const Threadodo = (
  <Markdown title={"Threadodo"}>
  {`
  # Dissolve the boundary between papers and communication
  
  - The threadodo bot as an example
  - anagora too!
  `}
  </Markdown>
)



const Slides = [
  Mastodon, Fediverse, Threadodo
]

export default Slides
