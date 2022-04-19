const getAll = () => {
    return db.query('select * from posts');
};
const getByExpertise = () => {

};


module.exports = {
    getAll
}