const App          = PIXI.Application
const load         = PIXI.loader
const resource     = PIXI.loader.resources
const Sprite       = PIXI.Sprite
const TextureCache = PIXI.utils.TextureCache

var app = new App({
	antialias:   true,    // default: false
	transparent: false, // default: false
	autoResize:  true,
	resolution:  1,      // default: 1
})


function updateCanvasSize() {
	var screenWidth  = window.innerWidth
	var screenHeight = window.innerHeight
	app.renderer.resize(screenWidth,screenHeight)
}

updateCanvasSize()
window.addEventListener('resize',updateCanvasSize)

$('body>.wrap').apnd(app.view)

PIXI.loader.add("HERO.png").load(()=>{
	var hero = new Sprite(resource["HERO.png"].texture)
	app.stage.addChild(hero)
})
