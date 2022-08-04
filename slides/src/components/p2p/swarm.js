import React from 'react';
import { Peer, makePeer } from './peer';

import {toRadians, translate_str} from '../utils';
import {swarm_params} from './params';

export class Swarm extends React.Component{
  constructor(props) {
    super(props);


    // this.req_fns = React.createRef({});

    let originalstate = this.generate();

    // this.peersRefs = React.createRef(Object.fromEntries(
    //     Object.entries(originalstate.peers).map(
    //         ([peer_name, val]) => [peer_name, React.createRef()])
    //     )
    // );

    this.peersRefs = {}

    this.state = {
      peers: originalstate.peers,
      position: this.props.position,
      orientation: this.props.orientation,
      server: originalstate.server
    }

    // Array.from({length: 2}, a => useRef(null));
    //
    // Object.keys(originalstate.peers).map(peer_name => )

    this.getPeers = this.getPeers.bind(this);
  }
  getRef(peer_nameelement){
    // this.peersRefs[]
  }

  generate(){
    let n_peers, peer_names;
    if (Number.isInteger(this.props.peers.n)){
      n_peers = this.props.peers.n;
      peer_names = false
    } else {
      n_peers = this.props.peers.names.length;
      peer_names = this.props.peers.names;
    }

    let peers = {};
    let n_range = this.props.peers.datasets.n_range;
    for (let i=0; i<n_peers; i++){
      let peer = makePeer(n_range,
          this.props.peers.datasets.col_range,
          this.props.peers.datasets.size_range)
      if (Array.isArray(peer_names) ){
        peer.name = peer_names[i]
      }
      let position_angle = (360/n_peers)*i;
      peer.orientation = position_angle-90;
      peer.position = [
          this.props.radius*Math.cos(toRadians(position_angle)),
          this.props.radius*Math.sin(toRadians(position_angle))
      ]
      this.peer
      // this.peersRefs.current[peer.name] = React.createRef();
      peers[peer.name] = peer
      // console.log(peer)


    }

    if (this.props.centralized === true){
      peers[this.props.server.name] = {
        name: this.props.server.name,
        dataset_angle: this.props.server.datasetAngle,
        upload:this.props.server.upload,
        download:this.props.server.download,
        position: [0,0],
        orientation: 0,
        isServer: true,
        datasets:{
          n: 0,
          col_range: [3,6],
          size_range: [2,15]
        }
      }
    }


    return({peers})

  }

  getPeers(){
    //  give a peer the list of other peers!
    return({peers:JSON.parse(JSON.stringify(this.state.peers)),
    peersRefs:this.peersRefs})
  }

  render(){
    let peer_svgs = []
    for (let peer_name in this.state.peers){
      let peer = this.state.peers[peer_name]
      peer_svgs.push(
          <Peer {...peer}
                getPeers={this.getPeers}
                key={peer.name}
                scale={this.props.peers.scale}
                fast={true}
                centralized={this.props.centralized}
                ref={(element) => this.peersRefs[peer.name] = element}/>);
    }
    return(
        <g style={{transform: translate_str(this.state.position[0], this.state.position[1], this.state.orientation)}}
          id={'swarm-'+this.props.name}
           className={'swarm'}
        >
          {peer_svgs}
        </g>
    )

  }
}

Swarm.defaultProps = {
  name:'',
  radius:500,
  peers: {
    names: ['jonny', 'rumbly'],
    datasets:{
      n_range: [2,5],
      col_range:[3,6],
      size_range:[2,6]
    },
    scale:0.01
  },
  position: [0, 0],
  orientation: 0,
  scale: 1,
  center: false,
  centralized: false,
  server: {
    name: 'servy',
    upload: 10,
    download: 10,
    datasetAngle:120
  }
}
