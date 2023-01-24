import data from './strings'
import axios from 'axios'
import * as querystring from 'querystring'
import { addToCache, getFromLanguageCache } from '../translationCache'
import cyrb53 from '../cyrb53'

const getStrings = (key, language) => {
  const string = data[key] || key

  if (language !== 'en' && language) {
    const keyHash = cyrb53(string.toString())

    const cachedTranslation = getFromLanguageCache(language, keyHash)
    console.log('cachedTranslation', cachedTranslation)
    // if (cachedTranslation !== null) {
    //   return cachedTranslation.translation
    // }

    return getStringFromDeepl(string, language, keyHash)
  } else {
    return string
  }
}

const getStringFromDeepl = async (string, language, keyHash) => {
  const url = 'https://api-free.deepl.com/v2/translate'
  const options = {
    auth_key: process.env.REACT_APP_DEEPL_API_KEY,
    text: string.toString(),
    target_lang: language
  }

  const response = await axios.post(url, querystring.stringify(options))
  addToCache(language, keyHash, response.data.translations[0].text)
  return await response.data.translations[0].text
}

export default getStrings
