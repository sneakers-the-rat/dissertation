import React from 'react';
import random from 'random';
import anime from 'animejs/lib/anime.es.js';
import {dataset_params} from './params';
import {distance, randint} from '../utils';

function gauss(mean = 0, variance = 1) {
  return (
    Math.sqrt(-2 * Math.log(1 - Math.random())) *
      Math.cos(2 * Math.PI * Math.random()) *
      variance +
    mean
  )
}



export class Dataset extends React.Component {
  // props
  // --------------------------------------
  // cols: [{name: "name_of_col", size:int},...]
  // name: str
  // scatter: [h_center, h_size, v_center, v_size]

  constructor(props) {
    super(props)

    let svgs = this.generate_svg()
    let originals = JSON.parse(JSON.stringify(svgs))
    let scattered_blocks = { ...svgs.blocks }
    let scattered = false
    if (this.props.scatter.x.scale > 0 || this.props.scatter.y.scale > 0) {
      scattered_blocks = this.doscatter(scattered_blocks)
      scattered = true
    }

    this.state = {
      originals: originals,
      header: svgs.header,
      blocks: scattered_blocks,
      outlines: svgs.outlines,
      labels: svgs.labels,
      position: this.props.position,
      orientation: this.props.orientation,
      scattered: scattered,
    }

  }

  componentDidMount() {}

  componentDidUpdate() {}

  translate_str(x, y, rotation){
    return('translateX(' + x + 'px) translateY(' + y + 'px) rotate(' +
        rotation + 'deg)')
  }

  generate_svg() {
    let n_cols = this.props.cols.length
    const scale = this.props.scale
    const padding = dataset_params.padding * scale
    const block_size = dataset_params.block_size * scale

    let blocks = {}
    let labels = {}

    // --------------------------------------
    // header
    // --------------------------------------
    // compute main rect width
    let header_width =
      dataset_params.block_size * n_cols + dataset_params.padding * (n_cols - 1)
    // the center of the header is the centerpoint of the svg
    // let center = {x: header_width/2, y: params.header_height/2};
    let header = {
      x: 0,
      y: 0,
      rotation: 0,
      attrs: {
        width: header_width * scale,
        height: dataset_params.header_height * scale
      }
    }

    labels['header'] = {
      x: 0,
      y: -padding / 2,
      rotation: 0,
      text: this.props.name.toUpperCase(),
      attrs: {
        key: 'header-label',
        textAnchor: 'start',
        id: 'dataset-label-header-' + this.props.name,
        className: 'dataset-label header-label',
        fontSize: "3rem"
      }
    }

    // --------------------------------------
    // blocks
    // iterate through cols and make the blocks
    let top = { x: 0, y: header.attrs.height + padding }

    let col_n = 0

    for (let col_name in this.props.cols) {
      let col = this.props.cols[col_name]
      blocks[col.name] = []
      let col_x = top.x + col_n * block_size + col_n * padding
      for (let i = 0; i < col.size; i++) {
        if (Array.isArray(col.blocks)){
          if (!col.blocks.includes(i)){
            blocks[col.name].push(false)
            continue
          }
        }
        blocks[col.name].push({
          x: col_x,
          y: top.y + i * block_size + i * padding,
          rotation: 0,
          attrs: {
            width: block_size,
            height: block_size,
            id: 'dataset-block-' + this.props.peerName + '-' + this.props.name + '-' + col.name + '-' + i,
            key: 'dataset-block-' + this.props.peerName + '-' + this.props.name + '-' + col.name + '-' + i,
            className: 'dataset-block',
            blocknumber:i
          }
        })
      }

      // make label for column
      labels[col.name] = {
        x: col_x + block_size / 2,
        y: top.y + padding * 2,
        rotation: 90,
        attrs: {
          textAnchor: 'end',
          text: col.name,
          className: 'dataset-label',
          id: 'dataset-label-' + this.props.peerName + '-' +  this.props.name + '-' + col.name,
          key: 'dataset-label-' + this.props.peerName + '-' + this.props.name + '-' + col.name
        }
      }

      col_n += 1
    }

    col_n = 0
    let outlines = {}
    if (this.props.outlines === true) {
      for (let col in this.props.cols) {
        col = this.props.cols[col]
        outlines[col.name] = []
        for (let i = 0; i < col.size; i++) {
          outlines[col.name].push({
            x: top.x + col_n * block_size + col_n * padding,
            y: top.y + i * block_size + i * padding,
            rotation: 0,
            attrs:{
              width: block_size,
              height: block_size,
              className:'dataset-outline',
              id:'dataset-outline-' +this.props.peerName + '-' +  this.props.name + '-' + col.name + '-'+ i,
              key: 'dataset-outline-' +this.props.peerName + '-' +  this.props.name + '-' + col.name + '-' + i
            }
          })
        }
        col_n += 1
      }
    }

    // hover effects
    return { header, blocks, outlines, labels }
  }

  toggle_scatter() {
    // separate from doscatter because can't use setState on construction
    let moveto
    let scattered

    if (this.state.scattered === true) {
      moveto = JSON.parse(JSON.stringify(this.state.originals.blocks))
      scattered = false
    } else {
      moveto = this.doscatter(this.state.blocks)
      scattered = true
    }

    this.moveBlocks(moveto)
    this.setState({ scattered: scattered })
  }

