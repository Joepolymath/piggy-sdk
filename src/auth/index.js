import PiggySDK from '../main/index.js';

/**
 * @description
 * @class Auth
 * @extends {PiggySDK}
 */
class Auth extends PiggySDK {
  /**
   * Creates an instance of Auth.
   * @param {string} apiKey
   * @memberof Auth
   */
  constructor(apiKey) {
    super(apiKey);
  }

  //   login function
  async login(authData, password = '') {
    const endpoint = '/login';
    const user = await this.makeRequest(endpoint, 'POST', authData, password);
    return user;
  }

  async register(userData) {
    const endpoint = '/register';
    const user = await this.makeRequest(endpoint, 'POST', userData);
    return user;
  }
}

export default Auth;
