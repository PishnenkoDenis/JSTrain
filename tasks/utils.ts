type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type myReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type MyExtract<T, U> = T extends U ? T : never;

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type MyNonNullable<T> = T extends null | undefined ? never : T;

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

//создает из массива объект, в котором каждый элемент массива будет ключом и значением
type TupleToObject<T extends (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

//keyof any = string | number | symbol
type TupleToObjectAny<T extends (keyof any)[]> = {
  [P in T[number]]: P;
};

//тип который принимает первым аргументом true/false
//и возвращает какои-либо из других двух параметров
type If<C extends boolean, T, F> = C extends true ? T : F;

type MyExclude<T, U> = T extends U ? never : T;

//возвращает тип свойства length
type Length<T extends unknown[]> = T["length"];

//возвращает первый элемент массива
type FirstOfArray<T extends unknown[]> = T extends [] ? never : T[0];

//добавляет в тип массива элемент в конец
type Push<T extends unknown[], U> = [...T, U];

//добавляет в тип массива элемент в начало
type Unshift<T extends unknown[], U> = [U, ...T];

//объединение двух массивов
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

//возвращает свойства объекта в виде строки
type FlatternObjectKeys<
  T extends Record<string, unknown>,
  Key = keyof T
> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${FlatternObjectKeys<T[Key]>}`
    : `${Key}`
  : never;
