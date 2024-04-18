type TUser = {
  name: string;
  age: number;
};

function fetchUser() {
  return Promise.resolve({ name: "User", age: 42 });
}
const recieveUser = (user: TUser) => console.log(user);

//typeGard's - typeof, if/else, оператор in ('key' in object)

//typeGuard исп-ся чтобы убедиться, что значения из сторонних источников яв-ся определенного тип
//Когда необходимо сужение типа значения (number | undefined) => number
function userGuard(data: unknown): data is TUser {
  return (
    typeof data === "object" && data !== null && "name" in data && "age" in data
  );
}

//returnType с использованием оператора is означает
//что если функция возвращает true, то переданный ей аргумент яв-ся string
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

fetchUser().then((data: any) => {
  if (userGuard(data)) {
    recieveUser(data);
  }
});

//typeAsserts - механизм генерации ошибки если проверка типа не прошла
//asserts означает, что если value не яв-ся строкой функция возвр-ет ошибку
// отличается от typeGuarg, которые возвр-ют true/false, тем, что выбрасывют ошибку если проверка не проходит
function assertString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("error");
  }
}

function assertObject(value: unknown): asserts value is object {
  if (value === null || typeof value !== "object") {
    throw new Error("Error");
  }
}
