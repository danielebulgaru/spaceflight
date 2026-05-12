import type { Article, ArticlesApiResponse } from "./types"

const BASE_URL = "https://api.spaceflightnewsapi.net/v4/articles"

export const getArticles = async (): Promise<ArticlesApiResponse> => {
  const response = await fetch(BASE_URL)

  if (!response.ok) {
    throw new Error("Errore nel recupero articoli")
  }

  return response.json()
}

export const getArticleById = async (id: string): Promise<Article> => {
  const response = await fetch(`${BASE_URL}/${id}`)

  if (!response.ok) {
    throw new Error("Errore nel recupero articolo")
  }

  return response.json()
}