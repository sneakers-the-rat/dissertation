import React from 'react';

var MADE_PEERS = {};

import {Dataset,makeDataset} from './dataset';
import {dataset_params, peer_params} from './params';
import {toRadians, randint, isin, whereis, translate_str, drawline} from '../utils';
import anime from 'animejs';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { parse, stringify } from 'transform-parser';
import {SlideContext} from 'spectacle';


export class Peer extends React.Component {
  constructor(props){
    super(props)

    this.peersRefs = React.createRef({});
    this.toggleRef = React.createRef();
    this.requestedBlocks = React.createRef([]);
    this.haveBlocks = React.createRef([]);
    this.timer = React.createRef();


    let originalstate = this.generate(this.props.datasets);
    // console.log('peers originalstate', originalstate)
    this.state = {
      datasets:originalstate.dataset_out,
      position: this.props.position,
      orientation: this.props.orientation,
      peers: this.props.peers,
      showPeers: false,
      peerWindow: {
        scale: 0,
        position: [0,0]
      },
      visible:true
    }

    this.togglePeers = this.togglePeers.bind(this)
    this.requestDataset = this.requestDataset.bind(this)
    this.updateHaveBlocks = this.updateHaveBlocks.bind(this)
    this.uploadLoop = this.uploadLoop.bind(this)
    this.receiveBlock = this.receiveBlock.bind(this)
  }

  componentDidMount() {
    this.updateHaveBlocks();
    MADE_PEERS[this.props.name] = this;
  //   start polling for uploads
    this.timer.current = setTimeout(this.uploadLoop, 1000/this.props.upload);
    this.setState({visible:true})
  }

  componentWillUnmount(){
    this.setState({visible:false})
    try {
      clearTimeout(this.timer.current)
    } catch (e) {
    // do nothing?
      // console.log(e, this.timer)
    }
  }


  generate(datasets){
    let n_datasets;
    let dataset_names;
    let generate_new;
    // console.log('peer datasets', datasets)
    if (Number.isInteger(datasets.n)){
      n_datasets = datasets.n;
      generate_new = true;
    } else {
      n_datasets = Object.keys(datasets).length;
      generate_new = false;
    }
    let dataset_out = {};

    for (let i=0; i<n_datasets; i++){
      // space evenly in dataset_angle
      let position_angle = (this.props.dataset_angle/(n_datasets))*i+((180-this.props.dataset_angle)/2);
      // rotate to be at the bottom

      let display_angle = position_angle- 90;
      let position = [
        (peer_params.outer_radius_scale+peer_params.inner_radius_scale*this.props.upload*this.props.scale) * Math.cos(toRadians(position_angle)),
            (peer_params.outer_radius_scale+peer_params.inner_radius_scale*this.props.upload*this.props.scale) * Math.sin(toRadians(position_angle))
          ]

      let ds_name;
      let cols = [];
      if (generate_new === true) {
        // make some fake columns
        let generated_ds = makeDataset(datasets.col_range, datasets.size_range)
        cols = generated_ds.cols
        ds_name = generated_ds.name
      } else{
        ds_name = Object.keys(datasets)[i]
        cols = datasets[ds_name].cols;
      }
      dataset_out[ds_name] = {
        name: ds_name,
        cols: cols,
        position: position,
        orientation: display_angle,
        scale:peer_params.ds_scale*this.props.scale
      }

    }
    return({dataset_out})
  }

  flattenDataset(dataset){
    let have_blocks = [];
    for (const col of dataset.cols){
      for (const block of col.blocks){
        have_blocks.push([dataset.name, col.name, block])
      }
    }
    return(have_blocks);
  }

  updateHaveBlocks(){
    let have_blocks = []
    let datasets = this.state.datasets;
    // console.log(datasets);
    for (const [dataset_name, dataset] of Object.entries(datasets)){
      for (const col of dataset.cols){
        for (const block of col.blocks){
          have_blocks.push([dataset_name, col.name, block])
        }
      }
    }
    this.haveBlocks = have_blocks
    // console.log(have_blocks);
  }

