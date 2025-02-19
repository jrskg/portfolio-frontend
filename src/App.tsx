import React, { Suspense, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopLoader from "./components/TopLoader";
import Home from "./pages/Home";
import { baseUrl } from "./utils/axiosInstance";

const Chat = React.lazy(() => import("./pages/Chat"));
const AllProjects = React.lazy(() => import("./pages/AllProjects"));

function App() {
  useEffect(() => {
    const handleReset = () => {
      const url = `${baseUrl}/clear-session`;
      navigator.sendBeacon(url);
    }
    window.addEventListener("beforeunload", handleReset);
    return () => {
      window.removeEventListener("beforeunload", handleReset);
    }
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={
          <Suspense fallback={<TopLoader />}>
            <Chat />
          </Suspense>} />
        <Route path="/project/all" element={
          <Suspense fallback={<TopLoader />}>
            <AllProjects />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;