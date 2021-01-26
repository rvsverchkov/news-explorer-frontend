class Api {
    constructor({ baseUrl, apiKey, country }) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.country = country;
    }

    getArticles() {
        return fetch(`${this.baseUrl}=${this.country}&apiKey=${this.apiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }
}

const api = new Api({
    baseUrl: 'https://nomoreparties.co/news/v2/top-headlines?country',
    apiKey: '0e69a0e6a9b4443180b894d7baa1b664',
    country: 'ru',
})

export default api;