import findItineraryFromFlights, { AirportName, Flight } from './findItineraryFromFlights'

test.each<{ given: [Flight[], AirportName]; expected: AirportName[] | null }>([
    {
        given: [
            [
                ['SFO', 'HKO'],
                ['YYZ', 'SFO'],
                ['YUL', 'YYZ'],
                ['HKO', 'ORD'],
            ],
            'YUL',
        ],
        expected: ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'],
    },
    {
        given: [
            [
                ['SFO', 'COM'],
                ['COM', 'YYZ'],
            ],
            'COM',
        ],
        expected: null,
    },
    {
        given: [
            [
                ['A', 'B'],
                ['A', 'C'],
                ['B', 'C'],
                ['C', 'A'],
            ],
            'A',
        ],
        expected: ['A', 'B', 'C', 'A', 'C'],
    },
])('should find the itinerary from flights', ({ given, expected }) => {
    expect(findItineraryFromFlights(...given)).toEqual(expected)
})
