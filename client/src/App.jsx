import Footer from "@components/Footer";
import Header from "@components/Header";
import Home from "@screens/HomeScreen";
import React from "react";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200">
      <Header />
      <div className="h-14 sm:h-18 lg:h-28" />
      <div className="grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
