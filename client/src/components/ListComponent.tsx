import { observer } from "mobx-react-lite"
import React, { FC, useContext, useEffect, useState } from "react"
import { Context } from "..";

interface IListItem {
    _id:string,
    text:string
}

const ListComponent: FC = () => {
    const {store} = useContext(Context);
    const [text, setText] = useState<string>('');
    const [list,setList] = useState<IListItem[]>([]);

    useEffect (() => {
        store.getPosts(store.user.id).then(posts=>setList(posts))
    },[])

    const addPost = async () => {
        await store.post(text, store.user.id)
        const posts = await store.getPosts(store.user.id)
        setList(posts)
        setText('')
    }
    const deletePost = async (id:string) => {
        await store.deletePost(id)        
        const posts = await store.getPosts(store.user.id)
        setList(posts)
    }
    return(
        <div>
            <input 
            onChange={e => setText(e.target.value)}
            value={text}
            type="text" 
            />

            <div>
                {/* <button onClick={() => store.post(text)}>Add Post</button> */}
                <button onClick={addPost}>Add Post</button>
            </div>
            {list.map(el=><div key={el._id} >{el.text}
            <button onClick={()=>deletePost(el._id)}>Delete</button>
            </div>)}
        </div>
    )
}

export default observer(ListComponent)
