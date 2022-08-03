import React from 'react';
import { Markdown } from 'spectacle';

import { Citation, Citations } from '../../components/typography.jsx';

import nsfnetmp4 from '../../img/nsfnet.mp4';
import nsfnetwebm from '../../img/nsfnet.webm';

export const NSFNET = (
    <>
    <Markdown>
{`# NSFNet

- 1981-1995, Created the backbone of the internet
- Federal & State governments invested ~$1.6 Billion 
- Then just... gave it away
`}
    </Markdown>
    <video controls loop  className={"video-slide"}>
        <source type={"video/webm"} src={nsfnetwebm}/>
        <source type={"video/webm"} src={nsfnetmp4}/>
    </video>
    <Citations><Citation
        title={"Visualizing the Early Internet"}
        author={"Donna Cox & Robert Patterson"}
        year={"1992"}
        link={"https://avl.ncsa.illinois.edu/project-archive/visualizing-the-early-internet"}
    /></Citations>
    </>
)

export const Cloud = (
    <Markdown title={"Test Title"}>
    {`
    # Creating the Cloud
    
    - quote about how the internet isn't profitable
    - 1998 PageRank algorithm
        - but it was really AdWords that completed the picture.
    - Figure of cloud platform model: user <-> platform <-> server with information coming off the top
    - Information is like a universal acid: once you have the data you can invent whatever kind of derivative products you want
        - Multisided markets
    - The interface controls the information collection methods
        - TikTok is a beautiful surveillance system because it has figured out how to translate so much structured information into UI elements
        - Papers are the same thing: carefully control the means by which we interact with the system, can only cite, can only write big massive papers. create artificial scarcity both in prestige but also the imagination of what scientific output could look like.
        - We could go ahead and do our own peer review, why don't we? because it wouldn't show up in the aggregation and registration systems.
    - Necessarily need to create and maintain the need.
        - Google has bought up competing indexing and organizational technologies...
        - What do scientific platforms do?
        - Partly it's indexing (so making sure that you can't find shit)
        - but it's also deinfrastructuring (making sure you can't build alternative shit that could compete with the paper as such)
    `}
    </Markdown>
);

export const DOI = (
    <Markdown>
        {`
     # Dark Side of the DOI
     
     - Primarily about copyright protection - https://quod.lib.umich.edu/j/jep/3336451.0003.204?view=text;rgn=main
     - Some means of linking between journals:
        - Don't want to link, b/c don't want to make others more prestigious
        - But need other people to link to you!
     `}
    </Markdown>
)

console.log('cloud slide', Cloud)
