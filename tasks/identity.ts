function identity<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}

identity([1, 2, 3]);
identity("string");
identity({ name: "Rox", length: 1 });
