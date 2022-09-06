const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

var netSimRunning = true;

const container = d3.select('.netbg');

const svg = container.append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", [-width/2, -height/2, width, height]);

const simulation = d3.forceSimulation()
    // .force("charge", d3.forceManyBody().strength(0.5))
    .force("link", d3.forceLink().id(d => d.id).distance(50).strength(0.005))
    .force("x", d3.forceX(d => d.x))
    .force("y", d3.forceY(-height*2).strength(0.0003))
    // .force("center",d3.forceCenter(0,-height/2))
    .force("collisionForce", d3.forceCollide().radius(d=>d.size*1.2))
    .on("tick", ticked);

let link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-width", 1.5)
    .attr("stroke-opacity", 0.6)
  .selectAll("line");

let node = svg.append("g")
    // .attr("stroke", "#555")
    // .attr("stroke-width", 1.5)
  .selectAll("circle");

function ticked() {

  node.attr("cx", d => d.x)
      .attr("cy", d => d.y)

  link.attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
}


function update({nodes, links}) {

    // Make a shallow copy to protect against mutation, while
    // recycling old nodes to preserve position and velocity.
    // const old = new Map(node.data().map(d => [d.id, d]));
    // nodes = nodes.map(d => Object.assign(old.get(d.id) || {}, d));
    // links = links.map(d => Object.assign({}, d));


    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).restart().tick();

    node = node
      .data(nodes, d => d.id)
      .join(enter => enter.append("circle")
        .attr("r", 3)
        .attr("fill", "#ccc"));

    link = link
      .data(links, d => `${d.source.id}\t${d.target.id}`)
      .join("line");

    // ticked();
  }



var graph = {
  nodes: [
    {id: "1"},
    {id: "2"}
  ],
  links: [
    {source: "1", target: "2"}
  ]
}

let maxNode = graph.nodes.length;

function newNode(graph){
  console.log('newnode')
  maxNode = maxNode + 1;
  graph.nodes.push({
    id:maxNode.toString(),
    x:Math.random()*width-width/2,
    y:height/2
  })
  return(graph)
}

function sample(arr){
  return(arr[Math.floor(Math.random()*arr.length)])
}

function dist(a, b){
  return(Math.sqrt(
    Math.pow(a.x-b.x, 2)+Math.pow(a.y-b.y,2)
  ))
}

const linkHeat = 200;

function newLink(graph){
  // randomly select node
  let sourceNode = sample(graph.nodes)
  let links = graph.links;
  let nodes = graph.nodes;

  // find a nonredundant link
  let existingTargets = links
    .filter(l => l.source === sourceNode.id)
    .map(l => l.target)
  let targetNodes = nodes
  .filter(l => !existingTargets.includes(l.id))
  .filter(l => l.id !== sourceNode.id)

  // find closest possible link
  if (targetNodes.length === 0){
    return({links:links, nodes:nodes})
  }

  let targetNode = targetNodes.reduce(
      (prevTarget, thisTarget) => {
        // console.log('distances', dist(sourceNode, thisTarget), dist(sourceNode, prevTarget))
        return(dist(sourceNode, thisTarget) < dist(sourceNode, prevTarget)+(Math.random()*linkHeat) ? thisTarget : prevTarget)
      }
    )
  
  if (targetNode === undefined){
    return({links:links, nodes:nodes})
  }
  // console.log('graph', graph)
  // console.log('source node', sourceNode)
  // console.log('existing targets', targetNodes)
  // console.log('target node', targetNode)

  

  links.push({
    source: sourceNode.id, target: targetNode.id
  })
  return({links:links, nodes:nodes})
}

function cleanGraph(graph){
  // remove nodes and links that have gone offscreen
  const links = graph.links;
  const nodes = graph.nodes;

  let validNodes = nodes.filter(n => n.y>-height/2)
  let validNodeIDs = nodes.map(n => n.id);
  let validLinks = links.filter(l => validNodeIDs.includes(l.source.id))

  return({nodes: validNodes, links: validLinks})
}

let node_chance = 0.5;
let link_chance = 0.9;

function updateGraph(){

  graph = cleanGraph(graph);

  if (Math.random()<node_chance){
    graph = newNode(graph)
  }

  if (Math.random()<link_chance){
    graph = newLink(graph)
  }

  // console.log(graph)
  update(graph)
  if (netSimRunning === true){
    setTimeout(updateGraph, 100);
  }
}

function toggleStart(){
  netSimRunning = !netSimRunning;
  if (netSimRunning === true){
    updateGraph();
  }
}

// const color = d3.scaleOrdinal(d3.schemeTableau10)


update(graph);
updateGraph();