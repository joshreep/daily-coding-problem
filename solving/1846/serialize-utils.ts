import Node from "./Node";

export function serialize<T>(root: Node<T>): string {
  return serializeInner(root)
}

function serializeInner<T>(root: Node<T> | null): string {
  if (root === null) return 'null'

  return `("${root.val}",${serializeInner(root.left)},${serializeInner(root.right)})`
}

export function deserialize<T>(s: string): Node<T> {
  return deserializeInner(s) as Node<T>
}

function deserializeInner<T>(s: string): Node<T> | null {
  if (s === "null") return null

  const regex = /^(?<node>\("(?<val>[^"]*)",(?<leftAndRight>.*)\))$/g

  const results = s.matchAll(regex).toArray()[0]

  const val = results.groups?.val
  const leftAndRight = results.groups?.leftAndRight

  if (leftAndRight) parseNodeString(leftAndRight)


  return null
}

// ("left",("left.left",null,null),null),("right",null,null)

function parseNodeString(s: string) {
  const matches = s.matchAll(/\(\)/g)

  for (const match of matches) {
    console.log(match)
  }

  console.log(s)
  let parsedNodesPendingCount = 0
  let mostRecentlyFoundIndex = -1

  do {
    const match = /[\(\)]/.exec(s.slice(mostRecentlyFoundIndex+1))
    if (!match) throw new Error('parsing error: expected to find parenthesis')

    mostRecentlyFoundIndex = match?.index
    if (match[0] === '(') {
      parsedNodesPendingCount++
    } else if (match[0] === ')') {
      parsedNodesPendingCount--
    }
    console.log(match)
  } while (parsedNodesPendingCount != 0)

    console.log(mostRecentlyFoundIndex)
}
