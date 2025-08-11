const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw')
    }
}
circle.draw();

//factories
function makeCircle(rad, xaxis, yaxis) {
    return {
        radius: rad,
        location: {
            x: xaxis,
            y: yaxis
        }
    }
}
//constructor
class circles {
    constructor(radius, xaxis, yaxis) {
        this.radius = radius;
        this.location = { xaxis, yaxis }
        this.draw = () => {
            console.log('draw')
        }
    }
}
const newCircle = new circles(1, 2, 2)

function updateDim(x, y) {
    this.location.xaxis = x
    this.location.yaxis = y
}
updateDim.apply(newCircle, [10, 10])