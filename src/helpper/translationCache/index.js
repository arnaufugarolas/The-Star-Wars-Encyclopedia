const CACHE = 'SWE_CACHE'
const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14

const currentTime = () => {
  return Date.now()
}

const getCache = () => {
  let cache = {
    data: {},
    nextCleanup: new Date().getTime() + TWO_WEEKS
  }

  try {
    const data = localStorage.getItem(CACHE)

    if (data) {
      cache = JSON.parse(data)
    }
  } catch (e) {
    console.error(e.message)
  }

  return cache
}

export const getLanguageCache = (language) => {
  const cache = getCache()
  const data = cache.data

  if (data[language]) {
    return data[language]
  }

  return []
}

export const getFromLanguageCache = (language, id) => {
  const cache = getCache()
  const data = cache.data

  if (data[language]) {
    const languageCache = data[language]
    let low = 0
    let high = languageCache.length - 1
    let mid
    let element

    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      element = languageCache[mid]
      if (element.id < id) {
        low = mid + 1
      } else if (element.id > id) {
        high = mid - 1
      } else {
        return element
      }
    }
  }

  return null
}

export const addToCache = (language, id, translation) => {
  const cache = getCache()
  const data = cache.data

  if (!data[language]) {
    data[language] = []
  }

  if (getFromLanguageCache(language, id) !== null) {
    return
  }

  const newTranslation = {
    id,
    translation,
    expiry: currentTime() + TWO_WEEKS
  }

  data[language] = [...data[language], newTranslation]

  data[language].sort((a, b) => {
    const keyA = a.id
    const keyB = b.id

    if (keyA < keyB) {
      return -1
    }
    if (keyA > keyB) {
      return 1
    }
    return 0
  })

  try {
    localStorage.setItem(CACHE, JSON.stringify(cache))
  } catch (e) {
    cleanUpStorage(data)
  }
}

const cleanUpStorage = (data) => {
  let isDeleted
  let oldest
  let oldestKey

  for (const key in data) {
    console.log('key is', key)
    const expiry = data[key].expiry
    if (expiry && expiry <= currentTime()) {
      delete data[key]
      isDeleted = true
    }

    if (!oldest || oldest > expiry) {
      oldest = expiry
      oldestKey = key
    }
  }

  if (!isDeleted && oldestKey) {
    delete data[oldestKey]
  }

  localStorage.setItem(
    CACHE,
    JSON.stringify({
      data,
      nextCleanup: currentTime() + TWO_WEEKS
    })
  )
}
