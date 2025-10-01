import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingSpinner from './components/atoms/LoadingSpinner';
import RedirectIfLoggedIn from './components/hooks/RedirectIfLoggedIn';

const Welcome = lazy(() => import('./components/pages/Welcome'));
const LoginPage = lazy(() => import('./components/pages/Login'));
const AboutUs = lazy(() => import('./components/pages/AboutUs'));
const Katalog = lazy(() => import('./components/pages/Katalog'));
const Blog = lazy(() => import('./components/pages/Blog'));
const Contact = lazy(() => import('./components/pages/Contact'));

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Navigate to="/Welcome" />} />
        <Route path="/Welcome" element={<RedirectIfLoggedIn><Welcome /></RedirectIfLoggedIn>} />
        <Route path="/About-us" element={<RedirectIfLoggedIn><AboutUs /></RedirectIfLoggedIn>} />
        <Route path="/Katalog" element={<RedirectIfLoggedIn><Katalog /></RedirectIfLoggedIn>} />
        <Route path="/Blog" element={<RedirectIfLoggedIn><Blog /></RedirectIfLoggedIn>} />
        <Route path="/Contact" element={<RedirectIfLoggedIn><Contact /></RedirectIfLoggedIn>} />
        <Route path="/Login" element={<RedirectIfLoggedIn><LoginPage /></RedirectIfLoggedIn>} />
      </Routes>

      {/* Tambahkan container di sini */}
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
    </Suspense>
  );
};

export default App;
