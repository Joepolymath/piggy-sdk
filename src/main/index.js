const axios = require("axios");

class PiggySDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://app.piggyvest.com/api/v3";
    this.referer = "https://dashboard.piggyvest.com/";
    this.origin = "https://dashboard.piggyvest.com";
  }

  async makeRequest(endpoint, method = "GET", data = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      "content-length": 81,
      authorization: `Bearer ${this.apiKey}`,
      refere: this.referer,
      origin: this.origin,
      accept: "application/json",
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
