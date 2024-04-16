type TUser = {
  name: string;
  age: number;
};

function fetchUser() {
  return Promise.resolve({ name: "User", age: 42 });
}
const recieveUser = (user: TUser) => console.log(user);

function userGuard<T extends TUser>(data: T): Boolean {
  return (
    typeof data === "object" && data !== null && "name" in data && "age" in data
  );
}

fetchUser().then((data: any) => {
  if (userGuard(data)) {
    recieveUser(data);
  }
});
