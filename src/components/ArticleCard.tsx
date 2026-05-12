import { Link } from "react-router-dom"
import type { Article } from "../types"

interface ArticleCardProps {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={article.image_url}
          className="card-img-top article-img"
          alt={article.title}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge bg-primary mb-2 align-self-start">
            {article.news_site}
          </span>

          <h5 className="card-title">{article.title}</h5>

          <p className="text-muted small">
            {new Date(article.published_at).toLocaleDateString("it-IT")}
          </p>

          <p className="card-text">{article.summary}</p>

          <Link to={`/articles/${article.id}`} className="btn btn-dark mt-auto">
            Dettaglio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard