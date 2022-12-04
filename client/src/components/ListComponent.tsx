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
    const [validation, setValidation] = useState(false)

    useEffect (() => {
        store.getPosts(store.user.id).then(posts=>setList(posts))
    },[])

    const addPost = async () => {
        if(!text.length){
            setValidation(true)
            return;
        }
        setValidation(false)
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
            placeholder={ validation ? 'enter some text' : 'type something' }
            />
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            {list.map(el=><div key={el._id} >{el.text}
            <button onClick={()=>deletePost(el._id)}>Delete</button>
            </div>)}
        </div>
    )
}

export default observer(ListComponent)
