import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react";

function User() {
  const {user, logout } = useAuth()
  const navigate = useNavigate()




  useEffect(() => {
    if (!user) {
      // Redirect to the login page
      navigate('/login/auth');
    }
  }, [user, navigate]);


  function handleClick() {
    logout()
    navigate('/')
  }
  return (
    <div className="user">
      {/* <img src={user.avatar} alt={user.name} /> */}
      <span>Welcome, {user.userName}</span>
      <button className="logout-btn" onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

