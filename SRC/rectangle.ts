export  {}

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2

const rectangle = {
    width: 400,
    height: 200,
    x: xCenter - 200,
    y: yCenter - 100
}
drawRectangle(rectangle, "red")

const rectangle2 = {
    width: 200,
    height: 100,
    x: xCenter - 100,
    y: yCenter - 50
}
drawRectangle(rectangle2, "green")

function drawRectangle(rectangle: {width:number; height:number; x:number; y:number}, style: string) {
    ctx.fillStyle = style
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}