export const state = () => ({
  articles: [],
  categories: "",
  activeCategory: "",
  emailInfos: {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  },
})

export const mutations = {
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
  setEmailInfos(state, emailInfos) {
    return (state.emailInfos = emailInfos)
  },
}
