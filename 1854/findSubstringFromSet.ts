function findSubstringFromSet(string: string, set: string[]): string | null {
    const substrings = findAllSubstrings(string.split(''), set)

    if (!substrings.length) return null
    
    return substrings.sort((a, b) => a.length - b.length)[0]
}

function findAllSubstrings(chars: string[], set: string[], subStrings: string[] = []): string[] {
    const [firstSubstring, idx] = findFirstSubstring(chars, set)

    if (!firstSubstring) return subStrings

    return findAllSubstrings(chars.slice(idx + 1), set, [...subStrings, firstSubstring])
}

function findFirstSubstring(chars: string[], set: string[]): [string, number] | [null, null] {
    if (!includesAll(chars, set)) return [null, null]

    const firstIndex = chars.findIndex(char => set.includes(char))
    const subStrChars: string[] = []

    const found = chars.slice(firstIndex).some((char) => {
        subStrChars.push(char)
        return includesAll(subStrChars, set)
    })

    return found ? [subStrChars.join(''), firstIndex] : [null, null]
}

function includesAll<T>(arr1: T[], arr2: T[]): boolean {
    return arr2.every(item => arr1.includes(item))
}

export default  findSubstringFromSet