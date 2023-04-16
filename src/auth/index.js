const PiggySDK = require('../main/index');

class Auth extends PiggySDK {
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

module.exports = Auth;
