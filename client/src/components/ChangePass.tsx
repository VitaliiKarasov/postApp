import { observer } from "mobx-react-lite"
import { Dispatch, FC, SetStateAction, useContext, useState } from "react"
import { Context } from "..";

type Props = {
    handleModal:(state:boolean)=>void
}

const ChangePass: FC<Props> = ({handleModal}) => {
    const {store} = useContext(Context);
    const [password, setPassword] = useState<any>('');

    const changePass = async () => {
        await store.changePassword(store.user.id, password)
        handleModal(false)
        setPassword('')
    }

    return (
        <div>

            <input
            type="password" 
            onChange = {e => setPassword(e.target.value)}
            value={password}
            />
            <button onClick={changePass}>Change password</button>
        </div>
    )

}

export default observer(ChangePass)