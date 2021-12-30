import { useEffect } from "react"
import { useSelector } from "react-redux"
import Post from "./Post"

function Posts({setCurrId}) {
    const posts  = useSelector((state) => state.posts)
    console.log(posts)
    return (
        <div>
            {!posts.length ? (
                <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className=" flex justify-center items-center h-32 w-32">
                        <div className="animate-spin rounded-full h-10 w-10  border-b-2 border-gray-900"></div>
                    </div>
                </div>
            ) : ( 
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {posts.map((post) => (
                        <Post key={post._id} post={post} setCurrId={setCurrId} />
                    ))}
                </div>
            ) }
        </div>
    )
}

export default Posts
