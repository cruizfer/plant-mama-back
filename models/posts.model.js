const getAll = () => {
    return db.query('select * from posts');
};

const savedPostbyUser = (post_id, user_id) => {
    return db.query('INSERT into post_user(post_id,user_id) values (?,?);',
        [post_id, user_id]
    )
};

const getPostByID = (id) => {
    return db.query('select * from posts where posts.id = ?', [id])
};

const getPostsByUser = (user_id) => {
    return db.query('select * from posts_users where user_id = ?', [user_id])
}


module.exports = {
    getAll,
    savedPostbyUser,
    getPostByID,
    getPostsByUser

}