import React from 'react'
import {Markdown} from 'spectacle'

const Social = (
  <Markdown title={"Social"}>
  {`
  # Design Principle - Infrastructure is Social
  
  - We have data and tools to make and analyze it
  - But that's awfully lonely by itself
  - We need to have means of governing it and communicating about it
  `}
  </Markdown>
)

const What = (
  <Markdown title={"What.cd"}>
  {`
  # Pirate Archives - What.cd
  
  - It's unremarkable that the most profitable and deeply capital-intensive companies have archives
  - What's remarkable are communal archives with no incentives
  `}
  </Markdown>
)

const Wikis = (
  <Markdown title={"Early Wikis"}>
  {`
  # Earlier Wikis
  
  - meatball & c2
  - example of fedwiki
  `}
  </Markdown>
)



const Slides = [
Social, What,  Wikis
]

export default Slides
