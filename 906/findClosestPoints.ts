export type Point = [number, number]
export type PointPair = [Point, Point]

export default function findClosestPoints(points: Point[]): PointPair {
    if (points.length === 2) return points as PointPair

    if (points.length <= 1) throw new Error('Must provide at least 2 points to compare')

    let closestPoints: PointPair = [
        [-Infinity, -Infinity],
        [Infinity, Infinity],
    ]
    let closestDistance = Infinity

    points.forEach((pointA, indexA) => {
        const remainingPoints = points.slice(indexA + 1)
        if (remainingPoints.length >= 2) {
            remainingPoints.forEach((pointB) => {
                const distance = getDistance(pointA, pointB)
                if (distance < closestDistance) {
                    closestDistance = distance
                    closestPoints = [pointA, pointB]
                }
            })
        }
    })

    return closestPoints
}

function getDistance(point1: Point, point2: Point) {
    const xDistance = getOneDimensionalDistance(point1, point2, 0)
    const yDistance = getOneDimensionalDistance(point1, point2, 1)
    return getHypotenuse(xDistance, yDistance)
}

function getOneDimensionalDistance(point1: Point, point2: Point, index: 0 | 1) {
    return Math.abs(point1[index] - point2[index])
}

function getHypotenuse(xDistance: number, yDistance: number) {
    return Math.sqrt((xDistance ^ 2) + (yDistance ^ 2))
}
