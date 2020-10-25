const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPostsAction = async dispatch => {
    const data = await fetch(API_URL);
    const dataJSON = await data.json();
    return dispatch({
        type: 'FETCH_POSTS',
        payload: dataJSON
    });
};

export const addCommentAction = async ({ id, comment, state, dispatch }) => {
    const posts = state.posts.map((item) => {
        if (item.id.toString() === id) {
            if (item.comment) {
                item.comment.push(comment)
                return {
                    ...item
                }
            }

            return {
                ...item,
                comment: [comment]
            }
        }
        return item
    })

    dispatch({
        type: 'ADD_COMMENT',
        payload: { posts }
    })
}

export const deleteCommentAction = async ({ id, index, state, dispatch }) => {
    const posts = state.posts.map((item) => {
        const itemId = item.id.toString()
        if (itemId === id) {
            item.comment.splice(index, 1)

            return {
                ...item
            }
        }

        return item
    })

    dispatch({
        type: 'REMOVE_COMMENT',
        payload: { posts }
    })
}