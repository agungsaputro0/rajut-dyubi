import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoadingSpinner from './components/atoms/LoadingSpinner';
import ProtectedRoute from './components/hooks/ProtectedRoute';
import RedirectIfLoggedIn from './components/hooks/RedirectIfLoggedIn';

const Welcome = lazy(() => import('./components/pages/Welcome'));
const LoginPage = lazy(() => import('./components/pages/Login'));
const Home = lazy(() => import('./components/pages/Home'));
const Profil = lazy(() => import('./components/pages/Profil'));
const SignUpPage = lazy(() => import('./components/pages/SignUp'));
const ResendActivationPage = lazy(() => import('./components/pages/ResendActivation'));
const Users = lazy(() => import('./components/pages/Users'));
const AddUser = lazy(() => import('./components/pages/AddUser'));
const UpdateUser = lazy(() => import('./components/pages/UpdateUser'));

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Navigate to="/Welcome" />} />
        <Route path="/Welcome" element={<RedirectIfLoggedIn><Welcome /></RedirectIfLoggedIn>} />
        <Route path="/Login" element={<RedirectIfLoggedIn><LoginPage /></RedirectIfLoggedIn>} />
        <Route path="/SignUp" element={<RedirectIfLoggedIn><SignUpPage /></RedirectIfLoggedIn>} />
        <Route path="/ResendAktivasi" element={<RedirectIfLoggedIn><ResendActivationPage /></RedirectIfLoggedIn>} />
        <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/Profil" element={<ProtectedRoute><Profil /></ProtectedRoute>} />
        <Route path="/Users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/TambahUser" element={<ProtectedRoute><AddUser /></ProtectedRoute>} />
        <Route path="/UpdateUser/:tipe/:uid" element={<ProtectedRoute><UpdateUser /></ProtectedRoute>} />
      </Routes>
    </Suspense>
  );
};

export default App;
