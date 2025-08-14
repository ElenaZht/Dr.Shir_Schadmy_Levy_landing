import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import DiplomasPage from './pages/DiplomasPage'
import DiplomaPage from './pages/DiplomaPage'
import SearchResultsPage from './pages/SearchResultsPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="article/:id" element={<ArticlePage />} />
          <Route path="diplomas" element={<DiplomasPage />} />
          <Route path="diploma/:id" element={<DiplomaPage />} />
          <Route path="search" element={<SearchResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
