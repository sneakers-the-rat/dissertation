import React from 'react'
import {Markdown} from 'spectacle'

const LinkEverything = (
  <Markdown title={"Link Everything"}>
  {`
  # What if you could link everything?
  
  - Methods wiki
  - Analysis Wiki
  - Reviewer wikis & Reviewer coops
  - Library wikis
  - Theory wikis
  `}
  </Markdown>
)

const Journals = (
  <Markdown title={"Journals"}>
  {`
  # Where are the journals in all this?
  
  - Nowhere.
  - We have fulfilled their basic function:
    - Publication
    - Organization
    - Reviewing
    - Credit assignment
  `}
  </Markdown>
)

const Slides = [
    LinkEverything, Journals
    ]

export default Slides
