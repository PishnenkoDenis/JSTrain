function objectKeys<T extends Record<keyof any, unknown>>(
  object: T
): (keyof T)[] {
  return Object.keys(object);
}
