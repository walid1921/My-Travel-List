import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginSection() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    if ( !email || !password) return alert("Please enter username and email and password");
    if (email && password) login(email, password);

    console.log(`Email: ${email} Password: ${password}`)
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/travelList", { replace: true });
  }, [isAuthenticated, navigate])


  return (
    <div className="login-section">
      <form className="login-form">
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          <p>Password:</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <div className="buttons">
          {/* <button type="button" onClick={handleLogin}>Register</button> */}
          <button type="button" onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginSection
