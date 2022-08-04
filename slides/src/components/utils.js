

export function toRadians(angle){
  return angle * (Math.PI / 180);
}

export function translate_str(x, y, rotation){
  return('translateX(' + x + 'px) translateY(' + y + 'px) rotate(' +
      rotation + 'deg)')
}

export function randint(min, max){
  return(Math.floor(Math.random()*(max-min))+min)
}

export function isin(outer_array, array){
//  check if an array is in outer_array
  return(outer_array.some(subarr => subarr.every((arr_elem, ind) => arr_elem == array[ind])))
}

export function whereis(outer_array, array){
//  return  bool array of matches of array in outer_array
  return(outer_array.map(subarr => subarr.every((arr_elem, ind) => arr_elem == array[ind])))
}

export function outersvg(element){
//  get the svg that's our outermost parent
//   lazily for now
  return document.getElementById('svg-root');
}

export function relative_tfm(source, target){
  let root_svg = outersvg(target);

}

export function drawline(x1,y1,x2,y2){
  var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  aLine.setAttribute('x1', x1);
  aLine.setAttribute('y1', y1);
  aLine.setAttribute('x2', x2);
  aLine.setAttribute('y2', y2);
  return(aLine)
}

export function distance(p1, p2) {
  let a = p1.x - p2.x;
  let b = p1.y - p2.y;
  return Math.sqrt(a * a + b * b);
}
