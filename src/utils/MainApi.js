export const BASE_URL = 'https://api.rvsverchkov-search.students.nomoredomains.work';

export const saveCurrentCard = (keyword, title, text, date, source, link, image, jwt) => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({keyword, title, text, date, source, link, image})
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

export const deleteCurrentCard = (cardId, jwt) => {
    return fetch(`${BASE_URL}/articles/${cardId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({cardId})
    })
    .then((response) => {
        if (!response.ok) {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
        return response.json();
    })
}

export const getSavedCards = (jwt) => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
    })
    .then((response) => {
        if (!response.ok) {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
        return response.json();
    })
}