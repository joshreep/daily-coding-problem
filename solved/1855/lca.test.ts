import lca, { Node } from './lca'

/*
   TEST TREE
       a       k
    /    \
  b       c
 / \     / \
d   e   h   i
   / \       \
  f   g       j

Step 1: Look at each parent and see if there are commonalities
Step 2: 

*/

const nodeA = new Node('a')
const nodeB = nodeA.addChild('b')
const nodeC = nodeA.addChild('c')
const nodeD = nodeB.addChild('d')
const nodeE = nodeB.addChild('e')
const nodeF = nodeE.addChild('f')
const nodeG = nodeE.addChild('g')
const nodeH = nodeC.addChild('h')
const nodeI = nodeC.addChild('i')
const nodeJ = nodeI.addChild('j')
const nodeK = new Node('k')

const tests = [
    {v: nodeF, w: nodeG, expected: 'e'},
    {v: nodeA, w: nodeJ, expected: 'a'},
    {v: nodeG, w: nodeD, expected: 'b'},
    {v: nodeH, w: nodeJ, expected: 'c'},
]

tests.forEach(({v, w, expected}) => {
    test(
        `should find the lowest common ancestor (${expected}) when given ${v} and ${w}`, 
        () => {
            expect(lca(v, w).toString()).toBe(expected)
        }
    )
})


test('should throw if nodes are not in the same tree', () => {
    expect(() => lca(nodeK, nodeJ)).toThrow('malformed binary tree')
})