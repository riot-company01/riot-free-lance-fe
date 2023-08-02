export const removeObjectKey = <T>(object: T, targetKey: keyof T): T => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { [targetKey]: _, ...rest } = object;
  return rest as T;
};
