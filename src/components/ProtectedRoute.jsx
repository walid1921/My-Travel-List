import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"

function ProtectedRoute({children}) {
  const {isAuthenticated} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) navigate('/login/auth', {replace : true})
  }, [isAuthenticated, navigate])
  return isAuthenticated ? children : null
}

export default ProtectedRoute
