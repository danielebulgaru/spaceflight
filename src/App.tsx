import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ArticleDetailPage from "./pages/ArticleDetailPage"

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">
            Spaceflight
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
