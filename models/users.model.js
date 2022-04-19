const create = ({ name, surname, nickname, mail, password, birthday_date, expertise, user_rol_id }) => {
    return db.query('INSERT into users(name,surname,nickname,mail,password,birthday_date,expertise,user_rol_id) values (?,?,?,?,?,?,?,?);',
        [name, surname, nickname, mail, password, birthday_date, expertise, user_rol_id]
    )
};

const getByNickname = (nickname) => {
    return db.query('select * from users where nickname = ?',
        [nickname])
}

module.exports = {
    create,
    getByNickname
}