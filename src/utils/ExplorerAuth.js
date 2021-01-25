//import * as token from './Token.js';

export const BASE_URL = 'https://api.rvsverchkov-search.students.nomoredomains.work/';

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password, name})
    })
    .then((response) => {
        if (!response.ok) {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
        return response.json();
    })
    .then((response) => {
        console.log(`
            Пользователь с почтовым адресом ${response.email} и идентификатором ${response._id} 
            был успешно зарегистрирован на сервисе News Explorer.
        `);
        return response;
    })
    .catch((err) => console.log(`
        Регистрация пользователя не была завершена из - за ошибки на сервере/клиенте
        Текст ошибки: ${err}. Повторите попытку.
    `));
};