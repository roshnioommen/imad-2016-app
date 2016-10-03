console.log('Loaded!');
//Change element
var element = document.getElementById(`main-text`);
element.innerHTML = `New Value`; 
var img = document.getElementById(`roshni`);
element.innerHTML = `New Value`;
function moveRight () {
   marginLeft = marginLeft+10; 
}
img.onclick = function () {
   var interval = setInterval(moveRight, 100);
    
};