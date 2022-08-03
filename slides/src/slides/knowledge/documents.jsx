import React from 'react'
import {Markdown} from 'spectacle'

const Overview = (
  <Markdown title={"Overview"}>
  {`
  # Generalize the Notion of "Document"
  
  Merge:
  - Notebooks
  - Forums
  - Microblogging
  - Wikis
  
  Put each in columns and beneath them their basic qualities
  `}
  </Markdown>
)

const Notebooks = (
  <Markdown title={"Notebooks"}>
  {`
  # Notebooks
  
  - What are notebooks? 
  - Show side-by-side example of notebook and JSON
  `}
  </Markdown>
)

const Generalization = (
  <Markdown title={"Generalization"}>
  {`
  # Generalized...
  
  - What if cells can contain cells?
  - What if instead of a list of cells, the container was itself a cell?
  - What if instead of just code and markdown we used LD to have arbitrary types?
  - This could be an interface to our LD system
  
  Make an example of an elaborated type that eg. combines some reference to data, plot, and discussion
  `}
  </Markdown>
)

const Slides = [
  Overview,
  Notebooks,
    Generalization
]

export default Slides
