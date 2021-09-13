const { RESTDataSource } = require('apollo-datasource-rest');

module.exports = class CryptoAPI extends RESTDataSource {
    constructor() {
        // Always call super
        super();
        // Sets base URL for the rest API
        this.baseURL = 'https://pro-api.coinmarketcap.com';
    }

    willSendRequest(request) {
        request.headers.set('X-CMC_PRO_API_KEY', 'f7316f03-d9d7-4ed8-898f-a97909d60a79');
        request.headers.set('Accept', 'application/json');
    }

    async getLatestListing() {
        const { data } = await this.get(`/v1/cryptocurrency/listings/latest`);
        return data;
    }
}