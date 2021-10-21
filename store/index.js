// // Global state
// export const state = () => ({
//   article: {
//     title: "",
//     category: "",
//     excerpt: "",
//     body: "",
//     slug: "",
//     date: "",
//   },
//   articles: [],
//   sanityArticles: [],
// })

// // Mutations
// export const mutations = {
//   setArticles(state, data) {
//     state.articles = data
//   },
//   setArticle(state, article) {
//     state.article = article
//   },
// }

// // Actions
// export const actions = {
//   async dispatchArticles({ commit }) {
//     try {
//       const res = await fetch("http://localhost:3000/data.json")
//       const data = await res.json()
//       commit("setArticles", data)
//     } catch (error) {
//       console.error(error)
//     }
//   },
//   async dispatchArticle({ commit }, slug) {
//     try {
//       // Fetch Data
//       const res = await fetch("http://localhost:3000/data.json")
//       const data = await res.json()

//       // Filter & Return article by slug
//       const [article] = data.filter((article) => article.slug === slug)
//       // Commit article
//       commit("setArticle", article)
//     } catch (error) {
//       console.error(error)
//     }
//   },
// }
