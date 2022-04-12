const dateFormat = (date) => {
    return date.toLocaleString().slice(0, 10).split('.').reverse().join('-')
}

export default dateFormat;