// ### Задание 1

class Car{
    constructor(model, weight, amountFuelUsed, distanceTraveled){
        this.model = model;
        this.weight = weight;
        this.amountFuelUsed = amountFuelUsed;
        this.distanceTraveled = distanceTraveled;
    }

    getFuelConsumption(){
        return `Расход топлива автомобиля: ${(this.amountFuelUsed / this.distanceTraveled) * 100}`;
    }
}

let car = new Car('mersedes', 2000, 30, 300);

console.log(car.getFuelConsumption());


// ### Задание 2

class Car2{
    constructor(model, weight, amountFuelUsed, distanceTraveled){
        this._model = model;
        this._weight = weight;
        this._amountFuelUsed = amountFuelUsed;
        this._distanceTraveled = distanceTraveled;
    }

    get FuelConsumption(){
        return `Расход топлива автомобиля: ${(this._amountFuelUsed / this._distanceTraveled) * 100}`;
    }

}

let car2 = new Car2('mersedes', 2000, 30, 300);

console.log(car2.FuelConsumption); // Расход топлива автомобиля: 10


// ### Задание 3

class Car3{
    constructor(model, weight, amountFuelUsed, distanceTraveled){
        this._model = model;
        this._weight = weight;
        this._amountFuelUsed = amountFuelUsed;
        this._distanceTraveled = distanceTraveled;
    }

    get FuelConsumption(){
        return `Расход топлива автомобиля: ${(this._amountFuelUsed / this._distanceTraveled) * 100}`;
    }

    set amountFuelUsed(amountFuelUsed){
        this._amountFuelUsed = amountFuelUsed
    }

    set distanceTraveled(distanceTraveled){
        this._distanceTraveled = distanceTraveled
    }

}

let car3 = new Car3('mersedes', 2000, 30, 300);

console.log(car3.FuelConsumption); // Расход топлива автомобиля: 10
car3.amountFuelUsed = 50;
car3.distanceTraveled = 400;
console.log(car3.FuelConsumption); // Расход топлива автомобиля: 12.5

// ### Задание 4

class CustomString{
    constructor(){}

    static reverse(str){
        return str.split('').reverse().join('')
    }

    static capFirstWord(str){
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    static capAllWords(str){
        return str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
    }
    
}

console.log(CustomString.reverse('строка'));
console.log(CustomString.capFirstWord('строка'));
console.log(CustomString.capAllWords('эта строка с меленькими буквами'));

// ### Задание 5

class Plant{
    constructor(name, description, view, age, classView, applicationArea, dangerClass, discoverer){
        this.name = name;
        this.desctiption = description;
        this.view = view;
        this.age = age;
        this.classView = classView;
        this.applicationArea = applicationArea;
        this._dangerClass = dangerClass;
        this._discoverer = discoverer;
    }

    set dangerClass(dangerClass){
        this._dangerClass = dangerClass
    }

    set discoverer(discoverer){
        this._discoverer = discoverer
    }

    get dangerClass(){
        return `Я: ${this.name} и мой класс: ${this._dangerClass}`
    }

    get discoverer(){
        return `Мой первооткрыватель: ${this._discoverer}`
    }

    fullInfo(){
        return `Я: ${this.name}, Вид ${this.desctiption}. Мой вид: ${this.view} и мне ${this.age}`
    }

    getApplicationArea(){
        return `Я используюсь в: ${this.applicationArea}`
    }

}

let plant =  new Plant ('Ландыш', 'Вид травянистых цветковых растений', 'Цветковое растение', '2 месяца', 'Медицинское растение', '', '')
plant.dangerClass = 'Опасный';
plant.discoverer = 'Информация отсутствует'
console.log(plant.discoverer);
console.log(plant.getApplicationArea());

class Fern extends Plant{
    constructor(name, description, view, age, classView, ApplicationArea, placeOfGrowth){
        super(name, description, view, age, classView, ApplicationArea);
        this._placeOfGrowth = placeOfGrowth;
    }

    set placeOfGrowth(placeOfGrowth){
        this._placeOfGrowth = placeOfGrowth
    }

    get placeOfGrowth(){
        return `Я нахожусь в ${this._placeOfGrowth}`
    }
}

let fern = new Fern('Папоротник', 'Вид травянистый растений', 'Отдел сосудистых растений', '3 месяца', 'Медицинское растение');
console.log(fern.fullInfo()); // Я: Папоротник, Вид Вид травянистый растений. Мой вид: Отдел сосудистых растений и мне 3 месяца
fern.placeOfGrowth =  'Горы, леса, пустыни и тропики';
console.log(fern.placeOfGrowth); // Я нахожусь в Горы, леса, пустыни и тропики

class FirTree extends Plant{
    constructor(name, description, view, age, classView, ApplicationArea, inflorescenceSize){
        super(name, description, view, age, classView, ApplicationArea);
        this._inflorescenceSize = inflorescenceSize
    }

    set inflorescenceSize(inflorescenceSize){
        this._inflorescenceSize = inflorescenceSize
    }

    get inflorescenceSize(){
        return `Мой рост достигает ${this._inflorescenceSize} метров`
    }
}

let firTree = new FirTree('Ель обыкновенная', 'Хвойное дерево, вид рода Ель семейства Сосновые','Растение', '20 лет', 'Материал', 'Древесный материал', 'строительстве')
firTree.inflorescenceSize = 50;
console.log(firTree.inflorescenceSize); // Мой рост достигает 50 метров
console.log(firTree.fullInfo()); // Я: Ель обыкновенная, Вид Хвойное дерево, вид рода Ель семейства Сосновые. Мой вид: Растение и мне Материал
console.log(firTree.getApplicationArea());
