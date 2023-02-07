import './App.css';
import {useState} from "react";
import axios from "axios";
function App() {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
    const [userData, setUserData] = useState(null);
    const register = () => {
        axios({
            method: "post",
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: 'http://localhost:3001/register'
        }).then((res) => console.log(res))
    }
    const login = () => {
        axios({
            method: "post",
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: 'http://localhost:3001/login'
        }).then((res) => console.log(res))
    }

    const getUser = () => {
        axios({
            method: "get",
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: 'http://localhost:3001/user'
        }).then((res) => setUserData(res.data))
    }

  return (
    <div className="App">
      <div>
        <h1>Registrar</h1>
        <input placeholder="username" onChange={(e) => setRegisterUsername(e.target.value)} />
        <input placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)}/>
        <button onClick={register} >Submit</button>
      </div>
      <div>
        <h1>Iniciar Sesión</h1>
        <input placeholder="username" onChange={(e) => setLoginUsername(e.target.value)}/>
        <input placeholder="password" onChange={(e) => setLoginPassword(e.target.value)}/>
        <button onClick={login} >Submit</button>
      </div>
        <div>
            <h1>Get User</h1>
            <button onClick={getUser} >Submit</button>
            {userData ? <h1>Welcome back {userData.username} </h1>:null}
        </div>
    </div>
  );
}

export default App;
