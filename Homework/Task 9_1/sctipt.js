// N.09 Домашнее задание Laptop_Ultrabook
// 1. Используйте прототипное наследование. Объявить класс под названием “Laptop”
// 2. Класс “Laptop”. У каждого нового ноутбука есть “название”, “модель”, ”серийный номер”, “год изготовления”, “размер ОЗУ”, “размер ПЗУ”, “масса”. Учтите, что сейчас ноутбуки выпускаются без дисководов, и также присутствует вебкамера. Есть метод который выводит количество «ОЗУ и ПЗУ». Есть метод, который выводит название и модель.
// 3. Класс “Ultrabook”. Есть свойства: “название”, “модель ”, “ серийный номер ”, “ год изготовления ”, “вес”, “размер ОЗУ”, “размер ПЗУ”. Учтите, что сейчас ультрабуки выпускаются без дисководов и есть вебкамера. Есть метод который выводит данные о названии, весе и год изготовления. Есть метод который выводит количество «ОЗУ и ПЗУ»

function Laptop(name, model, serialNum, date, ram, rom, mass, isDrive, isCam){
    this.name = name;
    this.model = model;
    this.serialNum = serialNum;
    this.date = date;
    this.ram = ram;
    this.rom = rom;
    this.mass = mass;
    this.isDrive = isDrive;
    this.isCam = isCam;
}

Laptop.prototype.getCountOfRAMandROM = function(){
    return `ОЗУ ${this.ram} ГБ, ПЗУ ${this.rom} МБ`;
}

Laptop.prototype.getModel = function(){
    return `Название ${this.name}, модель ${this.model}`;
}

function Ultrabook(name, model, serialNum, date, ram, rom, mass, isDrive, isCam){
    Laptop.call(this, name, model, serialNum, date, ram, rom, mass, isDrive, isCam)
}

Ultrabook.prototype = Object.create(Laptop.prototype);
Ultrabook.prototype.constructor = Ultrabook;

Ultrabook.prototype.getModel = function(){
    return `Название ${this.name}, вес ${this.mass} кг, дата изготовления ${this.date}`;
}

let laptop = new Laptop('Dell', 'Inspiron', 'SL4422', 2015, 8, 1000, 5.5, false, false)
let ultra1 = new Ultrabook('Asus', 'Game', 'SL4666', 2020, 16, 2000, 6.7, false, true)
let ultra2 = new Ultrabook('Philips', 'Work', 'SL4546', 2022, 8, 1000, 3.2, true, true)

console.log(laptop.getModel()); // Название Dell, модель Inspiron
console.log(laptop.getCountOfRAMandROM()); // ОЗУ 8 ГБ, ПЗУ 1000 МБ

console.log(ultra1.getModel()); // Название Asus, вес 6.7 кг, дата изготовления 2020
console.log(ultra1.getCountOfRAMandROM()); // ОЗУ 16 ГБ, ПЗУ 2000 МБ

console.log(ultra2.getModel()); // Название Philips, вес 3.2 кг, дата изготовления 2022