import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Lazy load pages to improve performance
const LandingApp = React.lazy(() => import('./pages/Landing/App'));
const StartupDashboardApp = React.lazy(() => import('./pages/StartupDashboard/App'));
const InvestorDashboardApp = React.lazy(() => import('./pages/InvestorDashboard/App'));
const InvestorLogin = React.lazy(() => import('./pages/InvestorAuth/InvestorLogin'));
const InvestorRegisterFlow = React.lazy(() => import('./pages/InvestorAuth/InvestorRegisterFlow'));
const SuperAdminDashboardApp = React.lazy(() => import('./pages/SuperAdminDashboard/App'));

// Startup Registration Components
// We import these directly from the file, bypassing the original App.jsx which had the Router
const RegisterPage = React.lazy(() => import('./pages/StartupRegistration/RegisterPage'));
const MultiStepForm = React.lazy(() => import('./pages/StartupRegistration/MultistepForm'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<LandingApp />} />

                    {/* Startup Registration Routes */}
                    <Route path="/startup/register" element={<RegisterPage />} />
                    <Route path="/startup/onboarding" element={<MultiStepForm />} />

                    {/* Dashboards */}
                    <Route path="/startup/dashboard" element={<StartupDashboardApp />} />
                    <Route path="/investor/login" element={<InvestorLogin />} />
                    <Route path="/investor/register" element={<InvestorRegisterFlow />} />
                    <Route path="/investor/dashboard" element={<InvestorDashboardApp />} />
                    <Route path="/admin/*" element={<SuperAdminDashboardApp />} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
