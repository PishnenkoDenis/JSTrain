//Record<K, T> - создает новый объектный тип (object type), ключами которого являются Keys, а значениями свойств - Type.
//Эта утилита может использоваться для сопоставления свойств одного типа с другим типом
type NewRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type Ids = 1 | 2 | 3;
type User = {
  name: string;
  password: string;
  phone: number;
};
type UserMap = Record<Ids, User>;

//Pick<Type, Keys> - создает новый тип посредством извлечения из Type набора (множества)
//свойств Keys (Keys - строковый литерал или их объединение)
type NewPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type PartialUser = Pick<User, "password" | "phone">;

function pick<Obj extends Record<string, unknown>, Keys extends keyof Obj>(
  object: Obj,
  keys: Keys[]
): Pick<Obj, Keys> {
  const result = {} as Pick<Obj, Keys>;
  keys.forEach((key) => {
    result[key] = object[key];
  });

  return result;
}

//Omit<Type, Keys> - создает новый тип посредством исключения из Type набора свойств Keys
type NewOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type OmitedUser = Omit<User, "name" | "password">;

function omitObj<Obj extends Record<string, unknown>>(
  object: Obj
): Omit<Obj, "name"> {
  const { name: _, ...rest } = object;

  return rest;
}

//Extract<Type, Union> - создает новый тип посредством извлечения из Type(Union) всех членов объединения,
//которые могут быть присвоены Union
type NewExtract<T, U> = T extends U ? T : never;

type Extracted = Extract<string | number | (() => void), Function>; //() => void

function isNumberExtract<T>(value: T): value is Extract<T, number> {
  return typeof value === "number";
}

const arr = [1, 2, 3, "test", null, undefined].filter(isNumberExtract); //[1,2,3]-массив содержит кокретные значения, а не number[]

//Exclude<UnionType, ExcludedMembers> - создает новый тип посредством исключения из UnionType всех членов объединения,
//которые могут быть присвоены (assignable) ExcludedMembers
type NewExclude<T, U> = T extends U ? never : T;

type Excluded = Exclude<string | number | (() => void), Function>; //string | number

function isNotNumber<T>(value: T): value is Exclude<T, number> {
  return typeof value === "number";
}

const test = [1, 2, 3, "test", null].filter(isNotNumber); //["test", null]

//NonNullable - создает новый тип посредством исключения из Type значений null и undefined
type NewNonNullable<T> = T extends null | undefined ? never : T;

type Value = string | number | undefined;
type NewValue = NonNullable<Value>; //string | number

function isNonNullable<T>(value: T): value is NonNullable<T> {
  return typeof value !== "undefined" && value !== null;
}

//Partial<Type> - делает все свойства Type опциональными (необязательными)
type NewPartial<T> = {
  [P in keyof T]?: T[P];
};

type PartUser = Partial<User>;

//Required<Type> - делает все свойства Type обязательными
type NewRequired<T> = {
  [P in keyof T]-?: T[P];
};

type RequiredUser = Required<PartUser>;

//Readonly<Type> - делает все свойства Type доступными только для чтения (readonly)
type NewReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadonlyUser = Readonly<User>;

function freeze<T extends object>(object: T): Readonly<T> {
  return Object.freeze(object);
}

//Parameters - создает кортеж (tuple) из типов параметров функции Type
type NewParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type FnParams = Parameters<(a: number, b: string) => void>; //[a: number, b: string]

//ReturnType<Type> - извлекает тип значения, возвращаемого функцией Type
//ReturnType исп-ся для автоматического определения типов из Store(redux).На основе типа значения, которое
//возвращает функция store.getState()
type NewReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type FnReturn = ReturnType<() => number>; //number

//Awaited - создает тип, возвращаемый промисом
type Prom = Awaited<Promise<number>>; //number

const asyncFunc = () => Promise.resolve({ a: 22, b: "42" });

type FromPromise = ReturnType<typeof asyncFunc>; //{a: number; b: string}

//В функциях Function Declaration можно задать какой this она должна использовать
function func(this: Window) {
  return this.innerHeight;
}

//InstanceType<T> -принимает конструктор и возвращает тип инстанса, который создает этот констр-р

class Test {
  a = 22;
  constructor(a: number) {
    this.a = a;
  }
}

type TestA = InstanceType<new () => Test>;
type TestB = InstanceType<{ new (): Test }>;

//ConstructorParameters<T> - принимает тип конструктора и возвращает параметры,
//которые он получает при инициализации
type Params = ConstructorParameters<typeof Test>; //[a: number]

//OmitThisParameter<T> - принимает тип функции и возвращает этот тип без this
type OmitParams = OmitThisParameter<(this: Window, a: number) => void>; //(a: number) => void

//ThisParameterType<T> - принимает функцию и возвращает this из ее параметров
type ThisParam = ThisParameterType<(this: Window, a: number) => void>; //Window
