import { useSelector } from "react-redux"
import { getUser } from "../auth/authSlice"

const Profile = () => {

  const user = useSelector(getUser)
  console.log(user)

  if(!user){
    return (
        <li>
            Unknown
        </li>
    )
  }

  return (
    <li>
        {user.username}
    </li>
  )
}

export default Profile