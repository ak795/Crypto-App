const { RESTDataSource } = require('apollo-datasource-rest');

module.exports = class CryptoAPI extends RESTDataSource {
    constructor() {
        // Always call super
        super();
        // Sets base URL for the rest API
        this.baseURL = 'https://pro-api.coinmarketcap.com';
    }

    willSendRequest(request) {
        request.headers.set('X-CMC_PRO_API_KEY', 'YOUR_KEY');
        request.headers.set('Accept', 'application/json');
    }

    async getLatestListing() {
        const { data } = await this.get(`/v1/cryptocurrency/listings/latest`);
        return data;
    }
}