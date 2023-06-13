/* а) Используйте прототипное наследование.
б) Базовый класс должен состоять из минимум 6 различных свойств.
в) Каждый класс - наследник должен расширять базовый класс и включать два или более дополнительных свойства.
г) Каждый класс - наследник должен унаследовать как минимум 1 метод из родительского класса. Также добавьте по одному уникальному методу каждому классу наследнику.


Класс «Растение». Наследуемые классы: папоротник и ель обыкновенная. Возможные поля: название, описание, вид, возраст, класс, размер соцветия, класс опасности, ареал произрастания, область применения (в пищевой промышленности, в получении лекарственных препаратов, в сельском хозяйстве...), первооткрыватель, место произрастания и т.д. */

function Plant(name, description, view, age, classView, dangerClass){
    this.name = name;
    this.description = description;
    this.view = view;
    this.age = age;
    this.classView = classView;
    this.dangerClass = dangerClass;

    this.isDanger = () => `Моя опасность на уровне: ${this.dangerClass}`
    this.info = () => `Я: ${this.name}, ${this.description}. Мой вид: ${this.view} и мне ${this.age} лет`
}

function Fern(name, description, view, age, classView, dangerClass, inflorescenceSize, ApplicationArea){
    Plant.call(this, name, description, view, age, classView, dangerClass)
    this.inflorescenceSize = inflorescenceSize;
    this.ApplicationArea = ApplicationArea;

    this.inflorescenceSizeInfo = () => `Мой размер соцветия - ${this.inflorescenceSize}`
    this.info = () => `Я: ${this.name}. Мой вид: ${this.view} и мне ${this.age} лет. Я используюсь в ${this.ApplicationArea}`
}

function FirTree(name, description, view, age, classView, dangerClass, discoverer, placeOfGrowth){
    Plant.call(this, name, description, view, age, classView, dangerClass)
    this.discoverer = discoverer;
    this.placeOfGrowth = placeOfGrowth;

    this.discovererInfo = () => `Мой первооткрыватель ${this.discoverer}`
}

let plant = new Plant ('Ландыш', 'Вид травянистых цветковых растений', 'Цветковое растение', '2 месяца', 'Медицинское растение', 'Опасный')
let fern = new Fern('Папоротник', 'Вид травянистый растений', 'Отдел сосудистых растений', '3 месяца', 'Медицинское растение', 'Безопасный', 4, 'Горы, леса, пустыни и тропики')
let firTree = new FirTree('Ель обыкновенная', 'Растение', 'Материал', '20 лет', 'Древесный материал', 'Средняя опасность', 'Picea abies (L.) H.Karst., 1881', 'северо-востоке Европы')

console.log(plant.info()); // Я: Ландыш, Вид травянистых цветковых растений. Мой вид: Цветковое растение и мне 2 месяца лет
console.log(plant.isDanger()); // Моя опасность на уровне: Опасный

console.log(fern.info()); // Я: Папоротник. Мой вид: Отдел сосудистых растений и мне 3 месяца лет. Я используюсь в Горы, леса, пустыни и тропики
console.log(fern.inflorescenceSizeInfo()); // Мой размер соцветия - 4

console.log(firTree.isDanger()); // Моя опасность на уровне: Средняя опасность
console.log(firTree.discovererInfo()); // Мой первооткрыватель Picea abies (L.) H.Karst., 1881


// <-------------------------- Prototype -------------------------------->

function Plant(name, description, view, age, classView, dangerClass){
    this.name = name;
    this.description = description;
    this.view = view;
    this.age = age;
    this.classView = classView;
    this.dangerClass = dangerClass;
}

Plant.prototype.isDanger = function (){
    return `Моя опасность на уровне: ${this.dangerClass}`
}
Plant.prototype.info = function(){
    return `Я: ${this.name}, ${this.description}. Мой вид: ${this.view} и мне ${this.age}`
}

function Fern(name, description, view, age, classView, dangerClass, inflorescenceSize, ApplicationArea){
    Plant.call(this, name, description, view, age, classView, dangerClass)
    this.inflorescenceSize = inflorescenceSize;
    this.ApplicationArea = ApplicationArea;
}

Fern.prototype = Object.create(Plant.prototype);
Fern.prototype.constructor = Fern;

Fern.prototype.inflorescenceSizeInfo = function (){
    return `Мой размер соцветия - ${this.inflorescenceSize}`
}
Fern.prototype.info = function(){
    return `Я: ${this.name}. Мой вид: ${this.view} и мне ${this.age}. Я используюсь в ${this.ApplicationArea}`
}

function FirTree(name, description, view, age, classView, dangerClass, discoverer, placeOfGrowth){
    Plant.call(this, name, description, view, age, classView, dangerClass)
    this.discoverer = discoverer;
    this.placeOfGrowth = placeOfGrowth;
}

FirTree.prototype = Object.create(Plant.prototype);
FirTree.prototype.constructor = FirTree;

FirTree.prototype.discovererInfo = function(){
    return `Мой первооткрыватель ${this.discoverer}`
}

let plant1 = new Plant ('Ландыш', 'Вид травянистых цветковых растений', 'Цветковое растение', '2 месяца', 'Медицинское растение', 'Опасный')
let fern1 = new Fern('Папоротник', 'Вид травянистый растений', 'Отдел сосудистых растений', '3 месяца', 'Медицинское растение', 'Безопасный', 4, 'Горы, леса, пустыни и тропики')
let firTree1 = new FirTree('Ель обыкновенная', 'Растение', 'Материал', '20 лет', 'Древесный материал', 'Средняя опасность', 'Picea abies (L.) H.Karst., 1881', 'северо-востоке Европы')

console.log(plant1.info()); // Я: Ландыш, Вид травянистых цветковых растений. Мой вид: Цветковое растение и мне 2 месяца
console.log(plant1.isDanger()); // Моя опасность на уровне: Опасный

console.log(fern1.info()); // Я: Папоротник. Мой вид: Отдел сосудистых растений и мне 3 месяца. Я используюсь в Горы, леса, пустыни и тропики
console.log(fern1.inflorescenceSizeInfo()); // Мой размер соцветия - 4

console.log(firTree1.info()); // Я: Ель обыкновенная, Растение. Мой вид: Материал и мне 20 лет
console.log(firTree1.isDanger()); // Моя опасность на уровне: Средняя опасность
console.log(firTree1.discovererInfo()); // Мой первооткрыватель Picea abies (L.) H.Karst., 1881