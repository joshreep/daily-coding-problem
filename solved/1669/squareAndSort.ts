export default function squareAndSort(intArray: number[]) {
    return intArray.map((int) => int * int).sort((a, b) => a - b)
}
