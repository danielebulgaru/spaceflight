import { useEffect, useState } from "react"
import { getArticles } from "../api"
import ArticleCard from "../components/ArticleCard"
import type { Article } from "../types"

const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles()
        setArticles(data.results)
      } catch {
        setError("Errore nel caricamento articoli")
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) {
    return <p className="text-center">Caricamento...</p>
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>
  }

  return (
    <main className="container">
      <section className="text-center mb-5">
        <h1 className="fw-bold">Spaceflight News</h1>
        <p className="text-muted">Ultime notizie dal mondo dello spazio</p>
      </section>

      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>
    </main>
  )
}

export default HomePage