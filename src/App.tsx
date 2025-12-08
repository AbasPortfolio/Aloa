import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LoadingPage from './pages/LoadingPage';

import NotFound from './pages/NotFound';


import EditProfile from "./organisms/EditProfile";

import { UserProvider } from './context/UserContext'; // Import UserProvider

const App: React.FC = () => {
    const location = useLocation();
    return (
        <UserProvider>
            <div className={`${location.pathname === '/' ? 'Loading-background' : 'App'}`}>
                <Routes>
                    <Route path="/" element={<LoadingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="*" element={<NotFound />} />

                    {/* Protected routes */}
                    
                    <Route path="/home" element={<ProtectedRoute element={HomePage} />} />

                
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;

