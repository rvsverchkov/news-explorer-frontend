import * as token from './Token.js';

export const BASE_URL = 'https://api.rvsverchkov-search.students.nomoredomains.work';

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password, name})
    })
    .then((response) => {
        if (!response.ok) {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
        return response.json();
    })
    .catch((error) => {
        console.log(error);
    })
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then((response) => {
        if (!response.ok) {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
        return response.json();
    })
    .then((response) => {
        if (response.token !== undefined) {
            console.log(`
                Пользователь успешно авторизовался на сервисе News Explorer. Ему был присвоен токен ${response.token}.
            `)
            token.setToken(response.token);
            return response;
        } else {
            console.log(`
                Пользователь с таким ${email} и паролем ${password} не зарегистрирован на сервисе News Explorer
            `)
        }
    })
}

export const get = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
    })
    .then((response) => {
        if(!response.ok) {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
        return response.json();
    })
}