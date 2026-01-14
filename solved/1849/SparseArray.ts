export default class SparseArray<T> {
  entries: Record<number, T> = {}
  size: number

  constructor(arr: (T | 0)[], size: number) {
    this.size = size
    arr.forEach((item, idx) => {
      if (item !== 0) {
        this.entries[idx] = item
      }
    })
  }

  set(i: number, val: T | 0) {
    this.validateBounds(i)

    if (val === 0) delete this.entries[i]
    else this.entries[i] = val
  }

  get(i: number): T | 0 {
    this.validateBounds(i)
    return this.entries[i] ?? 0
  }

  private validateBounds(i: number) {
    if (i > this.size) throw new Error('out of bounds')
  }

  static getByteSize (object: unknown): number {
    const jsonString = JSON.stringify(object)
    return Buffer.byteLength(jsonString, 'utf-8')
  }
}
