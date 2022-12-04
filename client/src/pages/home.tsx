import { observer } from "mobx-react-lite"
import { FC, useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "..";
import ListComponent from "../components/ListComponent";
import ChangePass from "../components/ChangePass";
import Portal from "../components/Portal";


const Home: FC = () => {
    
    const { store } = useContext(Context)
    const [isModalOpen, setModalOpen] = useState(false)
  
    return (
        <div>
            {!store.isAuth ? <Navigate to={'/login'} /> : null}
            {isModalOpen ? <Portal>
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgba(51, 51, 51, 0.3)',
                    backdropFilter: 'blur(1px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 1,
                }} >
                    <div style={{  }} >
                        <ChangePass handleModal={setModalOpen}/>
                        <button onClick={() => { setModalOpen(false) }}>
                            Close
                        </button>
                    </div>
                </div>
            </Portal> : null}

            <button onClick={() => { setModalOpen(true) }}>Change Password</button>


            <ListComponent />
        </div>
    )
}

export default observer(Home);