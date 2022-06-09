import findClosestPoints, { Point, PointPair } from './findClosestPoints'

type Scenario = { input: Point[]; expected: PointPair }

test('should find closest points', () => {
    const scenarios: Scenario[] = [
        {
            input: [
                [1, 1],
                [-1, -1],
                [3, 4],
                [6, 1],
                [-1, -6],
                [-4, -3],
            ],
            expected: [
                [-1, -1],
                [1, 1],
            ],
        },
        {
            input: [
                [1, 1],
                [0, 1],
                [2, 2],
            ],
            expected: [
                [1, 1],
                [0, 1],
            ],
        },
        {
            input: [
                [78, 105],
                [-453, 56],
            ],
            expected: [
                [78, 105],
                [-453, 56],
            ],
        },
    ]
    scenarios.forEach((scenario) => {
        const target = findClosestPoints(scenario.input)
        expect(target).toContainEqual(scenario.expected[0])
        expect(target).toContainEqual(scenario.expected[1])
    })
})
