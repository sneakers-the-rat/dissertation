import React from 'react'
import {Markdown, Box, Image, FlexBox, CodePane, Text} from 'spectacle';
import funky from 'react-syntax-highlighter/dist/cjs/styles/prism/funky';

import masto from '../../img/masto.png'
import smile from '../../img/smile.png';
import {FancyHeading} from '../../components/styled.jsx';

import nesteddoc from '../../img/nesteddoc-01.png';


const Mastodon = (
    <div style={{position:"absolute", width:"100%", height:"100%"}}>
      <FancyHeading>Mastodon is just JSON-LD (MIJJLD)</FancyHeading>
      <Text>JSON-LD that uses ActivityStreams to address posts, manage followers, etc.</Text>

      <FlexBox className={"twocol"}>
        <Box>
        <Image src={masto} ></Image>
        </Box>
        <Box style={{width:"50%", overflow:"hidden"}}>
          <CodePane language={"json"} theme={funky}
                    >
            {`
{
"to":[
    "https://www.w3.org/ns/activitystreams#Public"
], "cc":[
    "https://social.coop/users/jonny/followers"
  ],
  "id": "107328829457619549",
  "created_at": "2021-11-23T22:52:49.044Z",
  "in_reply_to_id": "107328825611826508",
  "in_reply_to_account_id": "274647",
  "visibility": "public",
  "url": "https://social.coop/@jonny/107328829457619549",
  "content": "and making a reply to the post to show the in_reply_to and context fields",
  "account":
  {
"id": "274647", "username": "jonny", "fields":
[ ... ]
  },
  "media_attachments": [],
  "mentions": [],
  "tags": [],
}
`}
          </CodePane>
        </Box>
      </FlexBox>
    </div>
)

const NestedDoc = (
    <div title={"Nested, Typed Documents"}>
      <Image src={nesteddoc} position={"absolute"} width={"100%"} height={"100%"} left={0} top={0}/>
    </div>
)




const Slides = [
  Mastodon, NestedDoc
]

export default Slides
