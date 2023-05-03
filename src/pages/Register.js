import Card from "../layout/Card";
import classes from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerRequestStatus,setRegisterRequestStatus] = useState('idle')

  const onFirstnameChange = (e) => setFirstname(e.target.value);
  const onLastnameChange = (e) => setLastname(e.target.value);
  const onFullnameChange = (e) => setFullname(e.target.value);
  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const canCreate = [firstname,lastname,fullname,username,password].every(Boolean) && registerRequestStatus === 'idle'

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onRegisterSubmit = (e) => {
    e.preventDefault()

    if(canCreate){
      setRegisterRequestStatus('pending')

      try {
        dispatch(
          register({
            firstname,
            lastname,
            fullname,
            username,
            password,
          })
        ).unwrap()

        setFirstname('')
        setLastname('')
        setFullname('')
        setUsername('')
        setPassword('')

        navigate('/')
        
      } catch (error) {
        console.log(error)
      }finally{
        setRegisterRequestStatus('idle')
      }
    }
  }
  return (
    <Card>
      <form className={classes.form}>
        <h1>Register Form</h1>

        <div className={classes.control}>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            required
            id="firstname"
            value={firstname}
            onChange={onFirstnameChange}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            required
            id="lastname"
            value={lastname}
            onChange={onLastnameChange}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            required
            id="fullname"
            value={fullname}
            onChange={onFullnameChange}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input
            type="email"
            required
            id="username"
            value={username}
            onChange={onUsernameChange}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            value={password}
            onChange={onPasswordChange}
          />
        </div>

        <div className={classes.actions}>
          <button onClick={onRegisterSubmit} disabled={!canCreate}>Register</button>
        </div>
      </form>
    </Card>
  );
};

export default Register;
