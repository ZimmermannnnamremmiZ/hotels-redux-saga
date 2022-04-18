const dateFullFormat = (date) => {
    const res = date.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return res.slice(0, 14)
}

export default dateFullFormat;