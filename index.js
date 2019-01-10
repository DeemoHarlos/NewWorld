var canvas = $('canvas#main')

function updateCanvasSize() {
	var screenWidth  = window.innerWidth
	var screenHeight = window.innerHeight
	canvas.attr('width' ,screenWidth )
	canvas.attr('height',screenHeight)
}

updateCanvasSize()
window.addEventListener('resize',updateCanvasSize)

var ctx = canvas.getContext('2d');