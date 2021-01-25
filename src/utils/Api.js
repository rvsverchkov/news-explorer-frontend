class Api {
    constructor({ baseUrl }) {
        this.baseUrl = baseUrl;
    }
}

const api = new Api({
    baseUrl: 'https://api.rvsverchkov-explorer.students.nomoredomains.work',
})

export default api;