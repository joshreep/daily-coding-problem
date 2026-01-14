import { expect, test } from "vitest"
import zigzag from './zigzag'

const tests = [
  {
    string: 'thisisazigzag',
    k: 4,
    expected: `t     a     g
 h   s z   a
  i i   i z
   s     g`,
  },
  {
    string: 'thisisazigzag',
    k: 1,
    expected: 'thisisazigzag',
  },
  {
    string: 'howcoolisthishuh?',
    k: 2,
    expected:`h w o l s h s u ?
 o c o i t i h h`
  },
  {
    string: 'thisisthebestthingihaveeverseeninmylife',
    k: 1000,
    expected: `t
 h
  i
   s
    i
     s
      t
       h
        e
         b
          e
           s
            t
             t
              h
               i
                n
                 g
                  i
                   h
                    a
                     v
                      e
                       e
                        v
                         e
                          r
                           s
                            e
                             e
                              n
                               i
                                n
                                 m
                                  y
                                   l
                                    i
                                     f
                                      e`
  },
]

test.each(tests)('should return a zigzag for $string $k lines high', ({string, k, expected}) => {
    expect(zigzag(string, k)).toBe(expected)
})
