import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./pages/home";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/navbar/Navabr";
import Admin from "./components/Admin/Admin";
import Footer from "./components/footer/Footer";
import Aboutus from "./pages/aboutus";

import { AuthProvider } from "./Contexts/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/knowmore" element={<KnowMore />} />
        <Route path="/form" element={<Form />} />
        <Route path="/img" element={<Imggg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
      <Footer />
      </AuthProvider>

    </>
  );
};

export default App;