  uploadLoop(){
    // check if an array is in another array

    try {
      let peersRefs
      try {
        let peers_obj = this.props.getPeers();
        let peers = peers_obj.peers
        peersRefs = peers_obj.peersRefs
      } catch (e){
        console.log('didnt get peers from swarm ', e)
        peersRefs = MADE_PEERS;
        // console.log('made peers', this.props.name, peersRefs)
      }
      // console.log(peersRefs)

      let haveBlocks = JSON.parse(JSON.stringify(this.haveBlocks))

      // iter randomly
      let peer_names = Object.keys(peersRefs);
      let peer_inds = [...Array(peer_names.length).keys()];

      for (let i=0; i<peer_names.length; i++){
        let try_ind = peer_inds.pop()
        let peer_name = peer_names[try_ind];
        if (peer_name === this.props.name){
          continue;
        }
        let peer = peersRefs[peer_name];
        if (this.props.centralized === true && this.props.isServer === false && peer.props.isServer === false){
          continue;
        }
        let requestedBlocks = JSON.parse(JSON.stringify(peer.requestedBlocks))
        // console.log(peer)
        if ((requestedBlocks !== undefined) && (requestedBlocks.length>0)){
          // console.log(this.props.name, this.props, peer, requestedBlocks)
          //  also random iter here
          // console.log(requestedBlocks)
          // let wanted_inds = [...Array(requestedBlocks.length).keys()];
          for (let j=0; j<requestedBlocks.length; i++){
            // let wanted_ind = wanted_inds.pop(randint(0,wanted_inds.length));
            let wanted = requestedBlocks.pop();
            if (wanted === undefined){
              continue
            }
            if (isin(haveBlocks, wanted)){
              peer.receiveBlock(wanted, this.props.name,
                  'dataset-block-' + this.props.name + '-' + wanted[0] + '-' + wanted[1] + '-' + wanted[2])
              break
            }
          }
        }

      }

    } catch (e){
      // console.log('upload error', this.props.name, e)
    } finally{
      if (this.state.visible === true) {
        this.timer.current = setTimeout(this.uploadLoop, 1000 / this.props.upload)
      }
    }


    // arrofarrs.map(subarr => subarr.every((arr_elem, ind) => arr_elem == anarr[ind]))
  }

  receiveBlock(sent_block, sender, block_id){
    // console.log('receive block', this.props.name, sent_block, block_id)
    //
    // // remove from wanted pieces
    let wanted = whereis(this.requestedBlocks, sent_block)
    let wanted_ind = [...wanted.keys()].filter(i => wanted[i])[0]
    this.requestedBlocks.splice(wanted_ind,1)
    //
    // // get block element by id
    let source = document.getElementById(block_id);
    let outline_id = block_id.replace('block', 'outline');
    outline_id = outline_id.replace(sender, this.props.name)
    // // cheat a lil and get the outline to extract coords and make the svg
    let target = document.getElementById(outline_id)
    // console.log(block_id, outline_id)

    // find location of element id in our translational reference frame
    let tms = source.getCTM()


    let svgroot = document.getElementById("svg-root");
    let pt = svgroot.createSVGPoint();
    pt.x = tms.e;
    pt.y = tms.f;

    pt = pt.matrixTransform(target.getCTM().inverse());
    let rotated_tfm = {
      x:pt.x, y:pt.y, rotation:0
    }

    let source_tfm_str = translate_str(rotated_tfm.x, rotated_tfm.y, rotated_tfm.rotation)

    let clone = source.cloneNode();
    clone.style.fill="#ff0000"
    clone.style.transform = source_tfm_str
    clone.id = clone.id.replace(sender, this.props.name)

    let parsed_tfm = parse(target.style.transform);

    // make two lines, gray and red
    let dimline = drawline(rotated_tfm.x, rotated_tfm.y, parsed_tfm.translateX, parsed_tfm.translateY)
    let brightline = drawline(rotated_tfm.x, rotated_tfm.y, parsed_tfm.translateX, parsed_tfm.translateY)
    // dimline.setAttribute('stroke', '#000000')
    // dimline.setAttribute('opacity','0')

    brightline.setAttribute('stroke', peer_params.pulse.in.color)
    brightline.setAttribute('opacity', '0')
    brightline.setAttribute('class', 'transfer-line')
    // console.log('lines',svgroot, dimline, brightline)
    // target.parentElement.appendChild(dimline)
    target.parentElement.appendChild(brightline)
    target.parentElement.appendChild(clone)


    anime({
      targets: clone,
      translateX: parsed_tfm.translateX,
      translateY: parsed_tfm.translateY,
      rotate: parsed_tfm.rotate,
      duration: 1000,
      easing: 'easeInOutCirc',
      delay: 0,
      // elasticity:params.block_hover.elasticity
    })
    let line_tl = anime.timeline()
    line_tl.add({
      targets: brightline,
      easing: 'easeInOutCirc',
      opacity: peer_params.pulse.in.opacity,
      stroke: peer_params.pulse.in.color,
      duration: peer_params.pulse.in.duration
    },0)
    line_tl.add({
      targets: brightline,
      opacity: peer_params.pulse.fade.opacity,
      stroke: peer_params.pulse.fade.color,
      duration: peer_params.pulse.fade.duration
    }, peer_params.pulse.in.duration)
    line_tl.add({
      targets: brightline,
      opacity: peer_params.pulse.out.opacity,
      stroke: peer_params.pulse.out.color,
      duration: peer_params.pulse.out.duration
    }, peer_params.pulse.in.duration+peer_params.pulse.fade.duration)
    line_tl.finished.then(() => brightline.remove())


    this.haveBlocks.push(sent_block)

    // tfm_str_source = "matrix("+tm.a+","+tm.b+","+tm.c+","+tm.d+","+tm.e+","+tm.f+")"
    // tfm_dommat_source = new DOMMatrix(tfm_str_source)
    // tfm_dommat.inverse().multiplySelf(tfm_dommat_source).toString()
    // https://stackoverflow.com/a/26053262
  //   find location of the outline rectangle in our dataset & the expected location
  //   create dom element and svg path between them
  //   remove from
  //   animate
  //  add to our state?
  }

