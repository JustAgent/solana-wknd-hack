export type KeysOfValue<T, V> =
  { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];

export type PickOfValue<T, V> = Pick<T, KeysOfValue<T, V>>
