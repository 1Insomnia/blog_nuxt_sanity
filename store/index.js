export const state = () => ({
  articles: [],
  article: {
    title: "",
    body: "",
    categories: "",
    publishedAt: "",
    image: "",
  },
  categories: {
    title: "",
    body: [],
    categories: [],
    publishedAt: "",
  },
  activeCategory: "",
})

export const mutations = {
  setArticle(state, article) {
    return (state.article = article)
  },
  // Set All Articles
  setArticles(state, articles) {
    return (state.articles = articles)
  },
  // Set All Categories
  setCategories(state, categories) {
    return (state.categories = categories)
  },
  // Set One Category
  setActiveCategory(state, activeCategory) {
    return (state.activeCategory = activeCategory)
  },
}

export const getters = {
  // Get One Article
  article(state) {
    return state.article
  },
  // Get Multiple Articles
  articles(state) {
    return state.articles
  },
  // Get All Categories
  categories(state) {
    return state.categories
  },
}
