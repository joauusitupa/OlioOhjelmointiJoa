export  {}

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2

const width = 400
const height = 200
const x = xCenter - (width / 2)
const y = yCenter - (height / 2)


ctx.fillStyle = "red"
ctx.fillRect(x, y, width, height);

const width2 = 200
const height2 = 100
const x2 = xCenter - (width / 4)
const y2 = yCenter - (height / 4)


ctx.fillStyle = "green"
ctx.fillRect(x2, y2, width2, height2);