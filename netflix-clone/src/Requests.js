const key = "80c19df3d445c24ab5581d3512fd2a08";

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRate:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1` ,
    requestTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=${key}` ,
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false` ,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests