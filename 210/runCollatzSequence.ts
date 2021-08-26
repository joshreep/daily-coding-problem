#! /usr/bin/env node

import collatzSequence from './collatz'

const n = process.argv[2]

console.log(collatzSequence(+n))

process.exit()
