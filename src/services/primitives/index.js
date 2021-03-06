/**
 * Converts an array of objects to an object.
 * @param {array} array - array of objects to convert
 * @param {string} key - key in objects to key the returned object
 * @param {function} valueFunc - passed each object and should return the
 * value to use for that object
 */
export const objectFromArray = (array, key, valueFunc = (obj) => obj) => {
  return array.reduce((acc, item) => {
    if (item[key] !== undefined) {
      acc[item[key]] = valueFunc(item)
    }
    return acc
  }, {})
}

export const merge = (obj, merge, suppliment = {}) => {
  return Object.entries(merge || {})
    .reduce((acc, [id, value]) => ({
      ...acc,
      [id]: {
        ...(acc[id] || {}),
        ...value,
        ...suppliment
      }
    }), obj || {})
}

export const deleteFrom = (obj, target) => (
  Object.keys(obj).reduce((acc, key) => {
    if (key !== target) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
)

/**
 * Takes an object and returns a new object with the value specified by the
 * given key replaced with the given value.
 */
export const objFrom = (obj, key, valueFunc) => {
  return {
    ...obj,
    ...key && { [key]: valueFunc(obj[key]) }
  }
}

/** Generates a random string. */
export const randomString = () => (
  Math.random().toString(36).replace(/[^a-z]+/gi, '')
)
