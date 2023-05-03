import Card from "../layout/Card"
import classes from './Login.module.css'

const Login = () => {
  return (
    <Card>
      <form className={classes.form}>
        <h1>Login Form</h1>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="email" required id="username" />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" required id="password"/>
        </div>

        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </Card>
  )
}

export default Login