import './templateEngine'

const template = "My name is ${name}, I'm ${age} years old, and I'm a ${job.name}"
const employee: Params<string | number> = {
    name: 'Fatfish',
    age: 100,
    job: {
        name: 'Software Engineer',
    },
}
const expectedValue = "My name is Fatfish, I'm 100 years old, and I'm a Software Engineer"

test('should inject all matching values into template string', () => {
    expect(template.render(employee)).toBe(expectedValue)
})

test('should inject all matching values into template string when extra properties given', () => {
    const target = () => template.render({ ...employee, foo: 'bar' })
    expect(target).not.toThrow()
    expect(target()).toBe(expectedValue)
})

test('should throw error if property is included in template and is not included in params', () => {
    expect(() => template.render({ name: 'Fatfish', age: 100 })).toThrowError(
        '${job.name} was included in the template, but was not included in the given parameters.  Please include it in the params object.',
    )
})
