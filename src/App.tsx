import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LoadingPage from './pages/LoadingPage';
import UserItemPage from './organisms/UserItemPage';
import CreatePage from './pages/CreatePage';
import PatientsPage from './pages/PatientsPage';
import ProtectedRoute from "./pages/ProtectedRoute";

import NotFound from './pages/NotFound';




import { UserProvider } from './context/UserContext'; // Import UserProvider

const App: React.FC = () => {
    const location = useLocation();
    return (
        <UserProvider>
            <div className={`${location.pathname === '/' ? 'Loading-background' : 'App'}`}>
                <Routes>
                    <Route path="/" element={<LoadingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="*" element={<NotFound />} />

                    {/* Protected routes */}

                    <Route path="/create" element={<ProtectedRoute element={CreatePage} />} />
                    <Route path="/patients" element={<ProtectedRoute element={PatientsPage} />} />
                    <Route path="/patients/:id" element={<ProtectedRoute element={UserItemPage} />} />
                
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;









