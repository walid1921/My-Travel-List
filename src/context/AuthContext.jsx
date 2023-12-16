import axios from "axios"
import { createContext, useContext, useReducer } from "react"


const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null,
  // token: null,
}


function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }
    case 'logout':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const BACKEND_URL = 'http://localhost:5000/api';

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {

  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState)


  async function login(email, password) {
    try {
      //Make a request to your backend for authentication
      const response = await axios.post(`${BACKEND_URL}/auth/login`, {
        email,
        password,
      });

      // Assuming the response contains the authenticated user data
      const authenticatedUser = response.data;
      // console.log(authenticatedUser.userName)

      dispatch({ type: 'login', payload: authenticatedUser });
    } catch (error) {
      // Handle authentication failure, show error message, etc.
      console.error('Authentication failed:', error.message);
      throw error;
    }
  }

  function logout() {
    dispatch({ type: 'logout' })
  }

  return <AuthContext.Provider value={{
    user,
    isAuthenticated,
    login,
    logout
  }} >{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) throw new Error('You probably forgot to put <AuthProvider>.')
  return context;
}

export { AuthProvider, useAuth }
