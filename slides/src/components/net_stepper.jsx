import React, { useState, useEffect } from 'react';
import * as d3 from 'd3'

import * as R from 'ramda';

import { SlideContext, useSteps } from "spectacle";

export function NetStepper(
    {
        netSteps = [],
        stepIndex=0,
        svgId,
        width=1920,
        height=1080
    }
){
  const numberOfSteps = netSteps.length

  const { activeStepIndex, isSlideActive } = React.useContext(SlideContext);
  const { stepId, isActive, stepNum, placeholder } = useSteps(numberOfSteps, {
    stepIndex,
  });

  const [renderNodes, setNodes] = React.useState(netSteps[stepIndex].nodes);
  const [renderLinks, setLinks] = React.useState(netSteps[stepIndex].links);
  const [graph, setGraph] = React.useState(netSteps[stepIndex]);
  const mousedownNode = React.useRef()
  const mouseupNode = React.useRef()

  const simulation = React.useRef();
  const svg = React.useRef();

  const clampX = R.clamp(0, width);
  const clampY = R.clamp(0, height);
  // --------------------------------------
  // initial render network

  function ticked() {
    d3.selectAll(".netstep-node")
    // .data(renderNodes)
    .attr("cx", d => clampX(d.x))
    .attr("cy", d => clampY(d.y))
    .call(drag(simulation.current))
    .on('click', (event, d) => {
      delete d.fx;
      delete d.fy;
      console.log('dragclick', event)
      event.currentTarget.classList.remove('fixed')
      simulation.current.alpha(1).restart();
    })

    d3.selectAll(".netstep-label")
    // .data(renderNodes)
    .attr("x", d => d.x+(d.size*1.2))
    .attr("y", d => d.y+(d.size*1.2))

    try {
      d3.selectAll(".netstep-link").
          // data(renderLinks).
          attr("x1", d => d.source.x).
          attr("y1", d => d.source.y).
          attr("x2", d => d.target.x).
          attr("y2", d => d.target.y);
    } catch (error){
      console.log('caught error')
    }
  }

  useEffect(() => {
    // console.log('init', nodes, links)
    // svg.current = d3.select("#"+svgId);

    // updateGraph(netSteps[stepIndex])
  }, [graph])



  // --------------------------------------
  // Update network
  function updateGraph(graph){
    if (graph === undefined){
      return
    }
    simulation.current = d3.forceSimulation()
    .force("charge", d3.forceManyBody().strength(-200).distanceMax(500))
    .force("link", d3.forceLink().id(d => d.id).distance(200))
        // .force("x", d3.forceX(d => d.x).strength(0.1))
        // .force("y", d3.forceY(d => d.y).strength(0.1))
        .force('center', d3.forceCenter(width/2, height/2).strength(0.01))
        // .force("collisionForce", d3.forceCollide().radius(d=>d.size*1.2))
        .on('tick', ticked);

    let oldnode =  d3.selectAll(".netstep-node").data();
    let nodes, links;

    // nodes = graph.nodes;
    // links = graph.links;
    if (oldnode[0] === undefined){
      nodes = graph.nodes.map(d => Object.assign({}, d));
      links = graph.links.map(d => Object.assign({}, d));;
    } else {
      console.log('oldnode',oldnode)
    const old = new Map(oldnode.filter(d => d !== undefined).map(d => [d.id, d]));
    nodes = graph.nodes.map(d => Object.assign(old.get(d.id) || {x: (d.initx ? d.initx : width/2), y: (d.inity ? d.inity :  height/2)}, d));
        links = graph.links.map(d => Object.assign({}, d));
    // links = graph.links;
      console.log('data',nodes, links)
    }
    console.log('net update', nodes, links)
    simulation.current.nodes(nodes);
    simulation.current.force('link').links(links);
    simulation.current.alpha(1).restart();

    d3.selectAll(".netstep-link").
        data(links).
        attr("x1", d => d.source.x).
        attr("y1", d => d.source.y).
        attr("x2", d => d.target.x).
        attr("y2", d => d.target.y);

    d3.selectAll(".netstep-node")
    .data(nodes)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

    d3.selectAll(".netstep-label")
    .data(nodes)
    .attr("x", d => d.x+(d.size*1.5))
    .attr("y", d => d.y+(d.size*1.5))
    setLinks(links);
    setNodes(nodes);
  }

  useEffect(() => {
    updateGraph(graph)

  }, [graph])


  // --------------------------------------
  // Set steps

  useEffect(() => {
    if (isSlideActive === true){
      // console.log("calling", id, activeStepIndex, animeSteps, activeStep, stepId);
      try {
        setStep(activeStepIndex);
      } catch (e) {
        console.log(e);
      }}
  }, [activeStepIndex])

  const setStep = (stepIdx) => {
    // let old = new Map(nodes.map(d => [d.id, d]));
    // console.log(old)
    // let tempNodes = netSteps[stepIdx].nodes.map(d => Object.assign(nodes.get(d.id) || {}, d));
    // let tempLinks = netSteps[stepIdx].links.map(d => Object.assign({}, d));
    // console.log(tempNodes)
    // console.log(tempLinks)
    // setNodes(tempNodes);
    // setLinks(tempLinks);

    setGraph(netSteps[stepIdx])
    // setLinks(netSteps[stepIdx].links);
    // setNodes(netSteps[stepIdx].nodes);
  }

  const drag = (simulation) => {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
      d3.select(this).classed('fixed', true);
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      // event.subject.fx = null;
      // event.subject.fy = null;

    }

    return d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
  }

  // pause when not mounted
  useEffect(() => {
    if (isSlideActive === true){
      simulation.current.restart()
    } else {
      console.log('stopping net sim');
      simulation.current.stop();
    }
  }, [isSlideActive])

  return(
      <svg id={svgId} width={width} height={height} viewBox={[0,0, width, height]} ref={svg}>
        {placeholder}
        <g id={svgId + "-links"} className={"netstep-links"}>
          {graph && graph.links.map((link, i) => (
            <line {...link} key={'link-'+link.source.id+'-'+link.target.id}
                            id={'link-'+link.source.id+'-'+link.target.id}
                            className={"netstep-link"}
                            strokeWidth={link.value}
                            source={link.source}
                            target={link.target}
              />
          ))}
        </g>
        <g className={"federation-nodes"}>
        {graph && graph.nodes.map((node, i) => (
            <><circle {...node}
                    key={"node-"+node.id}
                    id={node.id}
                    className={"netstep-node"}
                    group={node.group}
                      cx={node.x}
                      cy={node.y}
                    r={node.size ? node.size : 30}
                    fill={node.fill}  />
            <text
              key={'node-label-'+node.id}
              id={node.id + '-label'}
              className={'netstep-label' + " " + node.group}
              group={node.group}
              stroke-width={"5"}
              stroke={"#ffffff"}

            >{node.label ? node.label : node.id}</text>
            </>
        ))}
      </g>
      </svg>
  )

}
