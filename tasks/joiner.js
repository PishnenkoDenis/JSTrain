function joiner(separator, ...args) {
  return args.join(separator);
}

console.log(joiner("*", "s", "t", "r", "i", "n", "g"));
