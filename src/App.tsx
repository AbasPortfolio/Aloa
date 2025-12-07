import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LoadingPage from './pages/LoadingPage';
import SettingsPage from './pages/SettingsPage';


import NotFound from './pages/NotFound';
import SettingsItemPage from './organisms/SettingsItemPage';
import Profile from "./pages/Profile.tsx";
import EditProfile from "./organisms/EditProfile";

import ProtectedRoute from "./pages/ProtectedRoute";
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
                    <Route path="/user" element={<ProtectedRoute element={Profile} />} />
          
                    <Route path="/settings" element={<ProtectedRoute element={SettingsPage} />} />
                    <Route path="/edit" element={<ProtectedRoute element={EditProfile} />} />
          
                    

                    <Route path="/settings/:id" element={<ProtectedRoute element={SettingsItemPage} />} />
                    
                    <Route path="/profile/editProfile" element={<ProtectedRoute element={EditProfile} />} />
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;