export type AirportName = string

export type Flight = [AirportName, AirportName]

export default function findItineraryFromFlights(
    flights: Flight[],
    startingAirport: AirportName,
): AirportName[] | null {
    return inner(flights, [], startingAirport)
}

function inner(flights: Flight[], itinerary: AirportName[], startingAirport: AirportName): AirportName[] | null {
    const targetFlight = flights.find((flight) => flight[0] === startingAirport)

    const newItinerary = [...itinerary, startingAirport]

    if (!targetFlight) {
        if (itinerary.length < 2) return null
        return newItinerary
    }

    return inner(
        flights.filter((flight) => flight !== targetFlight),
        newItinerary,
        targetFlight[1],
    )
}
