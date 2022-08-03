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

const Wikipedia = (
  <Markdown title={"Wikipedia"}>
  {`
  # We all know Wikipedia right
  
  - The 'behind the scenes' stuff in wikipedia
  - But wikipedia is an anomaly in wiki history
  `}
  </Markdown>
)

const Wikis = (
  <Markdown title={"Early Wikis"}>
  {`
  # Earlier Wikis
  
  - meaball & c2
  - What wikis are really good at is governance
  `}
  </Markdown>
)



const Slides = [
Social, What, Wikipedia, Wikis
]

export default Slides
