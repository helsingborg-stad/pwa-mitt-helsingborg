// Storage key definitions
export const SHOW_SPLASH_SCREEN = '@app:show_splash_screen';
export const TOKEN_KEY = '@app:accessToken';
export const TEMP_TOKEN_KEY = '@app:tempAccessToken';
export const USER_KEY = '@app:user';
export const ORDER_KEY = '@app:orderRef';
export const COMPLETED_FORMS_KEY = '@app:completedForms';

/**
 * Get data from local storage
 * @param {String} key The localStorage() key
 */
export const getData = key => {
  const data = window.localStorage.getItem(key);
  return JSON.parse(data);
};

/**
 * Save key value pair to local storage.
 * @param {String} key   The localStorage() key
 * @param {String} value The localStorage() value
 */
export const saveData = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Removes all data from local storage
 */
export const clearData = () => {
  window.localStorage.clear();
};

/**
 * Remove data with given key from local storage
 * @param {String} key The localStorage() key
 */
export const removeData = key => {
  window.localStorage.removeItem(key);
};

/**
 * Add an item to array in local storage
 * @param {String} key   The localStorage() key
 * @param {String} value The localStorage() value
 */
export const addDataToArray = (key, value) => {
  // Get the existing data
  let prevValue = getData(key);
  // If no previous data exists, create an empty array
  prevValue = prevValue && Array.isArray(prevValue) ? prevValue : [];
  // Add new data to localStorage Array
  prevValue.push(value);
  // Save back to localStorage
  saveData(key, prevValue);
};

/**
 * Add an item to object in local storage
 * @param {String} key        The localStorage() key
 * @param {String} objectKey  The localStorage() value object key
 * @param {String} value      The localStorage() value
 */
export const addDataToObject = (key, objectKey, value) => {
  // Get the existing data
  let prevValue = getData(key);
  // If no previous data exists, create an empty object
  prevValue = prevValue && typeof value === 'object' && value !== null ? prevValue : {};
  // Add new data to localStorage Object
  prevValue[objectKey] = value;
  // Save back to localStorage
  saveData(key, prevValue);
};
