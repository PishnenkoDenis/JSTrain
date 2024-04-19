//Generics исп-ся в:
//Типы
//Интерфейсы
//Функции
//Классы

type GenericType<T> = T & { name: string };

interface GenericInterface<T> {
  key: T;
  name: string;
}

const genericFunc = <T>(value: T) => value;

class GenericClass<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }

  setValue(newValue: T) {
    this.value = newValue;
  }
}

//При использовании дженериков с типами и интерфейсами нужно передавать параметры
type Test1 = GenericType<{ age: number }>;
type Test2 = GenericInterface<number>;

//Дженерики могут иметь дефолтные значения
type Box<T = unknown> = { value: T };
interface Optional<T = string> {
  value?: T;
}

//Ограничение дженериков
function withString<T extends string>(value: T) {
  return value.charCodeAt(value.indexOf("a"));
}

//Использование более узких дженериков для составления из простых типов сложных
function pushArray<T>(arr: T[], item: T) {
  arr.push(item);
  return arr;
}

//Завязка дженериков друг на друга
//Например для уточнения типов ключей объекта
function get<Obj extends object, Key extends keyof Obj>(object: Obj, key: Key) {
  return object[key];
}

//TypeGuard's и Дженерик параметры
function isNonNullable<T>(value: T): value is NonNullable<T> {
  return typeof value !== "undefined" && value !== null;
}

const result = [1, 2, "3", null, undefined].filter(isNonNullable); //1,2,'3'

//PropertyKey - string|number|symbol
function hasOwn<Obj extends object>(
  object: Obj,
  key: PropertyKey
): key is keyof Obj {
  return Object.hasOwn(object, key);
}

//Типизация ф-ии фильтрации массива по типу number
function filter<Item, FilteredItem extends Item>(
  arr: Item[],
  predicate: (
    value: Item,
    index: number,
    originalArr: Item[]
  ) => value is FilteredItem
) {
  return arr.filter(predicate);
}

const isNumber = (value: unknown): value is number => typeof value === "number";

const numbers = filter([1, 2, 3, "4", null], isNumber); //[1, 2, 3]

//in - оператор для дженерика, который явно указывает что тип исп-ся как input-type(входящий)
//out - оператор, указывающий исходящий тип

class Base {
  a = 22;
}

class Specific extends Base {
  b = 42;
}

type Getter<out T> = () => T;
type Setter<in T> = (value: T) => void;

//in out - в случае дженерика с входящими и исходящими типами
interface GetterAndSetter<in out T> {
  get: () => T;
  set: (val: T) => void;
}
