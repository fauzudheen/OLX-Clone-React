import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posts from './components/Posts';
import SellProduct from './components/SellProduct';
import { PostContext } from './context/PostContext';
import ProductDetails from './components/ProductDetails';

function App() {
  const [postDetails, setPostDetails] = useState(null)

  return (
    <div>
      <AuthContextProvider>
        <PostContext.Provider value={{ postDetails, setPostDetails }}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Posts />} />
            </Route>
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/sellProduct" element={<SellProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </PostContext.Provider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
