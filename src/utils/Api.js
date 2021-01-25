class Api {
    constructor({ baseUrl }) {
        this.baseUrl = baseUrl;
    }
}

const api = new Api({
    baseUrl: 'https://api.rvsverchkov-search.students.nomoredomains.work/',
})

export default api;