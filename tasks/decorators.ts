//Декораторы являются инструментом декларативного программирования, они позволяют добавить
//к классам и их членам метаданные и тем самым изменить их поведение без изменения их кода.

//Декораторы представляют функции, которые могут применяться к классам, методам, методом доступа (геттерам и сеттерам),
//свойствам, параметрам.

//ДЕКОРАТОР КЛАССА применяется к конструктору класса и позволяет изменять или заменять определение класса.
//Декоратор класса представляет функцию, которая принимает один параметр:
function classDecoratorFn(constructor: Function) {}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
//Декоратор sealed с помощью функции Object.seal запрещает расширение прототипа класса User.
@sealed
class NewUser {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  print(): void {
    console.log(this.name);
  }
}

//ДEKOРАТОР МЕТОДА также представляет функцию, которая принимает три параметра:
function deprecated(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {}

//Декоратор принимает следующие параметры:
//target - Функция конструктора класса для статического метода, либо прототип класса для обычного метода.
//propertyNmae - Название метода.
//PropertyDescriptor - Объект интерфейса PropertyDescriptor
//Этот объект описывает изменение декорируемого метода:
interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
}

function readable(
  target: Object,
  PropertyKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false;
}

//Декоратор readable с помощью выражения descriptor.writable = false; устанавливает, что метод,
//к которому применяется данный декоратор, не может быть изменен.
class ReadableUser {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @readable
  print(): void {
    console.log(this.name);
  }
}

//ДЕКОРАТОРЫ СВОЙСТВ представляет функцию, которая принимает два параметра:
//Где первый параметр представляет конструктор класса, если свойство статическое, либо прототип класса,
//если свойство нестатическое. А второй параметр представляет имя свойства.
function MyPropertyDecorator(target: Object, propertyKey: string) {
  // код декоратора
}

function format() {
  return function (target: Object, propertyKey: string) {
    let value: string;
    const getter = function () {
      return "Name is" + value; // изменяем возвращаемое значение
    };
    const setter = function (newVal: string) {
      if (newVal.length > 2) {
        // добавляем проверку на длину строки
        value = newVal;
      }
    };
    // устанавливает геттер и сеттер для свойства
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class NamedUser {
  @format()
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  print(): void {
    console.log(this.name);
  }
}

//Декоратор метода доступа принимает три параметра:
function decorator(
  target: Object,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  // код декоратора
}
