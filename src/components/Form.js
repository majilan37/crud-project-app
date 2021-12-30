import { useState, useEffect } from "react"
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from "react-redux"
import { createPost, updatePost } from "../redux/actions/posts"

function Form({currId, setCurrId}) {
    const dispatch = useDispatch()
    const post = useSelector(state => currId ? state.posts.find((p) => p._id === currId) : null)
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        tags:'',
        message:'',
        selectedFile: '',
    })
    const clearData = () => {
        setCurrId(null)
        setPostData({
            creator: '',
            title: '',
            tags:'',
            message:'',
            selectedFile: '',
        })
    }
    useEffect(() => {
        if(post) setPostData(post)
    }, [post])
    const handleSubmit = (e) => {
        const {creator, selectedFile, tags, message, title} = postData
        e.preventDefault();

        if(currId) {
            dispatch(updatePost(currId, postData))
            dispatch(createPost(postData))

        } else {
            if(!creator || !selectedFile || !tags || !message || !title) return;
            dispatch(createPost(postData))
        }

        clearData()
    }
    return (
        <>
            <div className="bg-gray-100 border shadow-sm p-5">
                <form className="space-y-2" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-semibold mb-2">{post ? 'Edit' : 'Create'} a Memory</h2>
                    <div className="flex flex-col">
                        <label htmlFor="creator">Creator</label>
                        <input className='border px-4 py-1 outline-none' placeholder='Creator' type="text" name='creator' value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="title">Title</label>
                        <input className="border px-4 py-1 outline-none" placeholder='Title' type="text" name='title' value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message">Message</label>
                        <input className="border px-4 py-1 outline-none" placeholder='Message' type="text" name='message' value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="tags">Tags</label>
                        <input className="border px-4 py-1 outline-none" placeholder='Tags' type="text" name='tags' value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',') })} />
                    </div>
                    <div className="flex flex-col py-2">
                        <FileBase 
                            type='file' 
                            multiple={false}
                            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                        />
                    </div>
                    <button className="bg-green-500 hover:bg-green-400 active:bg-green-600 w-full text-white py-2" type='submit'>Submit</button>
                    <button className="bg-red-500 hover:bg-red-400 active:bg-red-600 w-full text-white py-2" onClick={clearData}>Clear</button>
                </form>
            </div>
        </>
    )
}

export default Form
