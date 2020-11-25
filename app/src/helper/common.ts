// eslint-disable-next-line @typescript-eslint/ban-types
export const deepcopy = (obj: {} | []) => JSON.parse(JSON.stringify(obj))

export const replaceArray = (array: [], targetId: number, sourceId: number) => {
  return array.reduce(
    (resultArray, element, id, originalArray) => [
      ...resultArray,
      id === targetId
        ? originalArray[sourceId]
        : id === sourceId
        ? originalArray[targetId]
        : element,
    ],
    []
  )
}

export const getDuplicateIndex = (baseArr: any[], targetArr: any[]) => {
  const len = baseArr.length
  for (let i = 0; i < len; i++) {
    if (targetArr.includes(baseArr[i])) {
      return i
    }
  }
  return -1
}

export const getDuplicateIndexes = (baseArr: any[], targetArr: any[]) => {
  const index = []
  const len = baseArr.length
  for (let i = 0; i < len; i++) {
    if (targetArr.includes(baseArr[i])) {
      index.push(i)
    }
  }
  return index
}

// getIndexDataFromObjext({a: [5,3,8], b: ['a','b','c']}, 1) // {a: 5, b: 'b'}
export const getIndexFromObject = (obj: any, index: number) => {
  const keys = Object.keys(obj)
  const ret: any = {}
  keys.forEach((key: string) => {
    ret[key] = obj[key][index]
  })
  return ret
}

export const filterRaceMatch = (meta: any, raceDetail: any) => {
  const targetHorse = meta.horse
  const compareHorse = raceDetail.horseInfo
  const matchIndex = getDuplicateIndex(targetHorse, compareHorse)
  if (matchIndex >= 0) {
    return {
      horseInfo: getIndexFromObject(meta, matchIndex),
      raceInfo: raceDetail.raceInfo,
    }
  } else {
    return {}
  }
}

export const sortObjectedArray = (obj: any[], sortKey: string) => {
  const t = [...obj]
  t.sort((a: any, b: any) => {
    if (a[sortKey] < b[sortKey]) return -1
    if (a[sortKey] > b[sortKey]) return 1
    return 0
  })
  return t
}
