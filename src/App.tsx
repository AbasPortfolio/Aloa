import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LoadingPage from './pages/LoadingPage';



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
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="*" element={<NotFound />} />

                    {/* Protected routes */}

          
                   
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;