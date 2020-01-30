class lFUCache {
    constructor(cacheSize: number) {
        this.cacheSize = cacheSize
        this.cache = {}
    }

    cache: { [key: string]: { usageCount: number; lastUsed: Date; value: any } }
    cacheSize: number

    set(key: string, value: any) {
        this.removeLeastFrequentlyUsedItem()

        this.cache[key] = {
            value,
            usageCount: this.cache[key]?.usageCount == null ? 1 : this.cache[key].usageCount + 1,
            lastUsed: new Date(),
        }

        return this
    }

    get(key: string) {
        if (!this.cache[key]) return null

        this.cache[key].usageCount++
        this.cache[key].lastUsed = new Date()

        return this.cache[key].value
    }

    itemShouldBeRemoved(): boolean {
        return Object.keys(this.cache).length >= this.cacheSize
    }

    removeLeastFrequentlyUsedItem() {
        if (!this.itemShouldBeRemoved()) return

        const sortedEntries = Object.entries(this.cache).sort((a, b) => {
            const usageComparison = a[1].usageCount - b[1].usageCount

            if (usageComparison === 0) return a[1].lastUsed.getTime() - a[1].lastUsed.getTime()

            return usageComparison
        })

        delete this.cache[sortedEntries[0][0]]
    }
}

export default lFUCache
