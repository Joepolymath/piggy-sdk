const axios = require('axios');

class PiggySDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://app.piggyvest.com/api/v3';
    this.referer = 'https://dashboard.piggyvest.com/';
    this.origin = 'https://dashboard.piggyvest.com';
  }

  async makeRequest(endpoint, method = 'GET', data = {}, password = '') {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9,es-US;q=0.8,es;q=0.7',
      authorization:
        'Bearer 918cf576-6c79-4d73|sTOZBixJzkUMe/MilMAkstU51iM8oEgt16sPJcCji8Q=',
      'content-type': 'application/json',
      password,
      'sec-ch-ua':
        '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      Referer: 'https://dashboard.piggyvest.com/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    };
    const config = {
      method,
      url,
      headers,
      data,
    };
    const response = await axios(config);
    return response.data;
  }
}

module.exports = PiggySDK;
