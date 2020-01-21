export type Maybe<T> = T | null | undefined;

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type ObjectKey = number | string;
