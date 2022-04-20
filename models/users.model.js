const create = ({ name, surname, nickname, mail, password, birthday_date, expertise, user_rol_id, user_image }) => {
    return db.query('INSERT into users(name,surname,nickname,mail,password,birthday_date,expertise,user_rol_id,user_image) values (?,?,?,?,?,?,?,?,?);',
        [name, surname, nickname, mail, password, birthday_date, expertise, user_rol_id, user_image]
    )
};

const getByNickname = (nickname) => {
    return db.query('select * from users where nickname = ?',
        [nickname])
};

const getByID = (userId) => {
    return db.query(
        'select * from users where id=?;',
        [userId]
    )
}
module.exports = {
    create,
    getByNickname,
    getByID
}