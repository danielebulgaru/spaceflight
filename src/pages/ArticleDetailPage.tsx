import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getArticleById } from "../api"
import type { Article } from "../types"

const ArticleDetailPage = () => {
  const { id } = useParams()

  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!id) return

    const fetchArticle = async () => {
      try {
        const data = await getArticleById(id)
        setArticle(data)
      } catch {
        setError("Errore nel caricamento dettaglio")
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  if (loading) {
    return <p className="text-center">Caricamento...</p>
  }

  if (error || !article) {
    return <p className="text-center text-danger">{error}</p>
  }

  return (
    <main className="container">
      <Link to="/" className="btn btn-outline-dark mb-4">
        Torna indietro
      </Link>

      <article className="card shadow">
        <img
          src={article.image_url}
          className="card-img-top detail-img"
          alt={article.title}
        />

        <div className="card-body">
          <span className="badge bg-primary me-2">{article.news_site}</span>

          {article.featured && (
            <span className="badge bg-warning text-dark">Featured</span>
          )}

          <h1 className="mt-3">{article.title}</h1>

          <p className="text-muted">
            Pubblicato il {new Date(article.published_at).toLocaleString("it-IT")}
          </p>

          <p className="text-muted">
            Aggiornato il {new Date(article.updated_at).toLocaleString("it-IT")}
          </p>

          <p className="fs-5">{article.summary}</p>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Articolo originale
          </a>

          <hr />

          <h4>Launches</h4>

          {article.launches.length > 0 ? (
            <ul>
              {article.launches.map(launch => (
                <li key={launch.launch_id}>
                  {launch.provider} - {launch.launch_id}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nessun launch collegato</p>
          )}

          <h4>Events</h4>

          {article.events.length > 0 ? (
            <ul>
              {article.events.map(event => (
                <li key={event.event_id}>
                  {event.provider} - {event.event_id}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nessun evento collegato</p>
          )}
        </div>
      </article>
    </main>
  )
}

export default ArticleDetailPage