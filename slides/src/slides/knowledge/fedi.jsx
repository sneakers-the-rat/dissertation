import React from 'react'
import {Markdown, Image, FlexBox, CodePane} from 'spectacle'
import funky from 'react-syntax-highlighter/dist/cjs/styles/prism/funky';

import masto from '../../img/masto.png'
import smile from '../../img/smile.png';


const Mastodon = (
    <div style={{position:"absolute", width:"100%", height:"100%"}}>

      <FlexBox position={"relative"} style={{height:"100%"}} flexDirection={"row"}>
        <Image src={masto} style={{height:"80%"}}></Image>
        <div style={{width:"50%", overflow:"hidden"}}>
          <CodePane language={"json"} theme={funky} width={"50%"}
                    highlightRanges={[
                      [1]
                    ]}>
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
        </div>
      </FlexBox>
    </div>
)





const Slides = [
  Mastodon
]

export default Slides