  translate_str(x, y, rotation){
    return('translateX(' + x + 'px) translateY(' + y + 'px) rotate(' +
        rotation + 'deg)')
  }

  togglePeers(){
    let peerWindow;
    let showPeers;
    let peers_obj = this.props.getPeers()
    let peers = peers_obj.peers
    let peersRefs = peers_obj.peersRefs
    // let peers = peer_obj.current.peers
    // let peerRefs = peer_obj.current.peers
    // console.log(peers, peersRefs)
    this.peersRefs.current = peersRefs
    // console.log(this.peersRefs)
    // filter ourselves
    delete peers[this.props.name]
    // console.log(peers)
    // this.setState({peers:peers})
    // make sure the window has the correct info
    // this.forceUpdate()

    if (this.state.showPeers === true){
      //  hide them!
      peerWindow= {
        scale: 0,
        position: [0,0]
      }
      showPeers = false
    } else {
      peerWindow= {
        scale: 1,
        position: [0,-100]
      }
      showPeers = true
    }
    // console.log('peer menu name', 'peer-'+this.props.name+'-peerWindow')
    anime({
      targets:document.getElementById('peer-'+this.props.name+'-peerWindow'),
      scale:peerWindow.scale,
      translateX:peerWindow.position[0],
      translateY:peerWindow.position[1],
      duration: peer_params.send_duration,
    }).finished.then(() => this.setState({peers:peers, peerWindow:peerWindow, showPeers:showPeers}))
  }

  requestDataset(ds_name){
    // console.log('requested', ds_name)

  //  find it
    let ds
    for (let peer_name in this.state.peers){
      if (ds_name in this.state.peers[peer_name].datasets){
        ds = JSON.parse(JSON.stringify(this.state.peers[peer_name].datasets[ds_name]))
        break
      }
    }
    let wanted = this.flattenDataset(ds)
    // clear blocks
    for (let col in ds.cols){
      ds.cols[col].blocks = []
    }
    let new_datasets = JSON.parse(JSON.stringify(this.state.datasets))
    new_datasets[ds_name] = ds
    let regen_datasets = this.generate(new_datasets)

    this.setState({datasets:regen_datasets.dataset_out})
    if (this.requestedBlocks === undefined || this.requestedBlocks.current === null){
      this.requestedBlocks = wanted
    } else {
      for (let wanted_block of wanted){
        if (!isin(this.requestedBlocks, wanted_block)){
          this.requestedBlocks.push(wanted_block)
        }
      }
    }
    this.togglePeers()
  }


