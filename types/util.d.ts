export {}

declare global {
  type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

  type Prettify<T> = {} & { [K in keyof T]: T[K] }

  type MaybeNull<T> = T | null
}
