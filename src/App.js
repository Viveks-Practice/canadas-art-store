import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
// Import other components you want to route to
// import About from "./About";
// import Careers from "./Careers";
// import Contact from "./Contact";
import NotFound from "./NotFound"; // A component to render for undefined routes
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

library.add(fab); // Adds all brand icons to the library

function App() {
  return (
    <Router>
      <Header />
      <div className="header-spacer"></div>
      <div className="main-content">
        <Routes>
          {" "}
          {/* Switch renders the first matching route exclusively */}
          <Route exact path="/" element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} /> */}
          {/* Add more routes as needed */}
          <Route path="/products/:productId" element={<ProductDetails />} />
          {/* Fallback route, for undefined paths, should always be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