  render(){
    // console.log('peer render', this.state.datasets)
    let dataset_svgs = []
    for (let dataset_name in this.state.datasets){
      let dataset = this.state.datasets[dataset_name]
      dataset_svgs.push(
          <Dataset
              outlines={true}
              key={dataset_name}
              peerName={this.props.name}
              fast={this.props.fast}
              {...dataset}/>)

    }

    let windowPeers = this.state.peers;
    try{
      let { peersRefs } = this.props.getPeers();
      if (this.props.centralized === true && this.props.isServer === false){
        // console.log(windowPeers)
        windowPeers = Object.fromEntries(Object.entries(windowPeers).filter(([key, val]) => peersRefs[key].props.isServer === true));
        // console.log(windowPeers)
      }

      for (let peerName in windowPeers){
        windowPeers[peerName].datasets = peersRefs[peerName].state.datasets
      }



    } catch(e){
      console.log('couldnt filder peers', e)
    }






    return(
        <g style={{transform: this.translate_str(this.state.position[0], this.state.position[1], this.state.orientation)}}
           id={'peer-'+this.props.name}
           className={'peer'}
        >
          <circle cx={0} cy={0} r={peer_params.inner_radius_scale*this.props.upload*this.props.scale}
                  className={'peer-circle-inner'}
                  onClick={this.togglePeers}
                  onMouseEnter={enterHover}
                  onMouseLeave={exitHover}/>
          <circle cx={0} cy={0} r={peer_params.outer_radius_scale*this.props.upload*this.props.scale}
                  className={'peer-circle-outer'}/>
          {dataset_svgs}
          <PeerWindow
              ref={this.toggleRef}
              stylestr={{transform:"scale("+this.state.peerWindow.scale+") translate("+this.state.peerWindow.position[0]+', '+this.state.peerWindow.position[1]+') rotate('+this.state.orientation*-1+"deg)"}}
              id={'peer-'+this.props.name+'-peerWindow'}
              peers={windowPeers}
              requestDataset={this.requestDataset}
          />
        </g>
    )
  }
}

Peer.defaultProps = {
  name:'',
  datasets:{
    n: 3,
    col_range: [3,6],
    size_range: [2,15]
  },
  position: [0, 0],
  orientation: 0,
  scale: 1,
  dataset_angle: 120,
  upload:2,
  download:1,
  peers: {},
  fast: false,
  centralized: false,
  isServer: false
}

let last_name = 97;
export function makePeer(n_range, col_range, size_range){
  let n_datasets = randint(n_range[0], n_range[1])
  let datasets = {};
  for (let i=0; i<n_datasets; i++){
    let ds = makeDataset(col_range, size_range)
    datasets[ds.name] = ds;
  }

  let peer = {
    name: String.fromCharCode(last_name),
    datasets
  }
  last_name += 1;

  return(peer)
}

// --------------------------------------

class PeerWindow extends React.Component {
  render(){
    // console.log('peer window', this.props.peers)
    return(
        <foreignObject
            width={peer_params.window.width}
            height={peer_params.window.height}
            // ref={this.props.ref}
            style={this.props.stylestr}
            id={this.props.id}>
          <div className={'peer-window-container'}>
            <Paper>
              <List className={'peer-window'} disablePadding>
                {Object.keys(this.props.peers).map((peer_name) => (
                    <li key={`section-${peer_name}`}
                        className={'peer-window-section'}>
                      <ul>
                        <ListSubheader>{`${peer_name}`}</ListSubheader>
                        {this.props.peers[peer_name].datasets ?
                            Object.keys(this.props.peers[peer_name].datasets).
                                map((item) => (
                                    <ListItem key={`item-${peer_name}-${item}`}
                                              button
                                              onClick={(event) => (this.props.requestDataset(
                                                  `${item}`))}>
                                      <ListItemText primary={`${item}`}/>
                                    </ListItem>
                                )) :
                            null}
                      </ul>
                    </li>
                ))}
              </List>
            </Paper>
          </div>
        </foreignObject>
    )
  }
}

function hoverScale(button, scale, duration) {
  // https://codepen.io/betaimages/pen/MWYvNRj
  anime.remove(button)
  anime({
    targets: button,
    scale: {
      value: scale,
      duration: duration,
      easing: 'easeOutElastic',
    },
    delay: 0,
    // elasticity:params.block_hover.elasticity
  })
}

function enterHover(event) {
  let button = event.target
  if (button.className.baseVal === 'peer-circle-inner') {
    hoverScale(
        button,
        peer_params.inner_hover.scale,
        peer_params.inner_hover.duration_enter
    )
  }
}

function exitHover(event) {
  let button = event.target
  if (button.className.baseVal === 'peer-circle-inner') {
    hoverScale(button, 1, peer_params.inner_hover.duration_exit)
  }
}



