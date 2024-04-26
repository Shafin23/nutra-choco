import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Aboutus from './pages/Aboutus.jsx';
import Shopall from './pages/Shopall.jsx';
import Ourrangepage from './pages/Ourrangepage.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Privacypolicypage from './pages/Privacypolicypage.jsx';
import Refundpage from './pages/Refundpage.jsx';
import Termsandservicespage from './pages/Termsandservicespage.jsx';
import Shippingpolicypage from './pages/Shippingpolicypage.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import ResetSuccess from './pages/ResetSuccess.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<Homepage />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password" element={<ResetPassword />} />
//       <Route path="/reset-success" element={<ResetSuccess />} />
//       <Route path="/about-us" element={<Aboutus />} />
//       <Route path="/shop-all" element={<Shopall />} />
//       <Route path="/our-range" element={<Ourrangepage />} />
//       <Route path="/wishlist" element={<Wishlist />} />
//       <Route path="/privacy-policy" element={<Privacypolicypage />} />
//       <Route path="/refund-policy" element={<Refundpage />} />
//       <Route path="/terms-of-services" element={<Termsandservicespage />} />
//       <Route path="/shipping-policy" element={<Shippingpolicypage />} />
//     </Route>
//   )
// );


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/reset-password",
        element: <ResetPassword />
      },
      {
        path: "/reset-success",
        element: <ResetSuccess />
      },
      {
        path: "/about-us",
        element: <Aboutus />
      },
      {
        path: "/shop-all",
        element: <Shopall />
      },
      {
        path: "/our-range",
        element: <Ourrangepage />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/privacy-policy",
        element: <Privacypolicypage />
      },
      {
        path: "/refund-policy",
        element: <Refundpage />
      },
      {
        path: "/terms-of-services",
        element: <Termsandservicespage />
      },
      {
        path: "/shipping-policy",
        element: <Shippingpolicypage />
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);