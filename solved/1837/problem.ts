export type Preferences<Guy extends string, Gal extends string> = {
  guyPreferences: Record<Guy, Gal[]>
  galPreferences: Record<Gal, Guy[]>
}

export type DataSetBySex<T extends string, U extends string> = Record<
  T,
  { preferences: U[]; proposals: U[] }
>

export type Pairs<Guy extends string, Gal extends string> = (readonly [
  Guy,
  Gal,
])[]

export type Data<Guy extends string, Gal extends string> = {
  guys: DataSetBySex<Guy, Gal>
  gals: DataSetBySex<Gal, Guy>
  pairs: Pairs<Guy, Gal>
}

function matchingAlgorithm<Guy extends string, Gal extends string>(
  prefs: Preferences<Guy, Gal>,
): Pairs<Guy, Gal> {
  const initialData = getInitialData(prefs)
  const firstRoundData = firstRound(initialData)
  const { pairs } = subSequentRounds(firstRoundData)

  return pairs
}

export default matchingAlgorithm

function firstRound<Guy extends string, Gal extends string>(
  data: Data<Guy, Gal>,
) {
  const allGuys = Object.keys(data.guys) as Guy[]

  allGuys.forEach((guy) => {
    const preferredGal = data.guys[guy].preferences[0]
    if (data.gals[preferredGal].preferences[0] === guy) {
      updateEngagementIfGalWantsTo(data, guy, preferredGal)
    }
  })

  return data
}

function subSequentRounds<Guy extends string, Gal extends string>(
  data: Data<Guy, Gal>,
) {
  const unengagedGuys = getUnengagedGuys(data)

  unengagedGuys.forEach((guy) => {
    const galsGuyHasNotYetProposedTo = getItemsNotInListB(
      data.guys[guy].preferences,
      data.guys[guy].proposals,
    )
    updateEngagementIfGalWantsTo(data, guy, galsGuyHasNotYetProposedTo[0])
  })

  const pairsCount = data.pairs.length
  const guysCount = Object.keys(data.guys).length
  const galsCount = Object.keys(data.gals).length

  if (pairsCount === guysCount && guysCount === galsCount) {
    return data
  }

  return subSequentRounds(data)
}

function updateEngagementIfGalWantsTo<Guy extends string, Gal extends string>(
  data: Data<Guy, Gal>,
  guy: Guy,
  gal: Gal,
) {
  const galsEngagement = getGalEngagement(data, gal)
  const galPrefersThisGuy = doesGalPrefersGuyMoreThanCurrentPartner(
    data,
    gal,
    guy,
  )
  if (!galsEngagement) {
    data.pairs.push([guy, gal])
  } else if (galPrefersThisGuy) {
    data.pairs = data.pairs.filter(([, engagedGal]) => engagedGal !== gal)
    data.pairs.push([guy, gal])
  }
  data.guys[guy].proposals.push(gal)
  data.gals[gal].proposals.push(guy)
}

function doesGalPrefersGuyMoreThanCurrentPartner<
  Guy extends string,
  Gal extends string,
>(data: Data<Guy, Gal>, gal: Gal, guy: Guy) {
  const galsEngagement = getGalEngagement(data, gal)
  if (!galsEngagement) return null

  return (
    data.gals[gal].preferences.indexOf(guy) <
    data.gals[gal].preferences.indexOf(galsEngagement[0])
  )
}

function getGalEngagement<Guy extends string, Gal extends string>(
  data: Data<Guy, Gal>,
  gal: Gal,
): Pairs<Guy, Gal>[number] | undefined {
  return data.pairs.find(([, engagedGal]) => engagedGal === gal)
}

function getUnengagedGuys<Guy extends string, Gal extends string>(
  data: Data<Guy, Gal>,
) {
  const allGuys = Object.keys(data.guys) as Guy[]
  const engagedGuys = data.pairs.map((p) => p[0])
  return getItemsNotInListB(allGuys, engagedGuys)
}

function getItemsNotInListB<T>(a: T[], b: T[]): T[] {
  const bSet = new Set(b)
  return a.filter((item) => !bSet.has(item))
}

function getInitialData<Guy extends string, Gal extends string>(
  prefs: Preferences<Guy, Gal>,
): Data<Guy, Gal> {
  return {
    guys: Object.entries(prefs.guyPreferences).reduce(
      (acc, [guy, preferredGals]) => {
        acc[guy as Guy] = {
          preferences: preferredGals as Gal[],
          proposals: [],
        }
        return acc
      },
      {} as DataSetBySex<Guy, Gal>,
    ),
    gals: Object.entries(prefs.galPreferences).reduce(
      (acc, [gal, preferredGuys]) => {
        acc[gal as Gal] = {
          preferences: preferredGuys as Guy[],
          proposals: [],
        }
        return acc
      },
      {} as DataSetBySex<Gal, Guy>,
    ),
    pairs: [],
  }
}
