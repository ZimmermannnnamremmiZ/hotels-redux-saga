// формат для запросов на сервер
const dateApiFormat = (date) => {
    return date.toLocaleString().slice(0, 10).split('.').reverse().join('-')
}

export default dateApiFormat;