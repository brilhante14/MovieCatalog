const categories = [{
   title: "Popular",
   url: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`,
},{
   title: "New Releases",
   url: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=release_date.desc`,
},{
   title: "Children & Family TV",
   url: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`
},{
   title: "Best of Drama",
   url: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`
},{
   title: "Best of Action",
   url: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28&sort_by=vote_average.desc&vote_count.gte=10`
},{
   title: "Best of Romance",
   url: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749&sort_by=vote_average.desc&vote_count.gte=10`
}]

export default categories;