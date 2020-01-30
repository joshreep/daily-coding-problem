import lFUCache from './lFUCache'

describe('lFUCache', () => {
    let cache: lFUCache

    beforeEach(() => {
        cache = new lFUCache(2)
    })

    describe('set', () => {
        it('should set an item on the cache', () => {
            cache.set('key1', 'test1')
            expect(cache.cache.key1.value).toBe('test1')
            expect(cache.cache.key1.usageCount).toBe(1)
            cache.set('key1', 'test1')
            expect(cache.cache.key1.usageCount).toBe(2)
        })
    })

    describe('get', () => {
        it("should return null if key doesn't exist", () => {
            expect(cache.get('key1')).toBeNull()
        })

        it('should return the value for a key', () => {
            cache.set('key1', 'val1')
            expect(cache.get('key1')).toBe('val1')
        })
    })
    
    describe('itemShouldBeRemoved', () => {
        it('should return false when cacheSize is greater than cache', () => {
            expect(cache.itemShouldBeRemoved()).toBe(false)
        })
    
        it('should return true when cacheSize is smaller than cache', () => {
            cache.set('key1', 'val1').set('key2', 'val2')
            expect(cache.itemShouldBeRemoved()).toBe(true)
        })
    })
    
    describe('removeLeastFrequentlyUsedItem', () => {
        it('should return null if item should not be removed', () => {
            cache.set('key1', 'val1')
            expect(cache.removeLeastFrequentlyUsedItem()).toBeUndefined()
        })

        it('should remove least used item based on usage', () => {
            cache.set('key1', 'val1').set('key2', 'val2')
            cache.get('key1')
            cache.removeLeastFrequentlyUsedItem()
            expect(cache.get('key2')).toBeNull()
        })

        it('should remove least used item based on lastUsed', (done) => {
            cache.set('key1', 'val1')
            setTimeout(() => {
                cache.set('key2', 'val2')
                cache.removeLeastFrequentlyUsedItem()
                expect(cache.get('key1')).toBeNull()
                done()
            }, 1000)
        })
    })
})