  moveBlocks(blocks) {
    let tl = anime.timeline({
      easing: 'easeOutElastic',
      delay: 0,
      duration: 1000,
    })

    for (let colname in blocks) {
      let col = blocks[colname]
      for (let block_i in col) {
        let block = col[block_i]

        // get distance of travel
        let dist = distance(
          {
            x: this.state.blocks[colname][block_i].x,
            y: this.state.blocks[colname][block_i].y,
          },
          {
            x: block.x,
            y: block.y,
          }
        )
        // console.log(block.attrs.id, block.x, block.y, dataset_params.unscatter_delay_scale, dist)
        tl.add(
          {
            targets: document.getElementById(block.attrs.id),
            translateX: { value: block.x, duration: 1000 },
            translateY: { value: block.y, duration: 1000 },
            rotate: { value: block.rotation, duration: 100 },
          },
          dataset_params.unscatter_delay_scale * dist
        )
      }
    }

    tl.finished.then(() => this.setState({ blocks: blocks }))
    // this.setState({blocks: blocks});
  }

  // --------------------------------------
  doscatter(scatterme) {
    if (
      this.props.scatter.x.scale > 0 ||
      this.props.scatter.y.scale > 0 ||
      this.props.scatter.rotate === true
    ) {
      let x_generator = random.exponential(this.props.scatter.x.lambda)
      let y_generator = random.exponential(this.props.scatter.y.lambda)
      for (let colname in scatterme) {
        let col = scatterme[colname]
        for (let i = 0; i < col.length; i++) {
          // calculate amount to translate h & v
          let x_trans =
            x_generator() * this.props.scatter.x.scale +
            this.props.scatter.x.offset
          let y_trans =
            y_generator() * this.props.scatter.y.scale +
            this.props.scatter.y.offset

          scatterme[colname][i]['x'] += x_trans
          scatterme[colname][i]['y'] += y_trans

          if (this.props.scatter.rotate === true) {
            // random rotation
            scatterme[colname][i]['rotation'] = Math.random() * 360
          }
        }
      }
    }
    return scatterme
  }

  render() {
    // --------------------------------------
    // labels
    let labels_svg = []
    for (let labname in this.state.labels) {
      let label = this.state.labels[labname]
      let translate_str = this.translate_str(label.x, label.y, label.rotation)
      labels_svg.push(
          <text
              {...label.attrs}
              style={{transform: translate_str}}
          >{label.text}</text>)
    }

    // --------------------------------------
    // blocks
    let blocks_svg = []
    for (let col in this.state.blocks) {
      for (let block in this.state.blocks[col]) {

        block = this.state.blocks[col][block]
        // console.log(block)
        if (!block === false){
          blocks_svg.push(
            <rect
              {...block.attrs}
              style={{transform: this.translate_str(block.x, block.y, block.rotation)}}
              onMouseEnter={enterHover}
              onMouseLeave={exitHover}
            />
        )}
      }
    }

    // --------------------------------------
    // outlines
    let outlines_svg = []
    if (this.props.outlines === true) {
      for (let col in this.state.outlines) {
        for (let outline in this.state.outlines[col]) {
          outline = this.state.outlines[col][outline]
          outlines_svg.push(
            <rect
              {...outline.attrs}
              style={{ transform: this.translate_str(outline.x, outline.y, outline.rotation) }}
            />
          )
      }
    }
    }

    // --------------------------------------
    // rotations

    let rootname = this.props.fast ? "dataset fast" : "dataset"

    return (
      <g
        style={{ transform: this.translate_str(this.props.position[0], this.props.position[1], this.props.orientation) }}
        id={'dataset-' + this.props.name}
        className={rootname}
      >
        <rect
          {...this.state.header.attrs}
          style={{ transform: this.translate_str(this.state.header.x, this.state.header.y, this.state.header.rotation) }}
          className={'dataset-header'}
          id={'dataset-header-' + this.props.name}
          onClick={() => this.toggle_scatter()}
          onMouseEnter={enterHover}
          onMouseLeave={exitHover}
        />
        {outlines_svg}
        {blocks_svg}
        {labels_svg}
      </g>
    )
  }
}

// --------------------------------------
// component params

Dataset.defaultProps = {
  name:'',
  peerName:'',
  position: [0, 0],
  orientation: 0,
  scatter: {
    x: { scale: 0, lambda: 0.5, offset: 0 },
    y: { scale: 0, lambda: 0.5, offset: 0 },
    rotate: false,
  },
  pieces: true,
  outlines: true,
  scale: 1,
  fast: false
}


let current_name = 97;
export function makeDataset(col_range, size_range, full=true){
  let n_cols = randint(col_range[0], col_range[1]);
  let cols = [];
  for (let j=0; j<n_cols; j++){
    let col_size = randint(size_range[0], size_range[1]);
    let blocks;
    if (full === true){
      blocks= [...Array(col_size).keys()]
    } else {
      blocks= []
    }
    cols.push({
      name:j,
      size: col_size,
      blocks:blocks
    })
  }
  let dataset = {
    name: String.fromCharCode(current_name),
    cols: cols,
    position: [0,0],
    orientation: 0,
    scale:1
  }
  current_name += 1;

  return(dataset)
}

const styles = {
  block: {
    width: dataset_params.block_size,
    height: dataset_params.block_size,
  },
  header: {
    fill: 'blue',
  },
  col_label: {
    textAnchor: 'end',
  },
}

// --------------------------------------
// anime.js

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
  if (button.className.baseVal === 'dataset-block') {
    hoverScale(
      button,
      dataset_params.block_hover.scale,
      dataset_params.block_hover.duration_enter
    )
  } else if (button.className.baseVal === 'dataset-header') {
    hoverScale(
      button,
      dataset_params.header_hover.scale,
      dataset_params.block_hover.duration_enter
    )
  }
}

function exitHover(event) {
  let button = event.target
  if (button.className.baseVal === 'dataset-block') {
    hoverScale(button, 1, dataset_params.block_hover.duration_exit)
  } else if (button.className.baseVal === 'dataset-header') {
    hoverScale(button, 1, dataset_params.block_hover.duration_enter)
  }
}

