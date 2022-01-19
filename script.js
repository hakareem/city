"use strict"


let blur = document.getElementById('blur');
const onMouseMove = (e) =>{
  blur.style.left = e.pageX + 'px';
  blur.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

