class Shape{
    constructor(color){
        this.color = color
    }
    getArea(area = 0){
        console.log(`This generic shape has an area of ${area}`)
    }
}
class Rectangle extends Shape{
    constructor(color, width, height) {
        super(color)
        this.width = width;
        this.height = height
    }
    getArea(){
        let area = this.width * this.height
        console.log(`This rectangle has an area of ${area} sqm`)
        super.getArea(area)
    }
}
class Circle extends Shape{
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
    getArea(){
        console.log(`This circle has a radius of ${this.radius}`)
        super.getArea(this.radius)
    }
}
const genericShape = new Shape('blue');
genericShape.getArea(20)

const cir = new Circle('yellow',20)
cir.getArea()

const rect = new Rectangle('blue',10, 20)
rect.getArea()