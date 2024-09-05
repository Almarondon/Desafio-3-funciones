/* 
<div id="ele1"> hello </div>
<script>
function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
</script>
*/

function pintar(ele, color) {
  ele.style.backgroundColor = color;
}
