import data from './strings'

const getStrings = (key) => {
  const result = data[key]
  if (result) {
    return result[0]
  } else {
    return key
  }
}

export default getStrings
