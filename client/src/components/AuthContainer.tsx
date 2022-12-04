import { observer } from 'mobx-react-lite';
import React, {FC, useContext, useState} from 'react';
import { Context } from '..';
// import RegistrationForm from './RegistrationForm';

interface PropsI {
    onSubmit: (email: string, password: string) => void,
    pageName: string
}

const LoginForm: FC<PropsI> = ({onSubmit, pageName}:PropsI) => { 
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);
    

    return (
        <div>
            <input 
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
            />

            <input 
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            />
            <button onClick={() => onSubmit(email, password)}>
                {pageName}
                </button>

        </div>
    )
}
export default observer(LoginForm);