import Header from "./components/Header.js"
import Footer from "./components/footer.js"
import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home.js"
import Blog from "./pages/Blog.js"
import Contact from "./pages/Contact.js"
import LegalNotice from "./pages/LegalNotice.js"
import Realisation from "./pages/Realisation.js"
import ServicePage from "./pages/ServicePage.js"

function App() {
  return (
    <div className="App bg-all">
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/service" element={<ServicePage />}/>
          <Route path="/realisations" element={<Realisation />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/legalnotice" element={<LegalNotice />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
