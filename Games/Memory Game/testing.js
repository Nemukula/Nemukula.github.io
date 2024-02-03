

class Car {
    constructor (brand, color) {
        this.brand = brand;
        this.color = color;
    }

    adi() {
        this.color = 'pink';
        //return 'pink'
    }
}

const aa = new Car('bmw',"blue");

aa.adi()
console.log(aa.color);

//console.log("Hello")