import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { articles } from '../data/articles'
import ArticleDetail from '../components/ArticleDetail'

function ArticlePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // Find the article by ID
  const article = articles.find(article => article.id === parseInt(id))
  
  // If article not found, redirect to home
  if (!article) {
    navigate('/')
    return null
  }

  return <ArticleDetail />
}

export default ArticlePage
