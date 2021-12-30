import * as api from '../../axios'   

export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts()
        const action = {
            type: 'FETCH_ALL',
            payload: data
          }
          dispatch(action)
    } catch(err){
        console.log(err.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post)
        dispatch({
            type: 'CREATE',
            payload: data
        })
    } catch (err) {
        console.log(err.message)
    }
}

export const updatePost = (id, post) =>  async (dispatch) => {
    try{
        const { data } = await api.updatePosts(id, post)
        dispatch({
            type: 'UPDATE',
            payload: data
        })
    } catch (err) {
        console.log(err.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    await api.deletePosts(id)
    try{
        dispatch({
            type: 'DELETE',
            payload: id
        })
    } catch (err){
        console.log(err)
    }
}

export const likePost = (id) => async (dispatch) => {
    const { data } = await api.likePosts(id)

    try {
        dispatch({
            type: 'LIKE',
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}