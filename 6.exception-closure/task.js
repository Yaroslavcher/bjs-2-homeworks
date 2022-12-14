function parseCount(number) {
    if (Number.isNaN(Number.parseFloat(number))) {
        throw new Error ("Невалидное значение");
    }
    return Number.parseFloat(number);
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.perimeter = a + b + c;
        this.area = +Math.sqrt(this.perimeter/2*(this.perimeter/2 - a)*(this.perimeter/2 - b)*(this.perimeter/2 - c)).toFixed(3);
    }
    checkTriangle(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }    
        
    }
    
}
function getTriangle(a, b, c) {
        
    try {return new Triangle();
    } catch (error) {
        return Triangle = {
            get perimeter() {console.log("Ошибка! Треугольник не существует")},
            get area() {console.log("Ошибка! Треугольник не существует")}
        }
}
}        
var newTriangle = {
    a: 6,
    b: 10,
    c: 15,
    get perimeter() {return this.a + this.b + this.c},
    get area() {return +Math.sqrt(this.perimeter/2*(this.perimeter/2 - this.a)*(this.perimeter/2 - this.b)*(this.perimeter/2 - this.c)).toFixed(3)}
}    

/*try {
    if (this._perimeter instanceof String || this._area instanceof String) {
    throw new Error("Ошибка! Треугольник не существует");
}  else {return new Triangle(a, b, c);}
}    catch (error){
    return Triangle.
}*/