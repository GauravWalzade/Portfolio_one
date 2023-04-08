import { useEffect } from "react";
import Layout from "./layout/Layout";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css"
import Sitemap from "./pages/Sitemap.js";
import PageNotFound from "./pages/PageNotFound"
import Faq from "./pages/Faq";
import Index from "./pages/Index";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import News from "./pages/News";

function App() {
  useEffect(() => {
    AOS.init();
  window.scrollTo(0,0);
  }, [])
  return (
    <>
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/News" element={<News/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
      </Layout>
      </Router>
    </>
  );
}

export default App;
