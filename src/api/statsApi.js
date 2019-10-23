class StatsApi {
    static getStats() {
        return fetch('/api/stats').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getStatsSync() {
        /**
         * Here we want to simulate the bad practice of
         * making synchronous XHRs.
         */
        const req = new window.XMLHttpRequest()
        req.open('GET', '/api/stats', false)
        req.send()

        if (req.status === 200) {
            return JSON.parse(req.responseText)
        }
    }
}

export default StatsApi;
