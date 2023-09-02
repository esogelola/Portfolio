import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./utils/ScrollToTop";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function MainContent() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 justify-center sm:p-4  ">
        <div className="w-full max-w-5xl mx-auto">
          {/* Navbar */}
          <div className="mt-6 mb-12 text-center flex justify-center ">
            <Nav />
          </div>
          <ScrollToTop />
          <Switch>
            {/* Main Content */}
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/experience" exact>
              <Experience />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>

            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default MainContent;
