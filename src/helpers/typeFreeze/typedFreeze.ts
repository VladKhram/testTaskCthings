type EmptyObject = Record<string, never>;
type TestIdsFunction = () => string;

type TestIdsValues = string | TestIdsFunction;
type TestObjType<Type> = {
  [Key in keyof Type]: Type[Key] extends TestIdsValues
    ? TestIdsValues
    : Type[Key] extends Function | EmptyObject
    ? never
    : Type[Key] extends object
    ? TestObjType<Type[Key]>
    : never;
};

type ReturnObjType<Type> = {
  readonly [Key in keyof Type]: Type[Key] | ReturnObjType<Type[Key]>;
};

export function typedFreeze<T extends TestObjType<T>>(
  object: T
): ReturnObjType<T> {
  Object.preventExtensions(object);
  for (let key in object) {
    Object.defineProperty(object, key, {
      configurable: false,
      writable: false,
    });
  }
  return object;
}

const test = typedFreeze({
  key1: { key2: () => "44", key3: { key4: "ex2" } },
  key7: () => "333",
  key9: "2222",
} as const);
