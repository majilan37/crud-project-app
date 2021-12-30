import axios from 'axios'

const HOST = process.env.HOST || 'https://crud-project-mern.herokuapp.com' // Live api endpoint
const API_ENDPOINT = `${HOST}/posts`


export const fetchPosts = () => axios.get(API_ENDPOINT)
export const createPosts = (newPost) => axios.post(API_ENDPOINT, newPost)
export const updatePosts = (id, updatedPost) => axios.patch(API_ENDPOINT+`/${id}`, updatedPost)
export const deletePosts = (id) => axios.delete(API_ENDPOINT+`/${id}`)
export const likePosts = (id) => axios.patch(API_ENDPOINT+`/${id}/likePost`)
