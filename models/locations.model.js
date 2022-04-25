const getAll = () => {
    return db.query('select * from nurseries');
};

module.exports = {
    getAll
}