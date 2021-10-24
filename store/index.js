export const state = () => ({
  articles: [],
  article: {},
  categories: {
    title: "",
    body: [],
    categories: [],
    publishedAt: "",
  },
  activeCategory: "",
  emailInfos: {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  },
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
  // Set Mail Data
  setFirstName(state, firstName) {
    return (state.emailInfos.firstName = firstName)
  },
  setLastName(state, lastName) {
    return (state.emailInfos.lastName = lastName)
  },
  setEmail(state, email) {
    return (state.emailInfos.email = email)
  },
  setMessage(state, message) {
    return (state.emailInfos.message = message)
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
  catgories(state) {
    return state.categories
  },
}
