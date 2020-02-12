// Storage key definitions
export const SHOW_SPLASH_SCREEN = '@app:show_splash_screen';
export const TOKEN_KEY = '@app:accessToken';
export const TEMP_TOKEN_KEY = '@app:tempAccessToken';
export const USER_KEY = '@app:user';
export const ORDER_KEY = '@app:orderRef';
export const COMPLETED_FORMS_KEY = '@app:completedForms';

/**
 * Get data from local storage
 *
 * @param key
 */
export const getData = key => {
  const data = window.localStorage.getItem(key);
  console.log('get data', data);

  return JSON.parse(data);
};

/**
 * Save key value pair to local storage.
 *
 * @param key
 * @param value
 */
export const saveData = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Remove all data from local storage
 *
 */
export const clearData = () => {
  window.localStorage.clear();
};

/**
 * Remove data with given key from local storage
 *
 * @param key
 */
export const removeData = key => {
  window.localStorage.removeItem(key);
};

// /**
//  * Put new data to array with key value pair to storage.
//  *
//  * @param key
//  * @param value
//  * @returns {Promise}
//  */
// static putData(key, value) {
//   return AsyncStorage.getItem(key, (err, result) => {
//     if (result !== null) {
//       let newValue = [];
//       if (Array.isArray(value)) {
//         newValue = JSON.parse(result).concat(value);
//       } else if (typeof value === 'object' && value !== null) {
//         newValue = JSON.parse(result);
//         newValue.push(value);
//       }

//       return AsyncStorage.setItem(key, JSON.stringify(newValue));
//     }
//     const newValue = Array.isArray(value) ? value : [value];
//     return AsyncStorage.setItem(key, JSON.stringify(newValue));
//   });
// }

// /**
//  * Save multiple values with key pair to storage.
//  *
//  * @param key
//  * @param value
//  * @returns {Promise}
//  */
// static multiSaveData(key, value) {
//   return AsyncStorage.multiSet(key, value);
// }
