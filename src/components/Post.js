import { useEffect } from 'react'
import moment from 'moment'
import {ThumbUpIcon} from '@heroicons/react/outline'
import {DotsHorizontalIcon, ThumbUpIcon as ThumbUpIconFilled, TrashIcon} from '@heroicons/react/solid'
import {useDispatch} from 'react-redux'
import { deletePost, getPosts, likePost } from '../redux/actions/posts'

function Post({post, setCurrId}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
      }, [dispatch])
    const {_id, title, message, creator, createAt, tags, likeCount, selectedFile} = post
    return (
        <div className="relative shadow-md w-64 rounded-md mr-2 mb-2 bg-white">
            <img className='object-cover w-full filter brightness-75 rounded-t-md h-40 object-center' src={selectedFile} alt="" />
            <div className=''>
                <div className="absolute top-5 left-5 text-white">
                    <p className='text-lg font-medium'>{creator}</p>
                    <p className='text-xs'>{moment(createAt).fromNow()}</p>
                </div>
                <div className="absolute top-5 right-5">
                    <button onClick={() => setCurrId(post._id)} className=" hover:bg-gray-200 hover:bg-opacity-50 transition duration-200 rounded-full p-2 active:bg-opacity-70">
                        <DotsHorizontalIcon className="h-6 text-white" />
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className='text-xs text-gray-600'>{tags.map((tag) => `#${tag}`)}</p>
            </div>
            <p className="mx-4">{message}</p>
            <p className="mx-4 mb-4 text-sm">{title}</p>
            <div className="p-4 flex justify-between">
                <button onClick={() => dispatch(likePost(_id))} className="flex items-center space-x-2 transform active:scale-110 transition-all duration-200 outline-none text-blue-600">
                    {likeCount === 0 ? <ThumbUpIcon className="h-6" />
                                     : <ThumbUpIconFilled className="h-6" /> }
                    <p>
                        {likeCount} {' '}
                        Like
                    </p>
                </button>
                <button onClick={() => dispatch(deletePost(_id))} className="flex items-center space-x-2 transform active:scale-110 transition-all duration-200 outline-none text-red-600">
                    <TrashIcon className="h-6" /> 
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Post
