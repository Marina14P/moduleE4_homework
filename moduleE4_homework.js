// Задание 1. Функция для вывода ключей и значений собственных свойств объекта //

function logOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}


// Задание 2. Функция для проверки наличия свойства в объекте //

function hasProperty(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}
 // Пояснение:
// Функция принимает строку propertyName и объект obj.
// Метод hasOwnProperty проверяет, есть ли у объекта собственное свойство с указанным именем.//


// Задание 3. Функция для создания пустого объекта без прототипа //

function createEmptyObject() {
    return Object.create(null);
}


// Задание 4. //

function ElectroDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPluggedIn = false;
}

ElectroDevice.prototype.plugIn = function() {
    this.isPluggedIn = true;
    console.log(`${this.name} is plugged in.`);
}

ElectroDevice.prototype.unplug = function() {
    this.isPluggedIn = false;
    console.log(`${this.name} is unplugged.`);
}


function Lamp(name, power, brightness) {
    ElectroDevice.call(this, name, power);  // вызов родительского конструктора
    this.brightness = brightness;  // собственное свойство лампы
}

// Установка прототипа
Lamp.prototype = Object.create(ElectroDevice.prototype);
Lamp.prototype.constructor = Lamp;

// Собственный метод лампы
Lamp.prototype.adjustBrightness = function(level) {
    this.brightness = level;
    console.log(`${this.name} brightness set to ${this.brightness}.`);
}


function Computer(name, power, type) {
    ElectroDevice.call(this, name, power);  // вызов родительского конструктора
    this.type = type;  // собственное свойство компьютера
}

// Установка прототипа
Computer.prototype = Object.create(ElectroDevice.prototype);
Computer.prototype.constructor = Computer;

// Собственный метод компьютера
Computer.prototype.installSoftware = function(software) {
    console.log(`${software} is being installed on ${this.name}.`);
}


// Создание экземпляров
const tableLamp = new Lamp('Table Lamp', 60, 'Medium');
const homeComputer = new Computer('Home Computer', 300, 'Desktop');

// Подключение приборов к розетке
tableLamp.plugIn();
homeComputer.plugIn();

// Расчет общей потребляемой мощности
function calculateTotalPower(devices) {
    return devices.reduce((total, device) => {
        if (device.isPluggedIn) {
            return total + device.power;
        }
        return total;
    }, 0);
}

// Список всех устройств
const devices = [tableLamp, homeComputer];

console.log(`Total power consumption: ${calculateTotalPower(devices)}W.`);


// Задание 5. //

class ElectroDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPluggedIn = false;
    }

    plugIn() {
        this.isPluggedIn = true;
        console.log(`${this.name} is plugged in.`);
    }

    unplug() {
        this.isPluggedIn = false;
        console.log(`${this.name} is unplugged.`);
    }
}

class Lamp extends ElectroDevice {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness(level) {
        this.brightness = level;
        console.log(`${this.name} brightness set to ${this.brightness}.`);
    }
}

class Computer extends ElectroDevice {
    constructor(name, power, type) {
        super(name, power);
        this.type = type;
    }

    installSoftware(software) {
        console.log(`${software} is being installed on ${this.name}.`);
    }
}

const tableLamp = new Lamp('Table Lamp', 60, 'Medium');
const homeComputer = new Computer('Home Computer', 300, 'Desktop');

tableLamp.plugIn();
homeComputer.plugIn();

function calculateTotalPower(devices) {
    return devices.reduce((total, device) => {
        if (device.isPluggedIn) {
            return total + device.power;
        }
        return total;
    }, 0);
}

const devices = [tableLamp, homeComputer];

console.log(`Total power consumption: ${calculateTotalPower(devices)}W.`);


