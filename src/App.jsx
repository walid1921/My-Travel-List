// import initialItems from "./assets/data";
import { BrowserRouter, Navigate, Route, Routes,} from 'react-router-dom'
import MainApp from "./components/MainApp";

import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/HomePage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";



export default function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route index element={<Navigate replace to='/login/auth' />} />
            <Route path="/login/auth" element={<HomePage />} />


            <Route path="/travelList" element={<ProtectedRoute><MainApp /></ProtectedRoute>} />


            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div >
  );
}
