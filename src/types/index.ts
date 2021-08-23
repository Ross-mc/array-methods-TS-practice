export type mapCallback<T> = (v: T, idx: number, arr: T[]) => T;

export type filterCallback<T> = (v: T, idx: number, arr: T[]) => boolean;

export type generatedData = {
  numberArr: number[]
}