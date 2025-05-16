import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
  Link
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import CustomCursor from './components/CustomCursor/CustomCursor';
import { ProductProvider } from './context/ProductContext';
import CurrentProduct from './components/CurrentProdect';
import ScrollArrows from './components/ScrollArrows';

// Layout component that includes common elements
const Layout = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Fixed cursor that stays on top */}
      <CustomCursor
        cursorSpeed={0.8}
        trailSpeed={0.4}
        magneticStrength={30}
      />

      {/* Fixed navigation bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Scroll Arrows */}
      <ScrollArrows />

      {/* Main content with padding for fixed navbar */}
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
};

// Create router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<CurrentProduct />} />

      <Route path="*" element={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-orbitron text-4xl text-redbull-red mb-4">Page Not Found</h1>
            <p className="font-rajdhani text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
            <Link
              to="/"
              className="font-syncopate px-8 py-3 bg-gradient-to-r from-redbull-red to-redbull-blue text-white rounded-full 
                       hover:shadow-lg hover:shadow-redbull-red/20 transition-all duration-300 transform hover:scale-105"
            >
              GO HOME
            </Link>
          </div>
        </div>
      } />
    </Route>
  )
);

const App = () => {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
};

export default App; 