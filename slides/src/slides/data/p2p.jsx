import React, {Fragment} from 'react';
import { Markdown, Appear, Heading, Box, FlexBox, Text } from 'spectacle';
import { Swarm } from '../../components/p2p/swarm';

const P2P = (
    <div title={"P2P"}><Box
        width={4/9}
        padding={"5px"}
        marginLeft={'auto'}
        marginRight={'auto'}
        style={{
          border: "5px solid black",
          boxShadow: "15px 15px 0px #2F0987"
        }}
    >
      <Heading
          style={{
            textShadow: "5px 5px 10px rgba(47, 9, 135, 0.3)"
          }}
          fontFamily={'Source Serif Pro'}
          fontWeight={200}>
        Have data, now what?
      </Heading>
    </Box>

<Box height={"20px"} width={1}/>

<FlexBox justifyContent={'space-around'}>
  <Heading textAlign={'left'}
           fontFamily={'Source Serif Pro'}
           fontWeight={200}
           fontWeight={200}
           fontStyle={"italic"}>
    Centralized...
  </Heading>
  <Heading textAlign={'left'}
           fontFamily={'Source Serif Pro'}
           fontWeight={200}
           fontWeight={200}
           fontStyle={"italic"}>
    Peer-to-Peer...
  </Heading>
</FlexBox>


<svg width={1920} height={1080} className={'svg-fill'} id={"svg-root"}>
  <Swarm
      position={[450,650]}
      radius={300}
      name={'swarm'}
      peers={{
        scale: 2,
        names: ['jonny1', 'rumbly1', 'santi1'],
        datasets:{
          n_range: [2,5],
          col_range:[3,6],
          size_range:[2,6],
          scale:0.01
        }}}
      centralized={true}
      server={{
        name: 'servy',
        upload: 5,
        download: 5,
        datasetAngle:120
      }}
  />
</svg>

<Appear stepIndex={1} id={'p2p-comparison-1'}>
  <svg style={{left:(1920/2), width:1920/2, height:1080}} className={'svg-fill'} id={"svg-root"}>
    <Swarm
        position={[450,650]}
        radius={300}
        name={'swarm'}
        peers={{
          scale: 2,
          names: ['jonny2', 'rumbly2', 'santi2'],
          datasets:{
            n_range: [2,5],
            col_range:[3,6],
            size_range:[2,6],
            scale:0.01
          }}}
    />
  </svg>
</Appear>
    </div>
)

const P2PScaling = (
    <div title={"P2P Scaling"}>

      <Heading marginLeft={'0px'} textAlign={'left'}>P2P</Heading>

      <Box width={3/7}>
        <Text fontFamily={'monospace'} style={{marginBottom:"4em"}} fontSize={"32px"}>
          What i will tell u now u will never believe
        </Text>
        <Text fontFamily={'monospace'} fontWeight={'bold'} style={{marginBottom:"3em", color: "#ff0000", filter: "drop-shadow(30px 30px 0px #CCCCCC"}}>
          in a p2p system, everyone is the server.
        </Text>
        <Text fontFamily={'monospace'}>
          (add info from academic torrents vs. AWS)
        </Text>
      </Box>

      <svg width={1920} height={1080} className={'svg-fill'} id={"svg-root"}>
        <Swarm
            position={[1400,500]}
            radius={350}
            name={'swarm'}
            peers={{
              scale: 2,
              names: ['jonny', 'rumbly', 'santi','tito','timothy', 'apple', 'banana', 'kiwi', 'watermelon', 'macarena'],
              datasets:{
                n_range: [2,5],
                col_range:[3,6],
                size_range:[2,6],
                scale:0.01
              }}}
        />
      </svg>
    </div>
)






const Slides = [P2P, P2PScaling]

export default Slides
