export  {}

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2


function drawRectangle () {
    ctx.fillStyle = this.style
    ctx.fillRect(this.x, this.y, this.width, this.height);
}


const rectangle: { width: number; height: number; x: number; y: number; style: string; draw: () => void } = {
    width: 400,
    height: 200,
    x: xCenter - 200,
    y: yCenter - 100,
    style: "red",
    draw: drawRectangle
}
rectangle.draw()


const rectangle2: { width: number; height: number; x: number; y: number; style: string; draw: () => void } = {
    width: 200,
    height: 100,
    x: xCenter - 50,
    y: yCenter - 25,         
    style: "green",
    draw: drawRectangle
}
rectangle2.draw()


const rectangle3: { width: number; height: number; x: number; y: number; style: string; draw: () => void } = {
    width: 50,
    height: 100,
    x: xCenter + 100,
    y: yCenter + 100,
    style: "pink",
    draw: drawRectangle
}
rectangle3.draw()


const circle: { radius: number; x: number; y: number; style: string; draw: () => void } = {
    x: 150,
    y: 150,
    radius: 100,
    style: "blue",
    draw: function () {
        ctx.fillStyle = this.style
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

circle.draw()