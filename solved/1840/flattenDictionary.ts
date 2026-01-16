type Dic<T> = {
  [key: string]: T | Dic<T>
}

type FlattenedDic<T> = {
  [key: string]: T
}

function flattenDictionary<T>(dic: Dic<T>): FlattenedDic<T> {
  return inner(dic)
}

function inner<T>(
  dic: Dic<T>,
  result: FlattenedDic<T> = {},
  prefix: string = '',
  level: number = 1,
): FlattenedDic<T> {
  for (const key in dic) {
    const newKey = `${prefix}${key}`
    if (isPlainObject(dic[key])) {
      inner(dic[key], result, `${newKey}.`, level + 1)
    } else {
      result[newKey] = dic[key] as T
    }
  }

  return result
}

function isPlainObject<T>(obj: unknown): obj is Dic<T> {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = Object.getPrototypeOf(obj)
  return proto === Object.prototype || proto === null
}

export default flattenDictionary
