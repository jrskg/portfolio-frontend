import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import React, { Suspense } from "react";
import TopLoader from "./components/TopLoader";

const Chat = React.lazy(() => import("./pages/Chat"));
const AllProjects = React.lazy(() => import("./pages/AllProjects"));

function App() {
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
        <Route path="/ok" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;