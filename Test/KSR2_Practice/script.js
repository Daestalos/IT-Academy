function InflatableBoat(boatLength, boatWeight, boatHeight, carrying, country, isHasMotor, countOfSeats){
    this.boatLength = boatLength;
    this.boatWeight = boatWeight;
    this.boatHeight = boatHeight;
    this.carrying = carrying;
    this.countOfSeats = countOfSeats;
    this.country = country;
    this.isHasMotor = isHasMotor;
}

InflatableBoat.prototype.getBoatInfo = function(){
    return `Длинна: ${this.boatLength}, Ширина: ${this.boatWeight}, Вес: ${this.boatHeight}`
}

InflatableBoat.prototype.getBoatCarrying = function(){
    return this.carrying < 220 ? this.carrying : `Данная грузоподъемность не соответствует лодке`
}

function Boat(boatLength, boatWeight, boatHeight, carrying, country, isHasMotor, countOfSeats, serviceLife){
    InflatableBoat.call(this, boatLength, boatWeight, boatHeight, carrying, country, isHasMotor, countOfSeats)
    this.serviceLife = serviceLife;
}

Boat.prototype = Object.create(InflatableBoat.prototype);
Boat.prototype.constructor = Boat;

function Yacht(boatLength, boatWeight, boatHeight, carrying, country, isHasMotor){
    InflatableBoat.call(this, boatLength, boatWeight, boatHeight, carrying, country, isHasMotor)
}

Yacht.prototype = Object.create(InflatableBoat.prototype);
Yacht.prototype.constructor = Yacht;

let inflatableBoat1 = new InflatableBoat(50, 50, 10, 10, 2, 'Беларусь', true)
let boat1 = new Boat(120, 200, 50, 190, 4, 'Беларусь', true, '10 лет')
let yacht1 = new Yacht(300, 300, 200, 300, 'Беларусь', true)

console.log(inflatableBoat1.getBoatInfo()); // Длинна: 50, Ширина: 50, Вес: 10
console.log(boat1.getBoatInfo()); // Длинна: 120, Ширина: 200, Вес: 50
console.log(yacht1.getBoatInfo()); // Длинна: 300, Ширина: 300, Вес: 200

console.log(inflatableBoat1.getBoatCarrying()); // 10
console.log(boat1.getBoatCarrying()); // 190
console.log(yacht1.getBoatCarrying()); // Данная грузоподъемность не соответствует лодке

