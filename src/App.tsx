import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-3 z-50 mx-auto mb-10 mt-3 w-full max-w-4xl px-4">
            <Nav />
          </header>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<PortfolioPage />} />
              <Route path="/layout-lab" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/writing/:id" element={<ArticlePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
