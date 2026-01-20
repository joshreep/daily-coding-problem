import { expect, test } from 'vitest'
import matchingAlgorithm, { Pairs, type Preferences } from './problem'

type Guys = 'andrew' | 'bill' | 'chester'
type Gals = 'caroline' | 'abigail' | 'betty'

const preferences: Preferences<Guys, Gals> = {
  guyPreferences: {
    andrew: ['caroline', 'abigail', 'betty'],
    bill: ['caroline', 'betty', 'abigail'],
    chester: ['betty', 'caroline', 'abigail'],
  },

  galPreferences: {
    abigail: ['andrew', 'bill', 'chester'],
    betty: ['bill', 'andrew', 'chester'],
    caroline: ['bill', 'chester', 'andrew'],
  },
}

const guys = Object.keys(preferences.guyPreferences)
const gals = Object.keys(preferences.galPreferences)

test('should pair the men and women together appropriately.', () => {
  const pairs = matchingAlgorithm(preferences)
  Object.keys(preferences.guyPreferences).forEach((guy) => {
    Object.keys(preferences.galPreferences).forEach((gal) => {
      expect(
        guyAndGalWouldRatherBeWithEachOther(guy as Guys, gal as Gals, pairs),
      ).toBe(false)
    })
  })
})

function guyAndGalWouldRatherBeWithEachOther(
  guy: Guys,
  gal: Gals,
  pairs: Pairs<Guys, Gals>,
): boolean {
  const guyPair = pairs.find((pair) => pair[0] === guy) as Pairs<
    Guys,
    Gals
  >[number]
  const galPair = pairs.find((pair) => pair[1] === gal) as Pairs<
    Guys,
    Gals
  >[number]

  if (guyPair === galPair) return false

  const guyWouldRatherBeWithGal =
    preferences.guyPreferences[guy].indexOf(gal) <
    preferences.guyPreferences[guy].indexOf(guyPair[1])
  const galWouldRatherBeWithGuy =
    preferences.galPreferences[gal].indexOf(guy) <
    preferences.galPreferences[gal].indexOf(galPair[0])

  return guyWouldRatherBeWithGal && galWouldRatherBeWithGuy
}
