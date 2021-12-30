import Form from "./components/Form";
import Posts from "./components/Posts";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import {getPosts} from './redux/actions/posts'

function App() {
  const dispatch = useDispatch()
  const [currId, setCurrId] = useState(null)
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, currId])
  return (
    <div className="max-w-7xl mx-auto px-4">
      <header className="static text-gray-900 bg-white rounded-md my-7 flex justify-center items-center shadow-md" >
        <h2 className="text-2xl font-medium text-center ">Memories</h2>
        <img className="ml-4 h-20 mt-3" src="https://shortcut-test2.s3.amazonaws.com/uploads/project/attachment/21590/default_memories_logo.png" alt="" />
      </header>
      <div className="">
        <div className="flex justify-center flex-wrap-reverse items-center md:items-end flex-grow lg:space-x-4">
          <div className="">
            <Posts setCurrId={setCurrId} />
          </div>
          <div className="mb-2">
            <Form currId={currId} setCurrId={setCurrId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
