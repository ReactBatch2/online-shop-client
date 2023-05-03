import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css';
import { useSelector } from "react-redux"
import { getUser } from "../auth/authSlice"

function MainNavigation() {

    const user = useSelector(getUser)

    let username;
    if(!user?.username){
        username = 'Unknown'
    }else{
        username = user.username
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                Online Shop
            </div>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/login">Login</Link> </li>
                    <li> 
                    <Link to="/register">Register</Link> 
                    </li>
                    <li>
                        <Link to='/'>
                        {username}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation