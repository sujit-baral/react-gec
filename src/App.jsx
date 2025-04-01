import React, { lazy, Suspense } from "react";
import Header from "./layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MyNavigate from "./components/MyNavigate";
import MyContext from "./components/MyContext";
import CallBack from "./components/CallBack";
import DataMap from "./components/DataMap";
import FormHandling from "./components/FormHandling";
import LCMethod from "./components/LCMethod";
import UnControlled from "./components/UnControlled";
import UseZustand from "./components/UseZustand";
const ApiConnectivity = lazy(() => import("./components/ApiConnectivity"));

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>Loading......</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/mypath" element={<MyNavigate />} />
          <Route path="/mycontext" element={<MyContext />}/>
          <Route path="/callback" element={<CallBack />} />
          <Route path="/map" element={<DataMap />} />
          <Route path="/form" element={<FormHandling />} />
          <Route path="/api" element={<ApiConnectivity />} />
          <Route path="/lcm" element={<LCMethod />} />
          <Route path="/uncl" element={<UnControlled />} />
          <Route path="/zustand" element={<UseZustand />} />
        </Routes>
        <Footer />
      </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
