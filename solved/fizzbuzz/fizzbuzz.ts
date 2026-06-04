#! /usr/bin/env node

function fizzbuzz(n = 100) {
  for (let i = 1; i <= n; i++) {
    let value: string | number = ''

    if (i % 3 === 0) value += 'Fizz'
    if (i % 5 === 0) value += 'Buzz'
    if (value === '') value = i

    console.log(value)
  }
}

const arg = process.argv[2] || 100
const n = +arg

if (Number.isNaN(n)) {
  console.error(
    `The first argument must be a number. Instead received "${arg}"`,
  )
  process.exit(1)
}

fizzbuzz(n)

process.exit()
