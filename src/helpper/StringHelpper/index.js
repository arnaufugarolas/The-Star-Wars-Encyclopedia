import data from './strings'
import axios from 'axios'
import { addToCache, getFromLanguageCache } from '../translationCache'
import cyrb53 from '../cyrb53'

const getString = (key, language, context) => {
  return new Promise((resolve) => {
    let string
    try {
      string = data[key.toString()][0]
    } catch (e) {
      resolve(key.toString())
    }

    const translatable = data[key.toString()][1]

    if (language !== 'en' && language && translatable) {
      const keyHash = cyrb53(string.toString())
      const cachedTranslation = getFromLanguageCache(language, keyHash)

      if (cachedTranslation !== null) {
        console.log('Translation from cache', context)
        resolve(cachedTranslation.translation)
      } else {
        console.log('Translation from deepl', context)
        getStringFromDeepl(string, language, keyHash).then((result) => { resolve(result) })
      }
    } else {
      resolve(string.toString())
    }
  })
}

const getStringFromDeepl = async (string, language, keyHash) => {
  const url = 'https://api-free.deepl.com/v2/translate'
  const options = {
    auth_key: process.env.REACT_APP_DEEPL_API_KEY,
    text: string.toString(),
    target_lang: language.toString().toLowerCase()
  }

  const queryString = Object.keys(options)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(options[key]))
    .join('&')

  const response = await axios.post(url, queryString)

  addToCache(language, keyHash, response.data.translations[0].text)
  return response.data.translations[0].text
}

export default getString
