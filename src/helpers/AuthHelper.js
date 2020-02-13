import decode from 'jwt-decode';
import StorageService, { TOKEN_KEY, USER_KEY } from '../services/StorageService';

/**
 * Check if JWT token is expired
 */
export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    if (decoded.exp > Math.floor(Date.now() / 1000)) {
      return false;
    }
    return true;
  } catch (err) {
    console.log('Token is expired');
    return true;
  }
};

/**
 * Login user. Saves user and token to storage
 * TODO: Save token as cookie instead
 * @param {*} param
 */
export const logIn = ({ user, token }) => {
  if (isTokenExpired(token)) {
    return false;
  }

  StorageService.saveData(USER_KEY, user);
  StorageService.saveData(TOKEN_KEY, token);

  return true;
};

/**
 * Clear access token
 */
export const logOut = () => {
  StorageService.removeData(TOKEN_KEY);
};

/**
 * Checks if there is a saved token and is still valid
 */
export const authenticated = () => {
  const token = StorageService.getData(TOKEN_KEY);

  return !!token && !isTokenExpired(token);
};
