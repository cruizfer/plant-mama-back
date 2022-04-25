const getAll = () => {
    return db.query('select * from posts');
};

const getPostsByExpertise = (expertise) => {
    return db.query('SELECT * FROM posts where posts.expertise = ? ORDER BY rand() limit 5',
        [expertise]);
}
const savedPostbyUser = (post_id, user_id) => {
    return db.query('INSERT into posts_users(post_id,user_id) values (?,?);',
        [post_id, user_id]
    )
};

const getPostByID = (id) => {
    return db.query('select * from posts where posts.id = ?', [id])
};


const getPostsByUser = (user_id) => {
    return db.query('select * from posts_users pu, posts p where pu.user_id = ? and pu.post_id = p.id;', [user_id])
};


const deletePost = (post_id) => {
    return db.query('DELETE FROM posts_users WHERE post_id = ?', [post_id])
};



module.exports = {
    getAll,
    getPostsByExpertise,
    savedPostbyUser,
    getPostByID,
    getPostsByUser,
    deletePost

}