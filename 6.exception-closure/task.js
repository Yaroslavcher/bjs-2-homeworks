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
    get perimeter() {
        return this._perimeter;
    }
    set perimeter(perimeter) {
        this._perimeter = perimeter;
    }
    
    get area() {
        //let halfPerimeter = this.perimeter/2;
        //let square = Math.sqrt(halfPerimeter*(halfPerimeter - a)*(halfPerimeter - b)*(halfPerimeter - c));
        return this._area;
    }
    set area(area) {
        this._area = area;
    }

    getTriangle(a, b, c) {
        try {
            return new Triangle();
        } catch (error) {
            if (this._perimeter instanceof String || this._area instanceof String) {
                const obj = new Triangle(this.perimeter = "Ошибка! Треугольник не существует", this.area = "Ошибка! Треугольник не существует");
                return obj;
            }
        }
    }
}
const triangle = new Triangle(6,10,15);
triangle.perimeter = "неправильное значение";
triangle.area = "неправильное значение";